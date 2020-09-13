import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getRgPlace } from '../../../actions/search';
import { setPrevPlace } from '../../../actions/search';
import { clear } from '../../../actions/search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMapGL from 'react-map-gl';

import MapPopup from './MapPopup';
import MapMarker from './MapMarker';

const MapContainer = ({
  setSlide,
  isSlide,
  place,
  prevPlace,
  nearby,
  getRgPlace,
  rgPlace,
  clear,
}) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    position: 'absolute',
    latitude: 23.777176,
    longitude: 90.399452,
    zoom: 8,
  });

  useEffect(() => {
    setViewport({
      ...viewport,
      zoom: 16,
      latitude:
        (place && parseFloat(place.latitude)) ||
        (prevPlace && prevPlace.latitude) ||
        23.777176,
      longitude:
        (place && parseFloat(place.longitude)) ||
        (prevPlace && prevPlace.longitude) ||
        90.399452,
    });
    // eslint-disable-next-line
  }, [place]);

  // to close the popup on Esp button
  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPlace(null);
      }
    };

    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  const handleClick = () => {
    setSlide(!isSlide);
  };

  const handleMapClick = (e) => {
    clear(); // so that the map doesnt change viewport
    getRgPlace(e.lngLat[1], e.lngLat[0]);
  };

  return (
    <div className='map-container'>
      <div className='slide-arrow'>
        {isSlide && (
          <FontAwesomeIcon
            icon='angle-right'
            size='lg'
            color='black'
            onClick={handleClick}
          />
        )}
      </div>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle='https://map.barikoi.com/styles/osm-liberty/style.json'
        onDblClick={handleMapClick}
        doubleClickZoom={false}
      >
        {place || rgPlace ? (
          <MapMarker
            placeMarker={place || rgPlace}
            setSelectedPlace={setSelectedPlace}
          />
        ) : prevPlace && prevPlace.latitude && prevPlace.longitude ? (
          <MapMarker
            placeMarker={prevPlace}
            setSelectedPlace={setSelectedPlace}
          />
        ) : (
          ''
        )}

        <MapPopup
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
        />

        {nearby &&
          nearby.map((item) => (
            <MapMarker placeMarker={item} setSelectedPlace={setSelectedPlace} />
          ))}
      </ReactMapGL>
    </div>
  );
};

const mapStateToProps = (state) => ({
  place: state.search.place,
  prevPlace: state.search.prevPlace,
  nearby: state.search.nearby,
  rgPlace: state.search.rgPlace,
  nearbyMarker: state.search.nearbyMarker,
});

export default connect(mapStateToProps, { clear, getRgPlace, setPrevPlace })(
  MapContainer
);

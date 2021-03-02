import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPlace } from '../../../../actions/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import match from 'autosuggest-highlight/umd/match';
import parse from 'autosuggest-highlight/umd/parse';

const AutocompleteList = ({ place, getPlace, setTyping, text, setText }) => {

  let matchPlace =
  place.business_name || place.place_name
      ? place.business_name || place.place_name
      : place.Address;
  let addr = place && place.Address && place.Address !== null ? place.Address.split(',') : place.new_address.split(',');
  let newAddr = addr.filter(value => {
    // return value !== " "
    return /\S/.test(value);
  })
  let address = newAddr && newAddr.length > 1 ? newAddr.slice(1, newAddr.length).join(',') : newAddr.toString();
  let sub = place && place.subType ? place.subType.split(',') : null
  let subTypes = sub.length > 3 ? sub[0]+', '+sub[1]+', '+sub[2] : sub.join(', ')
 
  const handleClick = (e) => {
    getPlace(place.uCode);
    //to make the white bg from search-active class inactive
    setTyping(false);
    setText(matchPlace); // to keep the search result name in the input bar.
  };

  // useEffect(() => {
  //   reactStringReplace(matchPlace, regex, (m, i) => (
  //     <span key={i} style={{ color: 'red' }}>
  //       {m}
  //     </span>
  //   ));
  //   // eslint-disable-next-line
  // }, [regex]);

  // const formatValue = (matchPlace, text) => {
  //   var textMatcher = new RegExp(text, 'ig');
  //   console.log({ textMatcher });

  //   return reactStringReplace(matchPlace, textMatcher, (textMatcher, i) => {
  //     return (
  //       <span key={i} style={{ color: 'red' }}>
  //         {textMatcher}
  //       </span>
  //     );
  //   });
  // };

  let matches = match(matchPlace, text);
  let newMatchPlace = matchPlace && matchPlace.replace(/,/g, "")
  let parts = parse(matchPlace, matches);

  return (
    <li>
      <div className='autocomplete-item' onClick={handleClick}>
        <div className='location-icon'>
          <FontAwesomeIcon icon='map-marker-alt' size='lg' color='black' />
        </div>

        <div className='autocomplete-info'>
          <h4>
            {parts.map((p, index) =>
              p.highlight ? (
                <span key={index} style={{ fontWeight: '400' }}>{p.text}</span>
              ) : (
                <span key={index}>{p.text}</span>
              )
            )}
          </h4>
          <p style={{ fontSize: '12pt', marginTop: '2px' }}>
            {address ? address + ', ' : ''}
            {place.area ? place.area + ', ' : ''}
            {place.city ? place.city : ''}
          </p>
          <p className='autocomplete-subtype margin-right-4'>
            {place.pType}
          </p>
          <p className='autocomplete-subtype'>
            {subTypes}
          </p>
        </div>
      </div>
    </li>
  );
};

export default connect(null, { getPlace })(AutocompleteList);

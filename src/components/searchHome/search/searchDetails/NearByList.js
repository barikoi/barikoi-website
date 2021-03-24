import React from 'react';
import { connect } from 'react-redux';

const NearByList = ({ nearby }) => {

  const check = ( index ) => {
    // console.log('item clicked', index)
  }
  const nearByList =
    nearby &&
    nearby.map(
      (item, index) => (
        <li key={item.id}>
          <div className='nearby-info'>
            <p onClick={ e => check( index ) }>{item.Address}</p>
          </div>
        </li>
      )
    );
  return (
    <div className='nearby-content hide-mobile show-desktop'>
      <ul className='scroll'>{ nearByList }</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nearby: state.search.nearby,
});
export default connect(mapStateToProps)(NearByList);

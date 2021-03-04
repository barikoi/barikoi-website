import React, { Fragment } from 'react';
import RupantorHeader from './RupantorHeader';
import RupantorContent from './RupantorContent';
import Navbar from '../../layout/Navbar';
import Footer from '../../footer/Footer';

const Rupantor = () => {
  return (
    <Fragment>
      <Navbar />
      <RupantorHeader />
      <div className='container'>
        <RupantorContent />
      </div>
      <Footer />
    </Fragment>
  );
};
export default Rupantor;

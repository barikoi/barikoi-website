import React, { Fragment } from 'react';

//import components
import ApiHeader from '../apiPage/ApiHeader';
import ApiContent from '../apiPage/ApiContent';
import Navbar from '../../layout/Navbar';
import Footer from '../../footer/Footer';

const ApiPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <ApiHeader />
        <ApiContent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default ApiPage;

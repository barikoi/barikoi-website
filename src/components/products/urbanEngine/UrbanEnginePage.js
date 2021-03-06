import React, { Fragment } from 'react';

//import components
import UrbanHeader from './UrbanHeader';
import UrbanContent from './UrbanContent';
import Navbar from '../../layout/Navbar';
import Footer from '../../footer/Footer';

const UrbanEnginePage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <UrbanHeader />
        <UrbanContent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default UrbanEnginePage;

import React, { Fragment } from 'react';

//import components
import LandingPage from './LandingPage';
import AppLink from './AppLink';
import BkoiBusiness from './BkoiBusiness';
import BkoiDevelopers from './BkoiDevelopers';
import BkoiBuilt from './BkoiBuilt';
import Navbar from '../layout/Navbar';
import FeaturedOn from './FeaturedOn';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <LandingPage />
      <AppLink />
      <BkoiBusiness />
      <BkoiDevelopers />
      <BkoiBuilt />
      <FeaturedOn />
      <Footer />
    </Fragment>
  );
};

export default Home;

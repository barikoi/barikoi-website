import React from 'react';
import PricingHeader from './PricingHeader';
import PricingPlans from './PricingPlans';
import PricingDefinition from './PricingDefinition';
import PricingCalculator from './PricingCalculator';
import PricingFooter from './PricingFooter';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <PricingHeader />
        <PricingPlans />
        <PricingDefinition />
        <PricingCalculator />
      </div>
      <PricingFooter />
      <Footer />
    </>
  );
};

export default Pricing;

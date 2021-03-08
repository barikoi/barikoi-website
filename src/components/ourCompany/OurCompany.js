import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../footer/Footer'
import OurCompanyHeader from './OurCompanyHeader';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const OurCompany = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container'>
                <OurCompanyHeader />
                <SecondSection />
                <ThirdSection />
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default OurCompany;
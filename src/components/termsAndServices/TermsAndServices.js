import React from 'react';

//import components
import Navbar from '../../components/layout/Navbar'
import Footer from '../footer/Footer';
import TermsAndServicesContent from './TermsAndServicesContent';

const TermsAndServices = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container' >
                <TermsAndServicesContent />
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default TermsAndServices;
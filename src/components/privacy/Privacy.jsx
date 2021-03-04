import React from 'react';

//import components
import Navbar from '../../components/layout/Navbar'
import Footer from '../footer/Footer';
import PrivacyContents from './PrivacyContents';


const Privacy = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container' >
                <PrivacyContents />
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Privacy;
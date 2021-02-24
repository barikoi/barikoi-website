import React from 'react';

//import components
import Navbar from '../../components/layout/Navbar'
import PrivacyContents from './PrivacyContents';


const Privacy = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container' >
                <PrivacyContents />
            </div>
        </React.Fragment>
    );
};

export default Privacy;
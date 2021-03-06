import React from 'react';
import ContactInfo from './ContactInfo';
import ContactUs from './ContactUs';
import FollowUsOn from './FollowUsOn';
import PolicyPages from './PolicyPages';

const Footer = () => {
    return (
        <div style={{background: 'black'}}>
            <div className='container'>
                <div className='verify about-content wrapper'>
                    <div className='bkoi-verify-page'>
                        <ContactInfo />
                        <PolicyPages />
                        {/* <ContactUs /> */}
                        <FollowUsOn />
                    </div>
                </div>
            </div>
        </div>        
    );
};

export default Footer;
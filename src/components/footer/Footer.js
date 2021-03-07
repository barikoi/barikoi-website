import React from 'react';
import ContactInfo from './ContactInfo';
import ContactUs from './ContactUs';
import FollowUsOn from './FollowUsOn';
import PolicyPages from './PolicyPages';

const Footer = () => {
    return (
        <div style={{background: 'black'}}>
            <div className='container'>
                <div className='verify footer-content wrapper'>
                    <div className='bkoi-verify-page'>
                        <ContactInfo />
                        <PolicyPages />
                        {/* <ContactUs /> */}
                        <FollowUsOn />
                    </div>
                    <p style={{...copyrightStyle}}>Copyright &copy; 2021 Barikoi Technologies Limited</p>
                </div>
            </div>
        </div>        
    );
};

const copyrightStyle = {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '14px'
}

export default Footer;
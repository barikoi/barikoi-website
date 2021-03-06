import React from 'react';
import { Link } from 'react-router-dom'

const PolicyPages = () => {
    return (
        <div style={{...contactInfoContainer}}>
            <Link to='/termsandservices'>
                <h3 style={{...fontSize24}}>Terms and Services</h3>
            </Link>
            <Link to='/privacy'>
                <h3 style={{...fontSize24}}>Privacy Policy</h3>
            </Link>
            <Link to='/'>
                <h3 style={{...fontSize24}}>Our Team</h3>
            </Link>
            <Link to='/'>
                <h3 style={{...fontSize24}}>Our Company</h3>
            </Link>
        </div>
    );
};

const contactInfoContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    fontSize: '18px'
}

const fontSize24 = {
    fontSize: '24px',
    marginBottom: '1rem'
}

export default PolicyPages;
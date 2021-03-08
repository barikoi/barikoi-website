import React from 'react';
import { Link } from 'react-router-dom'

const PolicyPages = () => {
    return (
        <div className='footer-center'>
            <div style={{ ...contactInfoContainer }}>
                {/* <div style={{...header}}>
                    <p style={{ fontSize: '16px', fontWeight: '500' }}>Resources</p>
                </div> */}
                <Link to='/termsandservices'>
                    <p style={{...fontSize24}}>Terms and Services</p>
                </Link>
                <Link to='/privacy'>
                    <p style={{...fontSize24}}>Privacy Policy</p>
                </Link>
                {/* <Link to='/ourteam'> */}
                    <p onClick={() => {window.location.href='/ourteam'}} style={{...fontSize24}}>Our Team</p>
                {/* </Link> */}
                <Link to='/ourcompany'>
                    <p style={{...fontSize24}}>Our Company</p>
                </Link>
            </div>
        </div>
    );
};

const contactInfoContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    fontSize: '16px',
    // color: '#ffffff'
}

const fontSize24 = {
    fontSize: '16px',
    marginBottom: '0.7rem',
    color: '#fff',
    cursor: 'pointer'
}

const header = {
    marginBottom: '1rem',
    fontSize: '20px'
}

export default PolicyPages;
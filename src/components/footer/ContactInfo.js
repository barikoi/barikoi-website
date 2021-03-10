import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"


const ContactInfo = () => {
    return (
        <div style={{ ...contactInfoContainer }}>
            {/* <div style={{...header}}>
                <p style={{ fontSize: '16px' }}>Find us on</p>
            </div> */}
            <div style={{ ...addressInfo }}>
                <div style={{ ...margin1rem, ...marginTop5px }}>
                    <FontAwesomeIcon icon='map-marker-alt' size='lg' color='white' />
                </div>
                <p>Wasi Tower, House 572/K, Matikata Main Road, Matikata, Dhaka Cantonment, Dhaka</p>
            </div>
            <div style={{ ...info }}>
                <div style={{ ...margin1rem }}>
                    <FontAwesomeIcon icon={faMobileAlt} size='lg' color='white' />
                </div>
                <p>+880 1708549077</p>
            </div>
            <div style={{ ...info }}>
                <div style={{ ...margin1rem }}>
                    <FontAwesomeIcon icon={faEnvelope} size='lg' color='white' />
                </div>
                <a href='mailto:hello@barikoi.com'>
                    <p>hello@barikoi.com</p>
                </a>
            </div>
        </div>
    );
};

const contactInfoContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    color: '#ffffff'
}

const info = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '0.7rem',
}

const addressInfo = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0.7rem',
}
const margin1rem = {
    marginRight: '20px'
}

const marginTop5px = {
    marginTop: '5px'
}

export default ContactInfo;
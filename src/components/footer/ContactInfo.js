import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"


const ContactInfo = () => {
    return (
        <div style={{ ...contactInfoContainer }}>
            <div style={{...header}}>
                <h3>Address</h3>
            </div>
            <div style={{ ...info }}>
                <div style={{...margin1rem}}>
                    <FontAwesomeIcon icon='map-marker-alt' size='lg' color='white' />
                </div>                
                <p>Wasi Tower, House 572/K, Matikata Main Road, Matikata, Dhaka Cantonment, Dhaka</p>
            </div>
            <div style={{ ...info }}>
                <div style={{...margin1rem}}>
                    <FontAwesomeIcon icon={faMobileAlt} size='lg' color='white' />
                </div>
                <p>+880 1708549077</p>
            </div>
            <div style={{ ...info }}>
                <div style={{...margin1rem}}>
                    <FontAwesomeIcon icon={faEnvelope} size='lg' color='white' />
                </div>
                <a href='mailto:hello@barikoi.com'>
                    <p>hello@barikoi.com</p>
                </a>
            </div>
                {/* <div style={{ ...info }}>
                    <a style={{ ...socialIconSize }} href='https://www.instagram.com/barikoibd/' target='_blank' rel='noopener noreferrer'>
                        <img width='100%' src={require('../../assets/social-icons/instagram.png')} alt='bkoi-facebook'/>
                    </a>
                    <a style={{ ...socialIconSize }} href='https://www.facebook.com/barikoibd/' target='_blank' rel='noopener noreferrer'>
                        <img width='100%' src={require('../../assets/social-icons/facebook.png')} alt='bkoi-facebook'/>
                    </a>
                    <a style={{ ...socialIconSize }} href='https://www.linkedin.com/company/barikoi/' target='_blank' rel='noopener noreferrer'>
                        <img width='100%' src={require('../../assets/social-icons/linkedin-icon.png')} alt='bkoi-facebook'/>
                    </a>
                </div> */}
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
    marginBottom: '2rem',
}

const margin1rem = {
    marginRight: '20px'
}

const socialIconSize = {
    width: '30px',
    marginRight: '10px'
}

const header = {
    marginBottom: '2rem'
}

export default ContactInfo;
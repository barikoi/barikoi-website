import React from 'react';

const FollowUsOn = () => {
    return (
        <div style={{ ...contactInfoContainer }}>
            <div style={{...header}}>
                <h3>Follow us on</h3>
            </div>
                <div style={{ ...info }}>
                    <a style={{ ...socialIconSize }} href='https://www.instagram.com/barikoibd/' target='_blank' rel='noopener noreferrer'>
                        <img width='100%' src={require('../../assets/social-icons/instagram.png')} alt='bkoi-facebook'/>
                    </a>
                    <a style={{ ...socialIconSize }} href='https://www.facebook.com/barikoibd/' target='_blank' rel='noopener noreferrer'>
                        <img width='100%' src={require('../../assets/social-icons/facebook.png')} alt='bkoi-facebook'/>
                    </a>
                    <a style={{ ...socialIconSize }} href='https://www.linkedin.com/company/barikoi/' target='_blank' rel='noopener noreferrer'>
                        <img width='100%' src={require('../../assets/social-icons/linkedin-icon.png')} alt='bkoi-facebook'/>
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

export default FollowUsOn;
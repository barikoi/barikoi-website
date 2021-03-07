import React from 'react';

const FollowUsOn = () => {
    return (
        <div className='footer-center'>
            <div style={{ ...contactInfoContainer }}>
                <div style={{...header}}>
                    <p style={{fontSize: '16px'}}>Follow us on</p>
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
                <div style={{ width: '130px' }}>
                    <a href='https://play.google.com/store/apps/details?id=com.barikoi.barikoi'>
                        <img width='100%' src={require('../../assets/google-play.webp')} alt='' />
                    </a>
                </div>
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
    marginBottom: '1rem',
}

const margin1rem = {
    marginRight: '20px'
}

const socialIconSize = {
    width: '30px',
    marginRight: '10px'
}

const header = {
    marginBottom: '0.7rem',
    fontSize: '20px'
}

export default FollowUsOn;
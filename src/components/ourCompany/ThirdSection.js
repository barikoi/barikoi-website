import React from 'react';

const ThirdSection = () => {
    return (
        <div className='api-page api-header wrapper'>
            <div className='header-image-verify api-header-image'>
                <img src={require('../../assets/ourCompany/ourCompany-third-section.webp')} alt='' />
            </div>
            <div className='right-flex'>
                <p className='p-light-small'>
                    Barikoi collects, formats, organizes location data through mapping urban areas and collaborates with city authorities to do so. Barikoi helps companies to improve their location-based services, automate logistics, enhance the user experience, Verify KYC, Address verification, etc. On the other hand, Barikoi helps city authorities to increase revenue and city monitoring capability.​
                </p>
            </div>
        </div>
    );
};

export default ThirdSection;
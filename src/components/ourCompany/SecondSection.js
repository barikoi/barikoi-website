import React from 'react';

const SecondSection = () => {
    return (
        <div className='api-page api-header wrapper'>
            <div className='left-flex'>
                <p className='p-light-small'>
                    Barikoi is a location data and mapping company that started with a vision that enables location experience for Bangladesh. We want to make a searchable Bangladesh by providing reliable location data and make organized information available for businesses, government, and consumers. ​
                </p>
            </div>
            <div className='header-image-verify api-header-image'>
                <img src={require('../../assets/ourCompany/ourCompany-second-section.webp')} alt='' />
            </div>
        </div>
    );
};

export default SecondSection;
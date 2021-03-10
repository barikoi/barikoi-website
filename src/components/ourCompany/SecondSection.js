import React from 'react';

const SecondSection = () => {
    return (
        <React.Fragment>
            <div className='show-desktop hide-mobile'>
                <div className='api-page api-header wrapper'>
                    <div className='left-flex'>
                        <p className='p-light-small'>
                            Barikoi is a location data and mapping company that started with a vision that enables location experience for Bangladesh. We want to make a searchable Bangladesh by providing reliable location data and make organized information available for businesses, government, and consumers.
                </p>
                    </div>
                    <div className='header-image-verify api-header-image'>
                        <img src={require('../../assets/ourCompany/ourCompany-second-section.gif')} alt='' />
                    </div>
                </div>
            </div>
            <div className='hide-desktop'>
                <div className='api-page api-header wrapper'>
                    <div className='header-image-verify api-header-image'>
                        <img src={require('../../assets/ourCompany/ourCompany-second-section.gif')} alt='' />
                    </div>
                    <div className='right-flex'>
                        <p className='p-light-small'>
                            Barikoi is a location data and mapping company that started with a vision that enables location experience for Bangladesh. We want to make a searchable Bangladesh by providing reliable location data and make organized information available for businesses, government, and consumers.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SecondSection;
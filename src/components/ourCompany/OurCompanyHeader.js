import React from 'react';

const OurCompanyHeader = () => {
    return (
        <React.Fragment>
            <div className='verify about-content wrapper'>
                    <div className='heading' style={{ marginTop: '2rem' }}>
                        <h1>Barikoi is Bangladesh’s First-Full Stack Location Platform​</h1>
                        <p className='p-light-small'>
                            Founded in 2018 and Incorporated in 2019. Barikoi is headquartered in Dhaka  ​
                        </p>
                    </div>
                </div>
                <div className='api-page api-header wrapper'>
                    <div className='header-image-verify'>
                        <img src={require('../../assets/ourCompany/1st-Page-Pic.jpg')} alt='' />
                    </div>
                    <div className='right-flex'>
                        <p className='p-light-small'>
                            After graduating from Computer Science Engineering Al Amin Tayef with Sadman Sakib and Reedwan Hossain saw an opportunity to cash in on this lacking the otherwise very efficient google service. Four years ago, he founded Barikoi— a location data provider that aims to provide reliable location data in the local context.  ​
                        </p>
                        <p className='p-light-small'>
                            Barikoi have been operating in the 4 major cities of Bangladesh right now. Currently Barikoi is working with different Industries such FMCG, Delivery & Logistics Service Providers, Government and Retailers.  Barikoi is working relentlessly to be best location data provider in Bangladesh with their unique products and solutions.  ​
                        </p>
                    </div>
                </div>
        </React.Fragment>
    );
};

export default OurCompanyHeader;
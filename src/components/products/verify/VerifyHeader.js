import React from 'react'

const VerifyHeader = () => {
    return (
        <div className='landing-page'>
            <div className='overlay'></div>
            <div className='landing-image hide-mobile show-desktop'>
                <img src={require('../../../assets/bkoi-verify-header.webp')} alt='' />
            </div>

            <div className='landing-content api-page api-header'>
                <div className='wrapper'>
                    <div className='landing-info'>
                        <div >
                            <div className='right-flex-verify'>
                                <h1 className='variant-text'>
                                    Barikoi Verify
                                    <br />
                                    A Detailed and End to End
                                    <br />
                                    Verification Process
                                </h1>
                                <p className='p-light-small-verify primary-text'>
                                    A seamless tech-enabled, real-time, transparent contact point verification built on top of the state of art mapping infrastructure. We manage to leverage the old verification method from days to minutes. Moreover, Verify will help clients to judge the authenticity of the address whether it’s from the consumer’s end or merchant’s end.
                                </p>
                                <div className='display-flex'>
                                    <div className='api-btn-verify'>
                                        <a href='https://developer.barikoi.com'>
                                            <button className='btn bkoi-btn btn-circle'>
                                                Get Started!
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyHeader
import React from 'react'

const VerifyHeader = () => {
    return (
        <div className='api-page api-header wrapper'>
            <div className='header-image-verify api-header-image'>
                <img src={require('../../../assets/verify_header.webp')} alt='' />
            </div>
            <div className='right-flex'>
                <h2>
                    Verify
                </h2>
                <h1 className='primary-text' style={{ color: 'black' }}>
                    Bangladesh's
                    <br />
                    First Real-time
                    <br />
                    Address Verification
                    <br />
                    Inspection Service
                </h1>
                <a href="mailto:hello@barikoi.com?Subject=Barikoi%20Verify%20Query" target="_top">
                    <button class='btn bkoi-btn btn-circle'>Contact Us!</button>
                </a>
            </div>
        </div>
    )
}

export default VerifyHeader
import React from 'react'

const VerifyHeader = () => {
    return (
        <div className='api-page api-header wrapper'>
            <div className='header-image-verify api-header-image'>
                <img src={require('../../../assets/verify_header.webp')} alt='' />
            </div>
            <div className='right-flex'>
                <h1 className='primary-text' style={{ color: 'black' }}>
                    Verify
                    <br />
                    Bangladesh
                    <br />
                    First Real-time
                    <br />
                    Contact Point Verification
                    <br />
                    Inspection Service
                </h1>
                <a href='https://developer.barikoi.com'>
                    <button class='btn bkoi-btn btn-circle'>Contact Us!</button>
                </a>
            </div>
        </div>
    )
}

export default VerifyHeader
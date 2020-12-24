import React from 'react'

const VerifyHeader = () => {
    return (
        <div className='api-page api-header wrapper'>
            <div className='header-image api-header-image'>
                <img src={require('../../../assets/bkoi-verify-header.webp')} alt='barikoi-verify-home' />
            </div>
            <div className='right-flex'>
                <h1>Detailed and <br /> End to End <br /> Verification Process</h1>
                <p className='p-light-small'>
                    With detailed report generation system integration process, we managed to leverage the old verification method from days into minutes.
                </p>
            </div>
        </div>
    )
}

export default VerifyHeader
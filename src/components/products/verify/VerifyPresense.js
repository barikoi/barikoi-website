import React from 'react'

const VerifyPresense = () => {
    return (
        <div className='api-page api-header wrapper'>
            <div className='header-image api-header-image'>
                <img src={require('../../../assets/bkoi-verify-header.webp')} alt='barikoi-verify-home' />
            </div>
            <div className='right-flex'>
                <h1>Why Verify’s presence matter​</h1>
                <p className='p-light-small'>
                    Our next generation’s API intended services are designed for background checks where all kinds of physical validations are required. Verify utilizes data and geographical segmentation for a faster, cheaper, accurate, and transparent solution to eradicate the issue of address validation.
                </p>
            </div>
        </div>
    )
}

export default VerifyPresense
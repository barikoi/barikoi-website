import React from 'react'

const VerifyOperation = () => {
    return (
        <div className='api-page api-header wrapper'>
            <div className='left-flex'>
                <h1>Verify’s Mode of Operation​</h1>
                <p className='p-light-small'>
                    At first, the clients receive the address, then by using Barikoi Address Validation API they submit the verification request to our platform through API/System. Instantly, the verifiers get notified in real-time and within 2 hours they physically validate the address. Finally, the report is sent back to our panel, the information gets processed and delivered to our clients.
                </p>
            </div>

            <div className='header-image api-header-image'>
                <img src={require('../../../assets/bkoi-verify-header.webp')} alt='' />
            </div>
        </div>
    )
}

export default VerifyOperation
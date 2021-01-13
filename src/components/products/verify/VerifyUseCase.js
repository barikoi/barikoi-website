import React from 'react'

const VerifyUseCase = () => {
    return (
        <div className='verify api-content wrapper'>
            <div className='heading'>
                <h1>Use Case</h1>
                {/* <p className='p-light-small'>
                    Improve user experience and drive engagement for your product
                </p> */}
            </div>

            <div className='bkoi-verify-page'>
                <div className='card-v'>
                    <div className='card-image'>
                        <img src={require('../../../assets/verify_bkoi-cpv.webp')} alt='' />
                    </div>
                    <div className='card-info'>
                        <h2>Address Verification (KYC)</h2>
                    </div>
                </div>

                <div className='card-v'>
                    <div className='card-image'>
                        <img src={require('../../../assets/verify_bkoi_inspec.webp')} alt='' />
                    </div>
                    <div className='card-info'>
                        <h2>Inspection of Services</h2>
                    </div>
                </div>

                <div className='card-v'>
                    <div className='card-image'>
                        <img src={require('../../../assets/verify_monitoring.webp')} alt='' />
                    </div>
                    <div className='card-info'>
                        <h2>Monitoring of Assets</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyUseCase
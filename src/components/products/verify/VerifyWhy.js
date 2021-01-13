import React from 'react'

const VerifyWhy = () => {
    return (
        <div className='verify api-content wrapper'>
            <div className='heading'>
                <h1>Why Barikoi Verify</h1>
                {/* <p className='p-light-small'>
                    Improve user experience and drive engagement for your product
                </p> */}
            </div>

            <div className='bkoi-verify-page'>
                <div className='card-v'>
                    <div className='card-info-why'>
                        <h2>Transparent</h2>
                    </div>
                    <div className='card-image-why'>
                        <img src={require('../../../assets/why-insurance.webp')} alt='' />
                    </div>
                </div>

                <div className='card-v'>
                    <div className='card-info-why'>
                        <h2>Faster</h2>
                    </div>
                    <div className='card-image-why'>
                        <img src={require('../../../assets/why-faster_bkoi.webp')} alt='' />
                    </div>
                </div>

                <div className='card-v'>
                    <div className='card-info-why'>
                        <h2>Cost Efficient</h2>
                    </div>
                    <div className='card-image-why'>
                        <img src={require('../../../assets/why-cost_effi.webp')} alt='' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VerifyWhy
import React from 'react'

const VerifyBenefits = () => {
    return (
        <div className='verify api-content wrapper'>
            <div className='verify-benefits-top'>
                <div className='heading'>
                    <h1>Benefits</h1>
                    {/* <p className='p-light-small'>
                        Improve user experience and drive engagement for your product
                    </p> */}
                </div>

                <div className='bkoi-verify-page'>
                    <div className='verify-benefits'>
                        <img src={require('../../../assets/verify_benefits.webp')} alt='' />
                    </div>
                </div>
            </div>
            <div className='btn-center margin-btm'>
                <a href="mailto:hello@barikoi.com?Subject=Barikoi%20Verify%20Query" target="_top">
                    <button class='btn bkoi-btn btn-circle blue-btn'>
                        Request a Demo
                    </button>
                </a>
            </div>

        </div>
    )
}

export default VerifyBenefits
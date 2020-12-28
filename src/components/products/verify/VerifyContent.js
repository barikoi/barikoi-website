import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const VerifyContent = () => {
    const [dropdownId, setDropdownId] = useState(null)

    const handleDropdown = e => {
        e.currentTarget.lastChild.classList.toggle('flip-v')

        if (dropdownId !== e.currentTarget.id) {
            setDropdownId(e.currentTarget.id)
        } else {
            setDropdownId('')
        }
    }

    return (
        <div className='api-content wrapper'>
            <div className='heading'>
                <h1>With Barikoi Verify</h1>
                <p className='p-light-small'>
                    Back-end Domain Works To Guarantee Maximum Benefit For Our Clients​.
                </p>
            </div>
            <div className='api-page'>
                    <div className=''>
                        <div className='left-flex-verify'>
                            <h3>
                            <ul className='verify-list'>
                                <li>Merchant Verification​</li>
                                <li>Asset Verification & Monitoring​</li>
                                <li>Mortgage Verification​</li>
                            </ul>
                            </h3>
                        </div>
                </div>
                <div className='dropdown-info'>
                    <div className='dropdown-card'>
                        <div className='dropdown-title'
                            id='1' onClick={handleDropdown}
                        >
                            <legend>25% Cost Saved</legend>
                            <FontAwesomeIcon
                                icon='angle-down'
                                size='lg'
                                className='transition-rotate'
                            />
                        </div>
                        <div className={`${dropdownId === '1' ? 'open-dropdown' : 'hide-dropdown'
                            }`}
                        >
                            <p className='p-light-smaller'>
                                The automated process will allow the base cost round-up within 100 to 450 BDT along with no repeat visits it maximizes saving money.
                            </p>
                        </div>
                    </div>

                    <div className='dropdown-card'>
                        <div className='dropdown-title'
                            id='2' onClick={handleDropdown}
                        >
                            <legend>40% More Efficient</legend>
                            <FontAwesomeIcon
                                icon='angle-down'
                                size='lg'
                                className='transition-rotate'
                            />
                        </div>
                        <div className={`${dropdownId === '2' ? 'open-dropdown' : 'hide-dropdown'
                            }`}
                        >
                            <p className='p-light-smaller'>


                                Verifiers will be deployed by dividing Dhaka into four parts to ensure each verification request is accessible within two hours of the request.

                                Image uploading in the platform confirms transparency and accountability.
                            </p>
                        </div>
                    </div>

                    <div className='dropdown-card'>
                        <div className='dropdown-title'
                            id='3' onClick={handleDropdown}
                        >
                            <legend>24x Faster</legend>
                            <FontAwesomeIcon
                                icon='angle-down'
                                size='lg'
                                className='transition-rotate'
                            />
                        </div>
                        <div className={`${dropdownId === '3' ? 'open-dropdown' : 'hide-dropdown'
                            }`}
                        >
                            <p className='p-light-small'>
                            <ul className='verify-list'>
                                <li>Uber Model will be used to assign the request to verifiers so verifiers nearest to the location will be appointed to work.</li>
                                <li>Barikoi Tech will help in faster navigation as verifiers will not have to take time searching the location saving both searching cost and time.​</li>
                                <li>On the spot address verification information is input causing a speedier retrieval and process of information in real-time.​</li>
                                <p>Whether it is human, land or assets validation, we are revolutionizing the contact verification process at your fingertips.​</p>
                            </ul>
                            </p>

                        </div>
                    </div>

                    <div className='api-btn'>
                        <a href='https://developer.barikoi.com'>
                            <button className='btn bkoi-btn btn-circle'>
                                Get Started!
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VerifyContent
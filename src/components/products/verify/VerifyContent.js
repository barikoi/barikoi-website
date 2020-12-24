import React, { useState } from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const VerifyContent = () => {
    // const [dropdownId, setDropdownId] = useState(null)

    // const handleDropdown = e => {
    //     e.currentTarget.lastChild.classList.toggle('flip-v')

    //     if (dropdownId !== e.currentTarget.id) {
    //         setDropdownId(e.currentTarget.id)
    //     } else {
    //         setDropdownId('')
    //     }
    // }

    return (
        <div className='api-content wrapper'>
            <div className='heading'>
                <h1>With Barikoi Verify</h1>
                <p className='p-light-small'>
                    We are revolutionizing the contact verification process to your fingertips.
                </p>
            </div>
            <div className='api-page'>
                <div className='content-image'>
                    <img src={require('../../../assets/bkoi-verify-content.webp')} alt='barikoi verify content' />
                </div>
                <div className='dropdown-info'>
                    <div className='dropdown-card'>
                        <div className='dropdown-title'
                            // id='1' onClick={handleDropdown}
                        >
                            <legend>Human Verification</legend>
                            {/* <FontAwesomeIcon
                                icon='angle-down'
                                size='lg'
                                className='transition-rotate'
                            /> */}
                        </div>
                        {/* <div className={`${dropdownId === '1' ? 'open-dropdown' : 'hide-dropdown'
                            }`}
                        >
                            <p className='p-light-smaller'>
                                Make your website or apps search experience better with the best
                                location data with the best search algorithm which can be both
                                configured to be location relevant and location agnostic.
                            </p>
                        </div> */}
                    </div>

                    <div className='dropdown-card'>
                        <div className='dropdown-title'
                            // id='2' onClick={handleDropdown}
                        >
                            <legend>Land Verification</legend>
                            {/* <FontAwesomeIcon
                                icon='angle-down'
                                size='lg'
                                className='transition-rotate'
                            /> */}
                        </div>
                        {/* <div className={`${dropdownId === '2' ? 'open-dropdown' : 'hide-dropdown'
                            }`}
                        >
                            <p className='p-light-smaller'>
                                Make your website or apps search experience better with the best
                                location data with the best search algorithm which can be both
                                configured to be location relevant and location agnostic.
                            </p>
                        </div> */}
                    </div>

                    <div className='dropdown-card'>
                        <div className='dropdown-title'
                            // id='3' onClick={handleDropdown}
                        >
                            <legend>Asset Verification</legend>
                            {/* <FontAwesomeIcon
                                icon='angle-down'
                                size='lg'
                                className='transition-rotate'
                            /> */}
                        </div>
                        {/* <div className={`${dropdownId === '3' ? 'open-dropdown' : 'hide-dropdown'
                            }`}
                        >
                            <p className='p-light-smaller'>
                                Make your website or apps search experience better with the best
                                location data with the best search algorithm which can be both configured to be location relevant and location agnostic.
                            </p>
                        </div> */}
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
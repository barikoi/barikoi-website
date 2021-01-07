import React from 'react'

const VerifyHow = () => {
    return (
        <div className='verify-how api-content wrapper'>
            <div className='heading'>
                <h1>How Barikoi Verify works</h1>
                <p className='p-light-small'>
                Back-end Domain Works To Guarantee Maximum Benefit For Our Clients​
                </p>
            </div>

            <div className='bkoi-verify-how-page'>
                <div className='card-v'>
                    <div className='card-image'>
                        <img src={require('../../../assets/how-database_people.webp')} alt='' />
                    </div>
                    <div className='card-info'>
                        <p>Client’s  Address to
Barikoi API Validation</p>
                    </div>
                </div>

                <div className='card-v'>
                    <div className='card-image'>
                        <img src={require('../../../assets/how-people_notification.webp')} alt='' />
                    </div>
                    <div className='card-info'>
                        <p>Verifier’s get notified</p>
                    </div>
                </div>

                <div className='card-v'>
                    <div className='card-image'>
                        <img src={require('../../../assets/how-bkoi_real_time_clock.webp')} alt='' />
                    </div>
                    <div className='card-info'>
                        <p>Real-time Validation</p>
                    </div>
                </div>

                <div className='card-v'>
                    <div className='card-image'>
                        <img src={require('../../../assets/how-validation_done.webp')} alt='' />
                    </div>
                    <div className='card-info'>
                        <p>Report to Verify Server and Delivery </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyHow
import React, { Fragment } from 'react'

//import components
import VerifyHeader from '../verify/VerifyHeader'
import VerifyContent from '../verify/VerifyContent'
import Navbar from '../../layout/Navbar'

const VerifyPage = () => {
    return (
        <Fragment>
            <Navbar />
            <div className='container'>
                <VerifyHeader />
                <VerifyContent />
            </div>
        </Fragment>
    )
}

export default VerifyPage
import React, { Fragment } from 'react'

//import components
import VerifyHeader from '../verify/VerifyHeader'
import VerifyContent from '../verify/VerifyContent'
import Navbar from '../../layout/Navbar'
import VerifyPresense from '../verify/VerifyPresense'
import VerifyOperation from '../verify/VerifyOperation'

const VerifyPage = () => {
    return (
        <Fragment>
            <Navbar />
            <VerifyHeader />
            <div className='container'>
                <VerifyPresense />
                <VerifyOperation />
                <VerifyContent />
            </div>
        </Fragment>
    )
}

export default VerifyPage
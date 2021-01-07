import React, { Fragment } from 'react'

//import components
import VerifyHeader from '../verify/VerifyHeader'
import Navbar from '../../layout/Navbar'
import VerifyUseCase from '../verify/VerifyUseCase'
import VerifyHow from './VerifyHow'

const VerifyPage = () => {
    return (
        <Fragment>
            <Navbar />
            <div className='container'>
                <VerifyHeader />
                <VerifyUseCase />
                <VerifyHow />
            </div>
        </Fragment>
    )
}

export default VerifyPage
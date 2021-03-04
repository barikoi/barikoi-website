import React, { Fragment } from 'react'

//import components
import VerifyHeader from '../verify/VerifyHeader'
import Navbar from '../../layout/Navbar'
import VerifyUseCase from '../verify/VerifyUseCase'
import VerifyHow from './VerifyHow'
import VerifyWhy from './VerifyWhy'
import VerifyBenefits from './VerifyBenefits'
import Footer from '../../footer/Footer'

const VerifyPage = () => {
    return (
        <Fragment>
            <Navbar />
            <div className='container'>
                <VerifyHeader />
                <VerifyUseCase />
                <VerifyHow />
                <VerifyWhy />
                <VerifyBenefits />
            </div>
            <Footer />
        </Fragment>
    )
}

export default VerifyPage
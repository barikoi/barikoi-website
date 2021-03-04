import React from 'react'
import Footer from '../../footer/Footer'

//import components
import Navbar from '../../layout/Navbar'
import TraceHeader from '../trace/TraceHeader'
import TracePriceTier from './TracePriceTier'

const TracePage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container' >
                <TraceHeader />
                <TracePriceTier />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default TracePage
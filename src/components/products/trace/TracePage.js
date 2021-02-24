import React from 'react'

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
        </React.Fragment>
    )
}

export default TracePage
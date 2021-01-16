import React from 'react'

//import components
import Navbar from '../../layout/Navbar'
import TraceHeader from '../trace/TraceHeader'

const TracePage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container' >
                <TraceHeader />
            </div>
        </React.Fragment>
    )
}

export default TracePage
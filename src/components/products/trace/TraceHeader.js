import React, { useState } from 'react'
import TraceModal from '../trace/TraceModal'

const TraceHeader = () => {
    // const [tracePopup, toggleTracePopup] = useState(false)

    // const handleClick = (e) => {
    //     window.scrollTo(0, 0);
    //     toggleTracePopup(!tracePopup);
    // };
    return (
        <div className='api-page api-header wrapper'>
            <div className='header-image-verify api-header-image'>
                <img src={require('../../../assets/trace-header.webp')} alt='' />
            </div>
            <div className='right-flex'>
                <h2>
                    Trace
                </h2>
                <h1 className='primary-text' style={{ color: 'black' }}>
                    Bangladesh's
                    <br />
                    First Real-time
                    <br />
                    Tracking Platform
                    <br />
                    Track Anything
                </h1>
                <a href='https://developer.barikoi.com/'>
                    <button class='btn bkoi-btn btn-circle'>Get Started!</button>
                </a>
            </div>
            {/* { tracePopup && (
                <TraceModal
                    tracePopup={tracePopup}
                    toggleTracePopup={toggleTracePopup}
                />
            )} */}
        </div>
    )
}

export default TraceHeader
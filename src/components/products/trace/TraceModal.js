import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TraceModal = ({
    tracePopup,
    toggleTracePopup
}) => {
    return (
        <React.Fragment>
            <div className='modal'>
                <div className='popup card-1'>
                    <div className='popup-header'>
                        <h3>Thank you for your interest.</h3>
                        <FontAwesomeIcon
                            icon='times'
                            size='lg'
                            className='pointer'
                            onClick={ () => toggleTracePopup(!tracePopup) }
                        />
                    </div>
                    <p>Trace is an invite-only platform for now. Please connect to hello@barikoi.com or call 01708549077 for a demo.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TraceModal 
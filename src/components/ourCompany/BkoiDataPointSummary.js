import React from 'react';

const BkoiDataPointSummary = () => {
    return (
        <div className='api-content-80vh wrapper'>
            <div className='heading'>
                <h1>Barikoi Data Point Summary​</h1>
            </div>
            <div className="section group margin-top-3rem">
                <div className="col span_1_of_3">
                    <h1>600K+</h1>
                    <p style={{fontSize: '24px', fontWeight: '500'}}>Point of Interest</p>
                </div>
                <div className="col span_1_of_3">
                    <h1>269K+</h1>
                    <p style={{fontSize: '24px',  fontWeight: '500'}}>Holdings Added</p>
	            </div>
                <div className="col span_1_of_3">
                    <h1>64</h1>
                    <p style={{fontSize: '24px',  fontWeight: '500'}}>Districts on Landmark Level</p>
	            </div>
            </div>

        </div>
    );
};

export default BkoiDataPointSummary;
import React from 'react';

const TracePriceTierList = ({
        title,
        perMonthPrice,
        totalApiCalls,
        additionalPingPrice,
        additionalHistoryPrice,
        fuelGuestimationPrice,
        monthlyReportPrice
    }) => {
    return (
        <div className='pricing-card'>
        <div className='pricing-plan-content'>
          <div className='title'>
            <h2>{ title }</h2>
            <p className='p-light-small'>
              <span>&#2547;</span>{ perMonthPrice } / mo
            </p>
          </div>

          <div className='list'>
            <p className='p-light-smaller'>{ totalApiCalls } API calls</p>
            <p className='p-light-smaller'>Monthly Billing</p>
            <p className='p-light-smaller'>
              Additional Ping API Calls <span>&#2547;</span>{additionalPingPrice}
            </p>
            <p className='p-light-smaller'>
                        Additional History per call Analytics <span>&#2547;</span>
              { additionalHistoryPrice }
            </p>
            <p className='p-light-smaller'>
                        Fuel Guestimation / API call <span>&#2547;</span>
              { fuelGuestimationPrice }
            </p>
            <p className='p-light-smaller'>
                        Monthly Report Generation / User <span>&#2547;</span>
                { monthlyReportPrice }
            </p>
            {/* <p className='p-light-smaller'>Geofencing <span>&#2547;</span>TBD</p> */}
          </div>

          <div className='pricing-plan-btn'>
            <a href='https://developer.barikoi.com/'>
              <button className='btn plan-btn'>Get Started</button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default TracePriceTierList;
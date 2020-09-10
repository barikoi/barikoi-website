import React, { useState } from 'react';
// import InputRange from 'react-input-range';
// import 'react-input-range/lib/css/index.css';
import Slider from './slider/Slider';
//import 'react-rangeslider/lib/index.css';

const PricingCalculator = () => {
  const [value, setValue] = useState(30000);
  const minRequests = 30000;
  const maxRequests = 800000;

  const handleChangeStart = () => {
    console.log('Change event started');
  };

  const handleChange = (value) => {
    setValue(value);
  };

  const handleChangeComplete = () => {
    console.log('Change event completed');
  };
  return (
    <div className='wrapper api-content pricing-calc '>
      <div>
        <div className='heading'>
          <h1>Pay for what you use</h1>
          <p className='p-light-small'>Barikoi Price Calculator</p>
        </div>

        <div className='slider-container'>
          <Slider
            min={minRequests}
            max={maxRequests}
            value={value}
            onChangeStart={handleChangeStart}
            onChange={handleChange}
            onChangeComplete={handleChangeComplete}
          />
          {/* <div className='value'>{`${value} requests`}</div> */}
        </div>

        <div className='pricing-value'>
          <p className='p-light-medium'>
            Pay as you go <strong>{Math.round(value * 0.15)} tk</strong>
          </p>

          <div className='pricing-btn'>
            <a href='#'>
              <button class='btn bkoi-btn btn-circle'>Contact Sales</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;

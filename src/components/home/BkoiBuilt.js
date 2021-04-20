import React from 'react';

const BkoiBuilt = () => {
  return (
    <div className='bkoi-page container wrapper'>
      <div className='left-content'>
        <h1 className=''>Users who trusted our platform.</h1>

        <h3>
          Built with <br /> Barikoi{' '}
        </h3>

        <div className='built-btn'>
          <a href='https://developer.barikoi.com/'>
            <button className='btn bkoi-btn btn-circle'>Start Building!</button>
          </a>
        </div>
      </div>

      <div className='right-content company-logos'>
        <div className='logo-block logo-block-1'>
          <div className='company-logo'>
            <img
              src={require('../../assets/company-logos/sheba.webp')}
              alt='sheba'
            />
          </div>
          <div className='company-logo maya'>
            <img
              style={{ width: '65%' }}
              src={require('../../assets/company-logos/maya.webp')}
              alt='chaldal'
            />
          </div>
          <div className='company-logo'>
            <img src={require('../../assets/company-logos/ajkerdeal.webp')} alt='ajkerdeal' />
          </div>
        </div>

        <div className='logo-block logo-block-2'>
          <div className='company-logo'>
            <img
              src={require('../../assets/company-logos/styline.webp')}
              alt='styline'
            />
          </div>
          <div className='company-logo'>
            <img src={require('../../assets/company-logos/hungrynaki.webp')} alt='hungrynaki'/>
          </div>

          <div className='company-logo'>
            <img src={require('../../assets/company-logos/lk.webp')} alt='lk' />
          </div>
        </div>

        {/* <div className='logo-block logo-block-for-2'>
          <div className='company-logo'>
            <img src={require('../../assets/company-logos/easytrax.webp')} alt='easytrax' />
          </div>
          <div className='company-logo'>
            <img src={require('../../assets/company-logos/walletmix.webp')} alt='walletmix' />
          </div>          
        </div> */}

        <div className='logo-block logo-block-1'>
          <div className='company-logo'>
            <img src={require('../../assets/company-logos/easytrax.webp')} alt='easytrax' />
          </div>
          <div className='company-logo'>
            <img src={require('../../assets/company-logos/kludio.webp')} alt='kludio' />
          </div> 
          <div className='company-logo'>
            <img src={require('../../assets/company-logos/walletmix.webp')} alt='walletmix' />
          </div> 
        </div>

      </div>
    </div>
  );
};

export default BkoiBuilt;

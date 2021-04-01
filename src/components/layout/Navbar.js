import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter, useLocation, Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBarProduct from './NavBarProduct'

const Navbar = () => {
  const node = useRef();
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const [dropdownId, setDropdownId] = useState(null);
  const [defaultNav, setDefaultNav] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState('')

  //this is to change the nav color
  useEffect(() => {
    const currentPath = location;

    if (currentPath.pathname && currentPath.pathname !== '/') {
      setDefaultNav(false);
    } else {
      setDefaultNav(true);
    }

    //console.log(currentPath.pathname, currentPath);
    //console.log('hello default', location.pathname, defaultNav);
  }, [location, defaultNav]);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    // console.log('id: ', e.target.getAttribute('id'))
    e.currentTarget.lastChild.classList.toggle('flip-v');
    if (dropdownId !== e.currentTarget.id) {
      setDropdownId(e.currentTarget.id);
    } else {
      setDropdownId('');
    }
  };
  const mouseEnter = (e) => {
    setIsHovered(true)
    setHoverIndex(e.target.id)
  }
  const mouseLeave = () => {
    setIsHovered(false)
    setDropdownId('');
  }

  return (
    <header className={`container ${defaultNav ? '' : 'static-nav'}`}>
      <div
        className={`nav-overlay ${isOpen ? ' nav-overlay-active ' : ' '}`}
      ></div>
      <div className='brand-logo'>
        <Link to='/'>
          <span className='primary-text'>Bari</span>
          <span className='nav-text'>koi</span>
        </Link>
      </div>

      <nav>
        <div className='mobile-menu'>
          <FontAwesomeIcon
            icon='bars'
            size='lg'
            className='ham hide-desktop'
            onClick={toggleNav}
            color={`${defaultNav ? 'white' : '#38404e'}`}
          />
        </div>

        <ul
          className={`show-desktop hide-mobile ${isOpen ? ' toggle-nav ' : ' '
            }`}
        >
          <li
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <div className='nav-list' id='1' onClick={toggleDropdown}>
              <Link id='1'>Products</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div>

            <div
              className={`dropdown-nav ${dropdownId === '1' || hoverIndex === '1' ? 'open-dropdown ' : 'hide-dropdown'
                }`}
            >
              {
                isHovered &&
                <li className='dropdown-list'>
                  <div className='nav-product hide-mobile show-desktop'>
                    <div className='display-col'>

                    <NavBarProduct       
                        link='/api'
                        id='1'
                        title='API'
                        details='Localized Location API for developers'
                        imgSrc={require('../../assets/products-icons/api.png')}
                      />
                      <NavBarProduct
                        link='/rupantor'
                        id='2'
                        title='Rupantor'
                        details='AI enabled geocoder for location search'
                        imgSrc={require('../../assets/products-icons/rupantor.png')}
                      />
                      <NavBarProduct
                        link='https://map.barikoi.xyz/'
                        title='Barikoi Drishty'
                        details='360 imagery for service '
                        imgSrc={require('../../assets/products-icons/barikoi-360.png')}
                      />

                      <NavBarProduct
                        link='/urban-engine'
                        title='Urban Engine'
                        details='Operations System for cities'
                        imgSrc={require('../../assets/products-icons/urban_city.png')}
                      />
                      <NavBarProduct
                        link='/verify'
                        title='Verify'
                        details='Tech enable verification service'
                        imgSrc={require('../../assets/products-icons/verify.png')} />
                      <NavBarProduct
                        link='/trace'
                        title='Trace'
                        details='Real time tracking platform'
                        imgSrc={require('../../assets/products-icons/trace.png')}
                      />
                      

                      {/* <div className='display-row'>
                        <NavBarProduct link='/verify' title='Verify' details='Tech enable verification service' imgSrc={require('../../assets/products-icons/verify.png')} />
                        <NavBarProduct link='/trace' title='Trace' details='Real time tracking platform' imgSrc={require('../../assets/products-icons/trace.png')} />
                      </div> */}

                    </div>
                  </div>
                  {/* <li className='hide-desktop dropdown-list'> */}
                    <Link to='/api' className='hide-desktop'>API</Link>
                    <Link to='/rupantor' className='hide-desktop'>Rupantor</Link>
                    <a href='https://map.barikoi.xyz/' className='hide-desktop'>Barikoi 360</a>
                    <Link to='/urban-engine' className='hide-desktop'>Urban Engine</Link>
                    <Link to='/verify' className='hide-desktop'>Verify</Link>
                    <Link to='/trace' className='hide-desktop'>Trace</Link>
                  {/* </li> */}
                </li>
              }
            </div>
          </li>

          {/* <li 
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}            
          > */}
          {/* <div className='nav-list' id='1' onClick={toggleDropdown}>
              <Link id='1'>Products</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div> */}
          {/* {
              isHovered &&
                <div
                  className={` dropdown-nav ${dropdownId === '1' || hoverIndex === '1' ? 'open-dropdown ' : 'hide-dropdown'
                  }`}
                > */}
          {/* <li className='dropdown-list'>
                    <a href='https://docs.barikoi.com/docs/intro/'>Documentation</a>
                    <a href='https://medium.com/@barikoibd'>Tutorial</a>
                  </li> */}

          {/* <li className='dropdown-list'>
                    <Link to='/api'>API</Link>
                    <Link to='/rupantor'>Rupantor</Link>
                    <a href='https://map.barikoi.xyz/'>Barikoi 360</a>
                    <Link to='/urban-engine'>Urban Engine</Link>
                    <Link to='/verify'>Verify</Link>
                    <Link to='/trace'>Trace</Link>
                  </li>
                </div>
            } */}


          {/* <div className='nav-list' id='2'>
              <Link id='10'>Developer</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div>
            { isProductHovered &&
              <div
              className={`dropdown-nav  open-dropdown`}
              >
              <div className='dropdown-list'>
                <a href='https://docs.barikoi.com/docs/intro/'>Documentation</a>
                <a href='https://medium.com/@barikoibd'>Tutorial</a>
              </div>
            </div>
            } */}
          {/* </li> */}


          <li
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <div className='nav-list' id='2' onClick={toggleDropdown}>
              <Link id='2'>Developer</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div>
            {
              isHovered &&
              <div
                className={` dropdown-nav ${dropdownId === '2' || hoverIndex === '2' ? 'open-dropdown ' : 'hide-dropdown'
                  }`}
              >
                <li className='dropdown-list'>
                  <a href='https://docs.barikoi.com/docs/intro/'>Documentation</a>
                  <a href='https://medium.com/@barikoibd'>Tutorial</a>
                </li>
              </div>
            }
          </li>


          <li
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <div className='nav-list' id='3' onClick={toggleDropdown}>
              <Link id='3'>Pricing</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div>
            {
              isHovered &&
              <div
                className={` dropdown-nav ${dropdownId === '3' || hoverIndex === '3' ? 'open-dropdown ' : 'hide-dropdown'
                  }`}
              >
                <li className='dropdown-list'>
                  <Link to='/pricing'>Location API Pricing</Link>
                </li>
              </div>
            }
          </li>

          <li>
            <div className='nav-list' id='4'>
              <Link to='/search'>Search</Link>
            </div>
          </li>

          {/* About us */}
          <li
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <div className='nav-list' id='5' onClick={toggleDropdown}>
              <Link id='5'>About Us</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div>
            {
              isHovered &&
              <div
                className={` dropdown-nav ${dropdownId === '5' || hoverIndex === '5' ? 'open-dropdown ' : 'hide-dropdown'
                  }`}
              >
                <li className='dropdown-list'>
                  <Link to='/ourteam'>Our Team</Link>
                  {/* <div onClick={() => { window.location.href = '/ourteam' }}>Our team</div> */}
                  <Link to='/ourcompany'>Our Company</Link>
                </li>
              </div>
            }
          </li>

          <li
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <div className='nav-list' id='6' onClick={toggleDropdown}>
              <Link id='6'>Account</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div>
            {
              isHovered &&
              <div
                className={` dropdown-nav ${dropdownId === '6' || hoverIndex === '6' ? 'open-dropdown ' : 'hide-dropdown'
                  }`}
              >
                <li className='dropdown-list'>
                  <a href='https://developer.barikoi.com/'>Login</a>
                </li>

                <li className='dropdown-list'>
                  <a href='https://developer.barikoi.com/register'>Signup</a>
                </li>
              </div>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
};

const check = {
  border: '1px solide red',
}

export default withRouter(Navbar);

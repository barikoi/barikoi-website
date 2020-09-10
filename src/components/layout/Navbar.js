import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Dropdown from './Dropdown';

const Navbar = () => {
  const node = useRef();
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const [dropdownId, setDropdownId] = useState(null);
  const [defaultNav, setDefaultNav] = useState(true);

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

  // useEffect(() => {
  //   // add when mounted
  //   document.addEventListener('mousedown', handleClick);
  //   // return function to be called when unmounted
  //   return () => {
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, []);

  const toggleNav = () => {
    setOpen(!isOpen);
    console.log('hello nav toggle');
  };

  const toggleDropdown = (e) => {
    console.log(
      'from toggle dropdown in navbar',
      e.currentTarget,
      e.target,
      e.currentTarget.lastChild
    );
    e.currentTarget.lastChild.classList.toggle('flip-v');
    if (dropdownId !== e.currentTarget.id) {
      setDropdownId(e.currentTarget.id);
    } else {
      setDropdownId('');
    }
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setDropdownId('');
  };

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
          className={`show-desktop hide-mobile ${
            isOpen ? ' toggle-nav ' : ' '
          }`}
        >
          <li>
            <div className='nav-list' id='1' onClick={toggleDropdown}>
              <Link>Products</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div>

            <div
              className={` dropdown-nav ${
                dropdownId === '1' ? 'open-dropdown ' : 'hide-dropdown'
              }`}
              ref={node}
            >
              <li className='dropdown-list'>
                <Link to='/api'>API</Link>
                <Link to='/rupantor'>Rupantor</Link>
                <a href='https://map.barikoi.xyz/'>Barikoi 360</a>
                <Link to='/urban-engine'>Urban Engine</Link>
              </li>
            </div>
            {/* <Dropdown
              dropdownId={dropdownId}
              setDropdownId={setDropdownId}
              options={[{url:'api', name:'API'},{url:'rupantor', name:'Rupantor'},{url:'', name:'Barikoi 360'},{url:'urban-engine', name:'Urban Engine'}, ]}
            /> */}
          </li>

          <li>
            <div className='nav-list' id='2' onClick={toggleDropdown}>
              <Link>Developer</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div>
            <div
              className={` dropdown-nav ${
                dropdownId === '2' ? 'open-dropdown ' : 'hide-dropdown'
              }`}
            >
              <li className='dropdown-list'>
                <a href='https://docs.barikoi.com/docs/intro/'>Documentation</a>
                <a href='https://medium.com/@barikoibd'>Tutorial</a>
              </li>
            </div>
          </li>

          <li>
            <div className='nav-list' id='3' onClick={toggleDropdown}>
              <Link>Pricing</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div>
            <div
              className={` dropdown-nav ${
                dropdownId === '3' ? 'open-dropdown ' : 'hide-dropdown'
              }`}
            >
              <li className='dropdown-list'>
                <Link to='/pricing'>Location API Pricing</Link>
              </li>
            </div>
          </li>

          <li>
            <div className='nav-list' id='4'>
              <Link to='/search'>Search</Link>
            </div>
          </li>

          <li>
            <div className='nav-list' id='5' onClick={toggleDropdown}>
              <Link>Account</Link>
              <FontAwesomeIcon
                icon='chevron-circle-down'
                size='lg'
                color='black'
                className='transition-rotate nav-icon hide-desktop'
              />
            </div>
            <div
              className={` dropdown-nav ${
                dropdownId === '5' ? 'open-dropdown ' : 'hide-dropdown'
              }`}
            >
              <li className='dropdown-list'>
                <a href='https://dev.barikoi.com'>Login</a>
              </li>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navbar);

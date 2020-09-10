import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ id, options, dropdownId, setDropdownId }) => {
  const node = useRef();
  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setDropdownId('');
  };

  return (
    <div
      ref={node}
      className={` dropdown-nav ${
        dropdownId == 1 ? 'open-dropdown ' : 'hide-dropdown'
      }`}
    >

       {Object.entries(options.map(opt =>(
        <li className='dropdown-list'>
         <Link to= {`/${opt.url}`}>{opt.name}</Link>
        </li>
      )))}
  

 

   

     
    </div>


  );
};

export default Dropdown;

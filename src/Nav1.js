import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav1() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6 mb-10'>
      {/* logo  */}
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        {/* <svg
          className='fill-current h-8 w-8 mr-2'
          width='54'
          height='54'
          viewBox='0 0 54 54'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13.5 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9  0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 6.75-.45 9.45-4.05-1.8 4.05zM0 38.3c1.8-7.2 7.9-2-3.3-5.3 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 9-8-3-4.4-2.7-7.4 6.75-.45 9.45-4.05-1.8 7.2-6.3 7.2-6.3 10.8-13.5 10.8-10.8 4.05z' />
        </svg> */}
        <span className='font-semibold text-xl tracking-tight'>TeamMember</span>
      </div>
      {/* menu button */}
      <div className='block lg:hidden'>
        <button
          onClick={(e) => setIsOpen(!isOpen)}
          className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      {/* nav */}

      <div
        className={`w-full  ${
          isOpen ? 'block' : 'hidden '
        } flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className='text-sm lg:flex-grow'>
          <NavLink
            to='/'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Home
          </NavLink>
          <NavLink
            to='team'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Teams
          </NavLink>
          <NavLink
            to='add_member'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Add Member
          </NavLink>
          <NavLink
            to='sidenote'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            MyNote
          </NavLink>
        </div>
        <div>
          <NavLink
            to='login'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav1;

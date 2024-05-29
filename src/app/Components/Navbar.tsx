'use client'
import React, { useState } from 'react';
import Navlinks from './Navlinks';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Link from 'next/link';

function Navbar() {
  const links = [
    {
      title: 'About',
      target: 'About',
      offset: -100,
    },
    {
      title: 'Projects',
      target: 'projects',
      offset: 80,
    },
    {
      title: 'Contact',
      target: 'contact',
      offset: -80,
    },
  ];

  const [Navbaropen, setNavbaropen] = useState(false);

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-6'>
        <Link href="/" className='text-lg md:text-5xl text-white font-semibold'>Saad</Link>
        <div className='mobile-menu block md:hidden'>
          {!Navbaropen ? (
            <button onClick={() => setNavbaropen(true)} className='flex items-center px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button onClick={() => setNavbaropen(false)} className='flex items-center px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {links.map((link, id) => (
              <li key={id}>
                <Navlinks href={link.target} title={link.title} offset={link.offset} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {Navbaropen ? <MenuOverlay links={links} /> : null}
    </nav>
  );
}

export default Navbar;


import React from 'react';
import Navlinks from './Navlinks';

function MenuOverlay({ links }) {
  return (
    <div className=''>
      <ul className='flex flex-col space-y-6'>
        {links.map((link, id) => (
          <li key={id}>
            <Navlinks href={link.target} title={link.title} offset={link.offset} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuOverlay;

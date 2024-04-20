import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
export const Header = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'skills',
    },
    {
      id: 4,
      link: 'project',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-[#0d179b] fixed'>
      <div>
        <h1 className='text-3xl ml-2'>D</h1>
      </div>
      <ul className='hidden md:flex text-xl'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer font-medium text-white hover:scale-105 duration-200'
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0d179b] to-blue-500 text-gray-300'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer font-medium text-white hover:scale-105 duration-210'
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// mx-auto max-w-7xl px-2 sm:px-6 lg:px-8

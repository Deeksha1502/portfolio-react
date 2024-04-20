import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/image2.jpg';

export const Body = () => {
  return (
    <div
      name='home'
      className='text-white w-full bg-gradient-to-b from-[#0d179b] to-[#424cf9] h-screen'
    >
      <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className=' flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold'> Hi, I'm Deeksha Deepak</h2>
          <h3 className='py-4 max-w-md text-xl font-semibold'>
            <TypeAnimation
              sequence={[
                'A Developer', // Types 'One'
                1000, // Waits 1s
                'A Coder', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'A Tech Enthusiast', // Types 'Three' without deleting 'Two'
                2000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h3>

          <div>
            <button className='w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 cursor-pointer'>
              <svg
                class='fill-current w-4 h-4 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
              </svg>

              <span>Download CV</span>
            </button>
          </div>
        </div>

        <div className='flex items-end flex-row -ml-28 top-0'>
          <img
            src={profile}
            alt='profile'
            className='rounded-2xl mx-auto md:w-full w-80 h-80'
          ></img>
        </div>
      </div>
    </div>
  );
};

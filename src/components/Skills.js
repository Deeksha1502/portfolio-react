import { Skill } from './skill';

export const Skills = () => {
  return (
    <div className='h-screen w-full text-white bg-gradient-to-b from-[#545df9] to-[#4648f3]'>
      <h3 className='text-5xl font-bold text-center pb-10'>Skills</h3>
      <div className='mx-36'>
        <h2 className='text-2xl mb-10'>I have experience with the following technologies</h2>

        <div className='w-auto justify-between h-16 flex mx-28'>
          <Skill
            source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
            alt='The logo icon for react'
            title='React'
            className='border-4'
          />
          <Skill
            source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
            alt='The logo icon for HTML 5'
            title='HTML 5'
          />
          <Skill
            source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
            alt='The logo icon for CSS3'
            title='CSS 3'
          />
          <Skill
            source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'
            alt='The logo icon for TailwindCSS'
            title='Twilwind CSS'
          />
          <Skill
            source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'
            alt='The logo icon for GitHub'
            title='GitHub'
          />
          <Skill
            source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
            alt='The logo icon for NPM'
            title='NPM'
          />
          <Skill
            source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
            alt='The logo icon for NodeJS'
            title='Node JS'
          />
        </div>
      </div>
    </div>
  );
};

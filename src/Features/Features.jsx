import React from 'react';
import SocialIcon from '../Component/SocialIcon';

const Features = () => {
  return (
    <>
      <div className='bg-ice dark:bg-[#1f2235e6]'>
        <div className='mx-auto w-9/12 space-y-5 py-20 lg:w-full lg:px-10 sm:w-full sm:px-3'>
          <div className='socialIcons flex space-x-6 pt-8 text-4xl sm:text-xl'>
            <SocialIcon
              href='https://www.facebook.com/profile.php?id=100009068730323'
              name='facebook-circle'
              color='#3b5998'
            />

            <SocialIcon
              href='https://www.instagram.com/ice_imran/'
              name='instagram-alt'
              color='#d33e82'
            />

            <SocialIcon
              href='https://twitter.com/AkterRasme'
              name='twitter'
              color='#55acee'
            />

            <SocialIcon
              href='https://dribbble.com/raakstmeer'
              name='dribbble'
              color='#ea4c89'
            />

            <SocialIcon
              href='https://www.fiverr.com/gmc_expert454?public_mode=true'
              name='postgresql'
              color='#ea4335'
            />
          </div>
          <div className='featuresTitle space-y-3 py-8'>
            <h1 className='text-7xl font-bold text-tprimary dark:text-white md:text-5xl sm:text-4xl'>
              I am Tushar Imran
            </h1>
            <p className='text-2xl text-[#7d7d7d] dark:text-[#dbdbdb] md:text-xl sm:text-xl'>
              I'm professional web-designer and graphics designer
            </p>
          </div>
          <div className='featuresBtn mt-4'>
            <a
              href='https://github.com/raakstmeer'
              target='_blank'
              className='w-10 rounded border-2 border-none bg-[#1da1f2] px-7 py-3 text-3xl text-white transition hover:bg-[#1a232f] hover:text-[#1da1f2] sm:text-xl'
              rel='noreferrer'
            >
              <box-icon
                name='github'
                type='logo'
                color='white'
                size='md'
              ></box-icon>{' '}
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

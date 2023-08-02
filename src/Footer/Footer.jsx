import React from 'react';
import FooterIcon from '../Component/FooterIcon';
import MainTitle from '../Component/MainTitle';

const Footer = () => {
  return (
    <>
      <div className='bg-ice dark:bg-[#1f2235e6]'>
        <div className='mx-auto w-9/12 space-y-5 pt-20 pb-7 lg:w-full lg:px-10 sm:w-full sm:px-3'>
          <MainTitle
            title='ICE ImraN'
            subTitle='Yeah ! All time I am ready for yours Order.So you can also contact me here'
            custom={{ color: '#4d004d' }}
          />

          <div className='footerWrap border-b border-[gray]'>
            <div className='footerIcon space-x-5 sm:space-x-3 pb-8 text-center text-5xl sm:text-4xl transition hover:scale-110'>
              <FooterIcon
                href='https://www.facebook.com/profile.php?id=100009068730323'
                name='facebook-circle'
                color='#3b5998'
              />

              <FooterIcon
                href='https://www.instagram.com/ice_imran/'
                name='instagram-alt'
                color='#d33e82'
              />

              <FooterIcon
                href='https://twitter.com/AkterRasme'
                name='twitter'
                color='#55acee'
              />

              <FooterIcon
                href='https://dribbble.com/raakstmeer'
                name='dribbble'
                color='#ea4c89'
              />

              <FooterIcon
                href='https://www.fiverr.com/gmc_expert454'
                name='postgresql'
                color='#ea4335'
              />
            </div>
          </div>
          <div className='copyright text-center text-[#c2c2c2]'>
            <p>Copyright © 2020 ICE ImraN . Designed by SNOW</p>
          </div>
        </div>
      </div>
      <div className='gototop invisible fixed right-5 bottom-5 z-50 flex h-10 w-10 items-center justify-center bg-[#515566] p-1 text-white opacity-0 transition duration-200'>
        <a href='#header' className='translate-y-1'>
          <box-icon name='arrow-to-top' color='white'></box-icon>
        </a>
      </div>
    </>
  );
};

export default Footer;

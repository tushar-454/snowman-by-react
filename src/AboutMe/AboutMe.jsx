import React from 'react';
import aboutImg from '../Assets/about_pic.png';
import ILV from '../Component/ILV';
import MainTitle from '../Component/MainTitle';

const AboutMe = () => {
  return (
    <section id='about'>
      <div className='bg-ice dark:bg-[#1f2235e6]'>
        <div className='mx-auto w-9/12 space-y-5 py-20 lg:w-full lg:px-10 sm:w-full sm:px-3'>
          <MainTitle
            title='About Me'
            subTitle='Here are all my basic details. Take a look'
            custom={{ color: '#4d004d' }}
          />
          {/* about wrapper */}
          <div className='aboutWrappper flex items-center justify-between'>
            <div className='aboutPicture pr-10 2xl:w-[960px] xl:w-96 lg:hidden sm:pl-5'>
              <img
                src={aboutImg}
                alt={aboutImg}
                className='w-full rounded-2xl border-transparent'
              />
            </div>
            <div className='aboutInfoWrap space-y-8 border-l-8 border-tprimary pl-10 dark:border-ice dark:text-ice sm:pl-5'>
              <div className='aboutMe space-y-2'>
                <h1 className='text-5xl xs:text-3xl'>Tushar Imran</h1>
                <p className='xs:text-md text-xl'>
                  Hi, My name is Tushar Imran . I am a Professional Web & UI /
                  UX Designer. <br />
                  I am working this sector last 2 Year . Still I am learning How
                  <br />
                  to make awesome creative design .
                </p>
              </div>
              <div className='aboutMeDetails grid grid-cols-2 gap-7 gap-x-20 md:grid-cols-1'>
                <ILV
                  icon={<box-icon name='calendar' type='solid'></box-icon>}
                  label='Birthday'
                  value='08 / 05 / 2003'
                />
                <ILV
                  icon={<box-icon name='location-plus' type='solid'></box-icon>}
                  label='Location'
                  value='Meghna, Comilla, Bangladesh'
                />
                <ILV
                  icon={<box-icon name='graduation' type='solid'></box-icon>}
                  label='Study '
                  value='Department of Mathematics, Dhaka College.'
                />
                <ILV
                  icon={<box-icon name='mobile-alt'></box-icon>}
                  label='Phone '
                  value='01863573951'
                />
                <ILV
                  icon={<box-icon name='id-card'></box-icon>}
                  label='Age'
                  value='21'
                />
                <ILV
                  icon={<box-icon name='netlify' type='logo'></box-icon>}
                  label='Interest '
                  value='Coding & Traveler'
                />
                <ILV
                  icon={<box-icon name='dumbbell'></box-icon>}
                  label='Work '
                  value='Student'
                />
                <div className='text-xl'>
                  <span>
                    <i className='bx bxs-envelope'></i>
                  </span>
                  <b>E-mail :</b>
                  <span className='dark:text-white'>
                    <a href='mailto:miakarim742@gmail.com'>
                      miakarim742@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

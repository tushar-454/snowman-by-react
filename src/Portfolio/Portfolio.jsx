import React from 'react';
import MainTitle from '../Component/MainTitle';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='bg-ice dark:bg-[#1f2235e6]'>
        <div className='mx-auto w-9/12 space-y-5 py-20 lg:w-full lg:px-10 sm:w-full sm:px-3'>
          <MainTitle
            title='Portfolio'
            subTitle='Here are all the templates I created. Click to live preview'
            custom={{ color: '#4d004d' }}
          />
          <div>
            <h3 className='text-4 xl text-center'>
              Add some project a few time later
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

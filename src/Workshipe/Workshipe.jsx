import React from 'react';
import videoEditing from '../Assets/workship/video-editing.jpg';
import webDesign from '../Assets/workship/web-designer.jpg';
import webProgramming from '../Assets/workship/web-programming.jpg';
import MainTitle from '../Component/MainTitle';
import SingleWorkDetails from '../Component/SingleWorkDetails';

const Workshipe = () => {
  return (
    <section id='workship'>
      <div className='forPath bg-primary dark:bg-primary-dark'>
        <div className='mx-auto w-9/12 space-y-5 py-20 lg:w-full lg:px-10 sm:w-full sm:px-3'>
          <MainTitle
            title='Workshipe'
            subTitle='Here is a description of all the services I offer. Hover for Discription'
          />
          <div className='workShipWrapper grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1'>
            {/* single workship  */}
            <SingleWorkDetails
              img={webProgramming}
              icon={
                <box-icon name='code-alt' size='md' color='white'></box-icon>
              }
              title='Web Development'
              subTitle='I am professional web-developer dreamer. I will learn this
                  service from time to time then I will be able to provide this
                  service'
            />
            {/* single workship  */}
            <SingleWorkDetails
              img={webDesign}
              icon={
                <box-icon
                  name='magic-wand'
                  type='solid'
                  size='md'
                  color='white'
                ></box-icon>
              }
              title='Web Design'
              subTitle='I am a professional web-designer. I will create may web page at the time. You can check my portfolio section'
            />
            {/* single workship  */}
            <SingleWorkDetails
              img={videoEditing}
              icon={
                <box-icon
                  name='video'
                  type='solid'
                  size='md'
                  color='white'
                ></box-icon>
              }
              title='Video Editing'
              subTitle='Video Editing is my passion. I am learning video editing with web designing. You can hire me for your video editing for cinematic, tutorial, vlog video Etc.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshipe;

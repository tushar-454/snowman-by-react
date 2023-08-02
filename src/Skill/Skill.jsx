import React from 'react';
import skillImg from '../Assets/about_pic.png';
import MainTitle from '../Component/MainTitle';
import SkillRange from '../Component/SkillRange';

const Skill = () => {
  return (
    <section id='skill'>
      <div className='bg-primary dark:bg-primary-dark'>
        <div className='mx-auto w-9/12 space-y-5 py-20 lg:w-full lg:px-10 sm:w-full sm:px-3'>
          <MainTitle
            title='Skills'
            subTitle='Here is a list of all my skills. Take a look'
          />
          <div className='skillWrapper grid grid-cols-2 gap-8 md:grid-cols-1'>
            <div className='skillPicture group relative items-center justify-center bg-cover md:flex'>
              <img src={skillImg} alt={skillImg} />
              <div className='absolute inset-0 space-y-3 bg-[#5252528f] p-8 text-justify text-xl leading-10 text-white opacity-0 backdrop-blur-2xl transition group-hover:opacity-100 xl:text-xl md:p-1 md:text-xl md:leading-10 sm:p-1 sm:text-xs'>
                <p>
                  Hi, My name is Tushar Imran . I am a Professional Web & UI /
                  UX Designer. I am working this sector last 3 Year . Still I am
                  learning How to make awesome creative design . Always I keep
                  an eye on my client’s wishes not only money. I always make
                  products that look very attractive, clean and professional
                  Which is great for you. My designs are based on innovation &
                  modern techniques. Trust my skills and hope you will get the
                  best designs. Love to work and want to make my clients happy.
                  If you have any new idea please message me before order Thank
                  You
                </p>
                <div className='resumeBtn'>
                  <a
                    href='#header'
                    className='cursor-pointer border border-ice bg-gradient-to-r from-[#ff9090] to-[#6b6bff] px-8 py-2 text-center text-xl uppercase text-white transition hover:bg-gradient-to-l'
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className='skillRange space-y-8'>
              <SkillRange name='HTML' value='85%' />
              <SkillRange name='CSS' value='80%' />
              <SkillRange name='Boostrap' value='75%' />
              <SkillRange name='Tailwind' value='85%' />
              <SkillRange name='JavaScript' value='80%' />
              <SkillRange name='React' value='50%' />
              <SkillRange name='Node' value='20%' />
              <SkillRange name='Express' value='30%' />
              <SkillRange name='MongoDB' value='15%' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;

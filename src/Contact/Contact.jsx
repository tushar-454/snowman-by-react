import React from 'react';
import ContactInput from '../Component/ContactInput';
import MainTitle from '../Component/MainTitle';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='bg-primary dark:bg-primary-dark'>
        <div className='mx-auto w-9/12 space-y-5 py-20 lg:w-full lg:px-10 sm:w-full sm:px-3'>
          <MainTitle
            title='Contact'
            subTitle='You can send me a message from here. I will try to communicate
            very quickly'
          />
          <div className='contactWrap mx-auto w-3/5 xl:w-3/4 md:w-full'>
            <div className='contactInput'>
              <form
                action='https://docs.google.com/forms/u/1/d/e/1FAIpQLSdw_dy3nbTnsUXM8CQTic0rBJFbY1IsQ4FuUgxqzB1xIKkhRg/formResponse'
                method='post'
                className='grid grid-cols-1 gap-y-5'
              >
                <ContactInput
                  icon={
                    <box-icon type='solid' name='user' color='#777'></box-icon>
                  }
                  type='text'
                  placeholder='name'
                  name='entry.645276520'
                />
                <ContactInput
                  icon={
                    <box-icon
                      name='envelope'
                      type='solid'
                      color='#777'
                    ></box-icon>
                  }
                  type='email'
                  placeholder='email'
                  name='entry.1785653250'
                />
                <ContactInput
                  icon={
                    <box-icon
                      name='mobile'
                      type='solid'
                      color='#777'
                    ></box-icon>
                  }
                  type='number'
                  placeholder='number'
                  name='entry.1307317913'
                />
                <div className='relative h-80'>
                  <label htmlFor='opinion relative'>
                    <span className='absolute top-3 left-3 text-[#777] dark:text-white'>
                      <box-icon name='edit' color='#777'></box-icon>
                    </span>
                    <textarea
                      type='text'
                      id='comment'
                      placeholder='Write your opinion'
                      name='entry.805109104'
                      required
                      className='h-full w-full border border-[#999] bg-ice py-2 pl-10 pr-2 text-xl outline-none dark:bg-[#acacac82] dark:text-white'
                    ></textarea>
                  </label>
                </div>
                <div className='relative'>
                  <label htmlFor='submit'>
                    <input
                      type='submit'
                      id='submitBtn'
                      value='Submit'
                      className='cursor-pointer border border-ice bg-gradient-to-r from-[#ff9090] to-[#6b6bff] px-8 py-2 text-xl uppercase text-white transition hover:bg-gradient-to-l'
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

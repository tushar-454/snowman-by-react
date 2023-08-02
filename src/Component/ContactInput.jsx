import React from 'react';

const ContactInput = (props) => {
  const { icon, type, placeholder, name } = props;
  return (
    <>
      <div className='relative'>
        <label htmlFor='fullName relative'>
          <span className='absolute top-3 left-3 text-[#777] dark:text-white'>
            {icon}
          </span>
          <input
            type={type}
            id={placeholder}
            placeholder={placeholder}
            name={name}
            required
            className='w-full border border-[#999] bg-ice py-2 pl-10 pr-2 text-xl outline-none dark:bg-[#acacac82] dark:text-white'
          />
        </label>
      </div>
    </>
  );
};

export default ContactInput;

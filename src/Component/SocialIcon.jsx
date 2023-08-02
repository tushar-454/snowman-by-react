import React from 'react';

const SocialIcon = (props) => {
  const { href, name, color } = props;
  return (
    <>
      <div className='rotate-0 transition duration-500 hover:rotate-360'>
        <a
          href={href}
          target='_blank'
          className='min-h-8 min-w-8 bg-white px-4 py-2 align-baseline'
          rel='noreferrer'
        >
          <box-icon name={name} type='logo' size='md' color={color}></box-icon>
        </a>
      </div>
    </>
  );
};

export default SocialIcon;

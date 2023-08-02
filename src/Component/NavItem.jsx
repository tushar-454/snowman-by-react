import React from 'react';

const NavItem = (props) => {
  const { href, name } = props;
  return (
    <>
      <a
        href={href}
        className='text-white  text-[22px] font-bold xl:text-[18px] md:text-[20px] md:underline md:decoration-dashed md:underline-offset-[5px] md:duration-300 md:hover:decoration-solid'
      >
        {name}
      </a>
    </>
  );
};

export default NavItem;

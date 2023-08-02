import React from 'react';
import logo from '../Assets/my-logo-with-fire.png';
import NavItem from '../Component/NavItem';

const Header = () => {
  return (
    <>
      <header id='header' className='relative'>
        <div className='header bg-primary dark:bg-primary-dark'>
          <div className='bg-slate-700 dark:bg-slate-900 mx-auto flex w-9/12 items-center justify-between xl:w-full xl:justify-around lg:justify-between lg:px-5 md:relative md:justify-between'>
            <div className='w-28'>
              <a href='#header'>
                <img src={logo} alt='Logo' className='w-full' />
              </a>
            </div>
            <menu className='mainMenu responsiveNav flex items-center justify-between py-1 gap-x-10 md:gap-y-3 md:w-56 md:rounded-b-lg'>
              <NavItem href='#header' name='Home' />
              <NavItem href='#workship' name='Service' />
              <NavItem href='#about' name='About' />
              <NavItem href='#skill' name='Skill' />
              <NavItem href='#portfolio' name='Portfolio' />
              <NavItem href='#contact' name='Contact' />
            </menu>
            <div className='hidden cursor-pointer md:mr-10 md:inline-block md:text-5xl md:text-white sm:mr-2 xs:mr-2'>
              <span id='cross'>
                <box-icon name='menu'></box-icon>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

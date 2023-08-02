/* eslint-disable react/style-prop-object */
import React from 'react';

const DarkMode = () => {
  return (
    <>
      <div className='darkmode group fixed top-28 left-5 z-50 flex h-10 w-10 cursor-pointer items-center justify-center bg-[#6e6e6e30] p-2 text-[gray] dark:bg-primary dark:text-white'>
        <span>
          <box-icon type='solid' name='adjust-alt' color='gray'></box-icon>
        </span>
      </div>
    </>
  );
};

export default DarkMode;

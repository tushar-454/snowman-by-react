import React from 'react';

const MainTitle = (props) => {
  const { title, subTitle, custom = {} } = props;
  return (
    <>
      <div
        className='mainTitle mb-10 space-y-4 text-center text-white dark:text-white'
        style={custom}
      >
        <h1 className='align-super text-5xl'>{title}</h1>
        <p className='align-super text-xl'>{subTitle}</p>
      </div>
    </>
  );
};

export default MainTitle;

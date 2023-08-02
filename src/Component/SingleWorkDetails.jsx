import React from 'react';

const singleWorkshipDetails = (props) => {
  const { img, icon, title, subTitle } = props;
  return (
    <>
      {/* single workship  */}
      <div className='singleWorkship group relative'>
        <div className='singleWorkshipPicture'>
          <img src={img} alt={img} />
        </div>
        <div className='singleWorkshipDetails absolute inset-0 space-y-6 bg-[#3333339c] p-5 text-center text-white opacity-0 backdrop-blur transition duration-200 group-hover:opacity-100 xl:space-y-0 xl:p-1 md:space-y-2 md:p-3'>
          <span className='text-left text-5xl xl:text-3xl lg:text-3xl md:text-5xl sm:text-xl'>
            {icon}
          </span>
          <h1 className='text-5xl xl:text-2xl lg:text-3xl md:text-5xl sm:text-2xl'>
            {title}
          </h1>
          <p className='xl:text-sm lg:text-sm md:pt-8 md:text-xl sm:pt-0 sm:text-sm'>
            {subTitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default singleWorkshipDetails;

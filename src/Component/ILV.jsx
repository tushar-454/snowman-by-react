import React from 'react';

const ILV = (props) => {
  const { icon, label, value } = props;
  return (
    <>
      <div className='text-xl flex justify-start items-center'>
        <span>{icon}</span>
        <b>{label}: </b>
        <span className='dark:text-white'>{value}</span>
      </div>
    </>
  );
};

export default ILV;

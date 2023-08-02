import React from 'react';

const SkillRange = (props) => {
  const { name, value } = props;
  return (
    <>
      <div
        className={`relative flex h-8 items-center justify-between rounded-2xl bg-ice from-[#ff9090] to-[#6b6bff] p-1 px-2 before:absolute before:h-full before:w-[${value}] before:rounded-2xl before:bg-gradient-to-r before:content-['']`}
      >
        <b className='absolute left-0 rounded-2xl bg-[#666] p-1 px-5 text-ice'>
          {name}
        </b>
        <b className='absolute right-3 text-tprimary'>{value}</b>
      </div>
    </>
  );
};

export default SkillRange;

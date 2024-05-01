import React from 'react';

const ViewButton = ({title}:{title:string}) => {
  return (
    <button className=' px-[24px] py-4 rounded-[64px] bg-[#282828] text-xl font-semibold leading-[27px] text-center text-white flex items-center gap-2'>
      {title} &gt; 
    </button>
  );
};

export default ViewButton;
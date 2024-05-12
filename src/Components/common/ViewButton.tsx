import React from 'react';

const ViewButton = ({title}:{title:string}) => {
  return (
    <button className=' px-[24px] py-3 rounded-[64px] bg-orange-500 text-xl  leading-[27px] text-center text-white flex items-center gap-2' >
      {title} &gt; 
    </button>
  );
};

export default ViewButton;
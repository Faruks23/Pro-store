import React from 'react';

const Discount = ({value}:{value:string}) => {
  return (
    <p className='!py-[6px] !px-[12px] rounded-[14px]  bg-[#3D3D3D] text-white'>
     -{value }% 
    </p>
  );
};

export default Discount;
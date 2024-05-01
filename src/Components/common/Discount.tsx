import React from 'react';

const Discount = ({value}:{value:string}) => {
  return (
    <p className='py-3 px-[6px] rounded-lg  bg-[#3D3D3D] text-white'>
     -{value }% 
    </p>
  );
};

export default Discount;
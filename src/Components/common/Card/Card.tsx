import React from 'react';
import Discount from '../Discount';

const Card = ({product}:{product:any}) => {
  return (
    <div className=''>
      <div className="card card-compact  md:h-[400px] bg-base-100 shadow-xl relative">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"  className=' h-[360px] object-cover'/></figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>

          <div className="card-actions  justify-between ">
            <div>
              <p className='font-normal text-[#000000]'><span className='text-gray-500 line-through font-normal mr-2 '> ${product.discounted_price} </span > ${product.price} </p>
            </div>
            <div className='w-[21px] h-[21px] rounded-full border flex justify-center  items-center font-semibold   border-gray-500 cursor-pointer hover:scale-110 duration-200'>
              +
            </div>
          </div>
        </div>
        <div className="discount absolute top-4 left-4">
          <Discount value='10'></Discount>
        </div>
      </div>
    </div>
  );
};

export default Card;
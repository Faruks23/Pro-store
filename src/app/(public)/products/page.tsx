'use client'

import useProducts from '@/Components/Hooks/useProduct';
import Card from '@/Components/common/Card/Card';
import Title from '@/Components/common/Title';
import React from 'react';

const ProductPage = () => {
  const { data, isLoading, error } = useProducts();
  return (
    <div className=' py-32'>
      <div className="container mx-auto">
        <div className="flash-sale-head">
          <Title title='Our Collection Of Products'></Title>
          <h3 className='font-bold  mt-8' >Showing 1–12 of 24 item(s)</h3>
          <p className=' text-[#949494]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="product-container flex gap-8  mt-8">
          <div className="left-filter w-[20%] sticky top-0 left-0 flex flex-col gap-5">
            {/* price filter */}
            <div className="price-filter py-[40px] px-[30px] border">
              <h1 className='  text-[22px] font-semibold'>Price Range</h1>
              <div className="list mt-[22px] flex flex-col gap-3">
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                 </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                 </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                 </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                 </div>
              </div>
            </div>
            {/* category filter */}
            <div className="price-filter py-[40px] px-[30px] border">
              <h1 className='  text-[22px] font-semibold'>Price Range</h1>
              <div className="list mt-[22px] flex flex-col gap-3">
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input type="checkbox" name="check" id="" />
                  <label className=' font-normal text-[#414141]'> $20.00 - $ 50.00</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8  w-[80%]">

            {data.map(products => {
              return (

                <>
                  <Card product={products} key={products.id}></Card>
                </>

              )
            })}
          </div>
         </div>
      </div>
    </div>
  );
};

export default ProductPage;
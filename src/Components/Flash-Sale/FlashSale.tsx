
"use client"
import React from 'react';
import Title from '../common/Title';
import ViewButton from '../common/ViewButton';
import useProducts from '../Hooks/useProduct';
import Card from '../common/Card/Card';

const FlashSale = () => {
  const { data, isLoading, error } = useProducts();
  return (
    <div className='my-[100px]'>
      <div className="flash-sale-head flex justify-between items-center container mx-auto mb-[43px]">
        <Title title='Flash Sale'></Title>
        <ViewButton title='View More'></ViewButton>
      </div>
      <div className="flash-sale-card-container container mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3vw]'>
          {data.slice(4,8).map(products => {
            return (
              
              <>
                <Card product={products}  key={products.id}></Card>
              </>

            )
          })}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
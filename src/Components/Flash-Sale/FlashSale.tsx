

import React from 'react';
import Title from '../common/Title';
import ViewButton from '../common/ViewButton';
import { productType } from '../Hooks/useProduct';
import Card from '../common/Card/Card';


const FlashSale = async () => {
  const res = await fetch("https://pro-store-server.vercel.app/products", {
    next: {
      revalidate: 30,
    }
  })
  const data = await res.json();

  return (
    <div className='my-[100px]'>
      <div className="flash-sale-head flex justify-between items-center container mx-auto mb-[43px]">
        <Title title='Flash Sale'></Title>
        <ViewButton path='/flash-sale' title='View More'></ViewButton>
      </div>
      <div className="flash-sale-card-container container mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3vw]'>
          {data.slice(4, 8).map((product: productType) => {
            return (

              <>
                <Card product={product} key={product.id}></Card>
              </>

            )
          })}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;



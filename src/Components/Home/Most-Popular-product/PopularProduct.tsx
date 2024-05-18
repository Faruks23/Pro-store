
import { productType } from '@/Components/Hooks/useProduct';
import Card from '@/Components/common/Card/Card';
import Title from '@/Components/common/Title';
import ViewButton from '@/Components/common/ViewButton';
import React from 'react';

const PopularProduct = async () => {

  const res = await fetch("https://pro-store-server.vercel.app/products", {
    next: {
      revalidate: 30,
    }
  })
  const data = await res.json();
  return (
    <div className='mt-[100px]'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <div className="popular-head max-w-[610px]">
            <Title title='Most Popular Products'></Title>
            <p className=' mt-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
          </div>
          <ViewButton path='/products' title='View All'></ViewButton>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3vw] mt-10'>
          {data.slice(8, 16).map((products: productType) => {
            return (

              <>
                <Card product={products} key={products.id}></Card>
              </>

            )
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
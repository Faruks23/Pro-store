
'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider'


import useProducts from '@/Components/Hooks/useProduct';
import Discount from '@/Components/common/Discount';
import Image from 'next/image';


const Slider = () => {

  const { data, isLoading, error } = useProducts();

  const swiper = useSwiper();

  const slideNext = () => {
    if (swiper) {
      
      swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
     
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
console.log(data)

  return (
    <>
      <div className="px-5  md:mx-32 mt-4 ">
        
        <div className="slider-container  px-2 my-3 mx-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}

            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 29,
              },
            }}
            modules={[]}
            
            className="mySwiper  "
          >
            {
              data?.map(product => {
                return (
                  <>
                    <SwiperSlide>
                      <div className="card card-compact  h-[288px] bg-base-100  relative border">
                        <figure><Image width={288} height={200} alt='product-img' src={product.image}></Image></figure>
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
                    </SwiperSlide>
                  </>
                )
              })
            }



          </Swiper>
        </div>
       
      </div>
      




    

    </>
  );
};

export default Slider;
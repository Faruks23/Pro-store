
'use client'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider'

// import required modules
import { Pagination } from 'swiper/modules';

interface productType {
  id:number
  product: string,
  name: string,
  price: number,
  discounted_price: number,
  image: "broccoli.jpg",
  rating: number,
  description:string,
  category: string,
}

const Slider = () => {

  const [products, setProducts] = useState < productType []>([])
  useEffect(() => {
    fetch('/product.json')
      .then(res => res.json())
      .then(data => {
      setProducts(data)
    })
    
  }, [])
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
  return (
    <>
      <div className="grid  grid-cols-6  justify-items-center  items-center gap-10 ">
        <div className="prev w-[10%] col-span-1 hidden md:block">
          <button onClick={slidePrev} className='btn btn-primary'>Prev</button>
        </div>
        <div className="slider-container md:col-span-4  col-span-6  w-[100%]  px-2 my-3 mx-3">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}

            breakpoints={{
              640: {
                slidesPerView: 2,
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
              products.map(product => {
                return (
                  <>
                    <SwiperSlide>
                      <div className="card card-compact  md:h-[288px] bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{product?.name}</h2>

                          <div className="card-actions  justify-between ">
                            <div>
                              <p><span className='text-gray-500  '>{product.discounted_price}</span>{product.price} </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                )
              })
            }



          </Swiper>
        </div>
        <div className="next w-[10%] col-span-1 bg-slate-500 hidden md:block">
          <button onClick={slideNext} className='btn btn-primary'>Next</button>
        </div>
      </div>
      




    

    </>
  );
};

export default Slider;
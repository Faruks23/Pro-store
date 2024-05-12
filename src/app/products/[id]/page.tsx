import Image from 'next/image';
import React from 'react';

const ProductDetails = () => {
  return (
    <div className=' py-32 '>
      <div className="container mx-auto">
        <div className="product-container grid md:grid-cols-2 gap-[71px]  ">
          <div className="product-img-container flex gap-10 items-center    flex-col-reverse md:flex-row">

            <div className="product-left flex  md:flex-col gap-5">
              <div className="image-1 w-[140px] h-[160px] bg-slate-400">

              </div>
              <div className="image-2 w-[140px] h-[160px] bg-slate-400">

              </div>
              <div className="image-3 w-[140px] h-[160px] bg-slate-400">

              </div>
              
            </div>
            <div className="main-image w-[500px] h-[532px] bg-slate-400 ">

            </div>
            
          </div>
          <div className="product-details-container">
            <div className="details-head ">
              <div className='flex justify-between items-center'>
                <h1 className='font-bold text-[18px] md:text-[26px]'>Double Bed & Side Tables</h1>
                <div className="rating gap-1">
                  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400 hover:bg-pink-600 duration-200 overflow-hidden" checked  />
                  
                </div>
              </div>
              <div className="price-rating flex items-center mt-3">
                <h1 className=' text-[28px] font-normal'>$54.98</h1> 
                <div className=' border-l ml-2 border-black px-2'>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <span className='ml-2 text-gray-400'>(34 review)</span>
                  </div>
                
                </div>
              </div>
            </div>
            <div className="details border-t mt-10 pt-[30px]">
              <p className=' text-[15px]  font-normal leading-[170.52%]'>Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. </p>
        

             
             
              <ul className='list-disc p-5 mt-3'>
                <li> Lorem ipsum dolor sit amet, adipi scing elit</li>
                <li> Lorem ipsum dolor sit amet, adipi scing elit</li>
                <li> Lorem ipsum dolor sit amet, adipi scing elit</li>
              </ul>

              <div className="bottom-details flex flex-col gap-4 mt-6">
                <div className="flex gap-4 items-center">
                  <Image src={'/group.png'} width={26} height={26} alt={'truck'}></Image>
                  <p className=' font-medium'>Free worldwide shipping on all orders over $100</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Image src={'/3d-rotate.png'} width={26} height={26} alt={'truck'}></Image>
                  <p className=' font-medium'>Delivers in: 3-7 Working Days Shipping & Return</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-details my-16 border-t p-2 ">
          <p className=' text-[15px]  font-normal leading-[170.52%]'>Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
           
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
          </p>




          <ul className='list-disc p-5 mt-3'>
            <li> Lorem ipsum dolor sit amet, adipi scing elit laoreet dolore magn.</li>
            <li> Lorem ipsum dolor sit amet, adipi scing elit laoreet dolore magn.</li>
            <li> Lorem ipsum dolor sit amet, adipi scing elit laoreet dolore magn.</li>
            <li> Lorem ipsum dolor sit amet, adipi scing elit consectetuer adipi</li>
            <li> Lorem ipsum dolor sit amet, adipi scing elit consectetuer adipi</li>
          </ul>
        </div>

      
      </div>
    </div>
  );
};

export default ProductDetails;
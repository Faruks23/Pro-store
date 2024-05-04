import Title from '@/Components/common/Title';
import ViewButton from '@/Components/common/ViewButton';
import { brands } from '@/Components/data/brand';
import React from 'react';

const TopCategory = () => {

  return (
    <div className='my-[100px]'>
      <div className='container mx-auto'>
        <div className="top-category-head text-center">
          <Title title='Top Categories'></Title>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
        </div>
        <div className="category-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[32px] gap-4 md:gap-5 mt-[70px]">



          <div className='category-1 mx-h-[513px] bg-slate-400 '>
            <div className="card  bg-base-100 shadow-xl h-full">
              <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                </h2>
              </div>
            </div>

          </div>
          <div className='middle-cards flex flex-col gap-8 mx-h-[513px] bg-slate-400'>
            <div className="category-2">
              <div className="card  bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                  </h2>
                </div>
              </div>
            </div>
            <div className="category-2">
              <div className="card  bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="category-4 mx-h-[513px] bg-slate-400 ">
            <div className="card  bg-base-100 shadow-xl  h-full">
              <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                </h2>
              </div>
            </div>
          </div>



        </div>

        <div className="view-all  mt-[70px] flex justify-center items-center">
          <ViewButton  title='View All'></ViewButton>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
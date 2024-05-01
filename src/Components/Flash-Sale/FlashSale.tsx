import React from 'react';
import Title from '../common/Title';
import ViewButton from '../common/ViewButton';

const FlashSale = () => {
  
  return (
    <div className='my-[100px]'>
      <div className="flash-sale-head flex justify-between items-center container mx-auto mb-[43px]">
        <Title title='Flash Sale'></Title>
        <ViewButton title='View More'></ViewButton>
      </div>
      <div className="flash-sale-card-container container mx-auto">
        <div className='gird grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3vw]'>
          
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
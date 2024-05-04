import React from 'react';
import HeroSlider from './HeroSlider';

const Hero = () => {
  return (
    <div className='bg-gray-500 h-screen w-full pt-10'>
      <div className='container mx-auto'>
        <div className="top-hero flex justify-center items-center flex-col gap-4 text-center mt-[100px] max-w-[797px] mx-auto">
          <h1 className='font-bold  text-2xl  leading-9 md:text-5xl md:leading-[57px] text-white'>Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!</h1>
          <p className=' text-base-300'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
        </div>
        
        <div className="hero-slider">
          <HeroSlider></HeroSlider>
        </div>
       </div>
    </div>
  );
};

export default Hero;
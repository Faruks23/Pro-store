import React from 'react';
import HeroSlider from './HeroSlider';

const Hero = () => {
  return (
    <div className='bg-white  h-screen w-full pt-10 relative'>
      <div className='container mx-auto'>
        <div className="top-hero flex justify-center items-center flex-col gap-4 text-center mt-[100px] max-w-[797px] mx-auto">
          <h1 className='font-bold  text-2xl  leading-9 md:text-5xl md:leading-[57px] '>Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!</h1>
          <p className=''> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
        </div>
        
        <div className="hero-slider">
          <HeroSlider></HeroSlider>
        </div>
      </div>
      
      <div className="sap  bg-pink-300 w-[300px] h-[300px] absolute bottom-[20%] right-[0%]   blur-3xl   opacity-25 z-0">

      </div>
      
      <div className="sap  bg-blue-200 w-[300px] h-[300px] absolute top-[20%] right-[40%]   blur-3xl   opacity-30 z-0">

      </div>
    </div>
  );
};

export default Hero;
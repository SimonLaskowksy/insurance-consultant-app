import React from 'react';

const Slide = ( {name, text, imgUrl} ) => {
  return (
    <div className="swiper-slide pb-28">
        <div className='z-[10] max-w-[600px] px-[30px] mx-auto'>
            <div className='mb-12 relative inline-block'>
                <img src={imgUrl} alt={name} 
                className='max-w-[100px] rounded-full'/>
            </div>
            <blockquote className='mb-8 text-[1.1rem] leading-[1.6] text-white'>
                {text}
            </blockquote>
            <div className='text-white'>
                <cite className='not-italic'>
                    {name}
                </cite>
            </div>
        </div>
    </div>         
  )
}

export default Slide;
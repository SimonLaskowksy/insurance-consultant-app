import React from 'react'
import {useEffect} from "react";
import hero from '../../assets/img-1-min.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'slide',
      duration: 800,
    });
  }, [])

  return (
    <section className="pt-[10rem] pb-[7rem] lg:pb-[15rem] px-0 bg-primary relative" id="home">

      <div className="px-5 lg:px-0 max-w-[calc(1200px-300px)] mx-auto block
      md:flex flex-row items-center justify-center">
        <div className='w-full md:w-3/5 relative z-[1]'>

          <h1 className="text-center md:text-left text-[2rem] sm:text-5xl
          md:text-6xl text-white leading-[1.2] mb-[1.3rem] font-serif
          font-bold" data-aos="fade-up" data-aos-delay="">
            The law Is The Public Conscience
          </h1>
          <div className='text-center md:text-left max-w-full md:max-w-[450px]
          mb-[2rem]'>
            <p className='text-white text-opacity-50' data-aos="fade-up" data-aos-delay="100">
              Suspendisse nibh sapien, ultricies ac purus vel, eleifend
              commdo tortor. Nam sed tempor sapien. Interdum et
            </p>
          </div>

          <div className="justify-center text-center md:justify-start block
          sm:flex items-center space-x-0 sm:space-x-[1.875rem]" data-aos="fade-up" data-aos-delay="200">
            <a className='mb-t sm:mb-0 text-center w-full sm:w-auto
            inline-block py-4 px-5 rounded-[30px] bg-secondary text-dark
            border border-transparent transition-all duration-300 ease-in-out
            hover:border-white hover:bg-transparent hover:text-white'>
              Skontaktujmy się
            </a>
            <a className='text-center inline-block text-white
            border-b border-b-transparent transition-all duration-300 ease-in-out
            hover:border-b-white hover:text-opacity-70'>
              Pricing Area
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-[380px] z-0 relative" data-aos="fade-left" data-aos-delay="300">
          <div className="relative left-0 mt-20 md:mt-0 md:-left-[80px]
          before:content-[''] before:absolute before:rounded-tr-[300px]
          before:rounded-tl-[300px] before:z-[-1] before:w-full before:h-full
          before:-bottom-[30px] before:-left-[30px] before:border
          before:border-secondary
          
          after:content-[''] after:absolute after:rounded-tr-[300px]
          after:rounded-tl-[300px] after:z-[-1] after:w-full after:h-full
          after:-top-[30px] after:-right-[30px] after:border
          after:border-dark">
            <img src={hero} alt="Hero Image" 
            className='max-w-full object-cover rounded-tr-[300px] rounded-tl-[300px]
            h-[388px] sm:h-[560px]'/>
          </div>
        </div>
      </div>


    </section>

  )
}

export default Header
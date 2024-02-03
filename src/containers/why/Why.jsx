import React from 'react'
import whyUsImage from '../../assets/img-3-min.jpg';
import Reason from '../../components/reason/Reason';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const reasonsData = [
  {
    text: 'Experience',
  },
  {
    text: 'Client-Centric Approach',
  },
  {
    text: 'Results-Oriented',
  },
  {
    text: 'Personalized Service',
  },
];

const Why = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'slide',
      duration: 800,
    });
  }, [])

  return (
    <section className="pt-16 md:pt-16 pb-16 md:pb-32 relative z-[1]" id="why">
      <div className="max-w-[1200px] mx-auto px-5 block md:flex flex-row
      justify-between">
        <div className="mb-16 md:mb-0 mx-auto md:mx-0 max-w-[400px] md:max-w-none 
        w-full md:w-[38%] relative">
          <div className='relative' data-aos="fade-up" data-aos-delay="0">
            <div className='absolute top-0 sm:top-[70px] translate-x-0
            sm:-translate-x-1/2 z-[9] inline-block p-[28px] rounded-[20px]
            bg-primary text-white leading-none shadow-2xl'>
              <span className='block text-[20px]'>
                <strong className='text-[30px]'>15</strong> Lat 
              </span>
              <span className='text-[20px] block'>
                doświadczenia
              </span>
            </div>
            <div className="relative before:content-[''] before:absolute
            before:rounded-br-[300px] before:rounded-bl-[300px] before:z-[-1]
            before:w-full before:h-full before:-bottom-[20px] before:-left-[20px]
            before:border before:border-primary
            
            after:content-[''] after:absolute after:rounded-br-[300px]
            after:rounded-bl-[300px] after:z-[-1]
            after:w-full after:h-full after:-bottom-[20px] after:-left-[20px]
            after:border after:border-[#ccc]">
              <img src={whyUsImage} alt="Why us image"className='max-w-full 
              h-[530px] rounded-br-[300px] rounded-bl-[300px] object-cover object-top' 
              data-aos="fade-in" data-aos-delay="0"/>
            </div>
            <div className='absolute bottom-0 sm:bottom-[70px] right-0
            translate-x-0 sm:translate-x-12 z-[9] inline-block p-[28px]
            rounded-[20px] bg-secondary text-dark leading-none shadow-2xl'>
              <span className='block text-[20px]'><strong className='text-[30px]'>99%</strong></span>
              <span>Rate of succes</span>
            </div>
          </div>
        </div>

        <div className='w-full md:w-[45%]'>
          <h2 className='text-[2.5rem] leading-[1.3] text-dark mb-6 font-serif font-bold'
          data-aos="fade-up" data-aos-delay="0">
            Dlaczego ja?
          </h2>
          <p className='text-gray mb-8' data-aos="fade-up" data-aos-delay="100">
            Mauris dictum massa non consectetur volutpat. Sed if accumsan
            risus, eget sagittis lectus. Donec ut est mauris. Etiam et 
            libero tellus. Suspendisse ac dictum massa, ac viverra lorem.
          </p>

          <ul className='mb-10 grid grid-cols-1 sm:grid-cols-2 gap-2.5'>
            {reasonsData.map((item, index) => (
              <div data-aos="fade-up" data-aos-delay={index * 100 + 200} key={item + index}>
                <Reason text={item.text} key={item.text + index} />
              </div>
            ))}
          </ul>

          <div className='block sm:flex items-center text-center space-x-0 
          sm:space-x-[1.875rem]' data-aos="fade-up" data-aos-delay="600">
            <a className='mb-t sm:mb-0 text-center w-full sm:w-auto
            inline-block py-4 px-5 rounded-[30px] bg-dark text-white
            border border-transparent transition-all duration-300 ease-in-out
            hover:bg-secondary hover:text-dark'>
              Skontaktujmy się
            </a>
            <a className='text-center inline-block text-dark
            border-b border-b-transparent transition-all duration-300 ease-in-out
            hover:border-b-dark hover:text-opacity-70'>
              Pricing Area
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why
import React from 'react';
import Service from '../../components/service/Service';
import { icon1, icon2, icon3 } from './imports';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const servicesData = [
  {
    img: icon1,
    title: 'General Legal Advise',
    text: 'Suspendisse nibh sapien, ultricies ac purus vel, eleifend commdo tortor. Nam sed tempor sapien. Interdum et',
  },
  {
    img: icon2,
    title: 'Criminal Law',
    text: 'Suspendisse nibh sapien, ultricies ac purus vel, eleifend commdo tortor. Nam sed tempor sapien. Interdum et',
  },
  {
    img: icon3,
    title: 'Intellectual Property',
    text: 'Suspendisse nibh sapien, ultricies ac purus vel, eleifend commdo tortor. Nam sed tempor sapien. Interdum et',
  },
];

const Services = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'slide',
      duration: 800,
    });
  }, [])

  return (
    <section className="py-[7rem]" id="services">
      <div className="max-w-[1000px] w-full mx-auto pt-8 pl-5 pr-5">
      
        <div className='block md:flex flex-row items-center justify-between
        mb-[4.125rem'>
          <div className="max-w-full md:max-w-[28rem] lg:max-w-[38rem]">
            <h2 className="text-[2.5rem] leading-[1.3] text-dark mb-6 font-serif font-bold"
            data-aos="fade-up" data-aos-delay="0">
              Our Range of Services
            </h2>
            <p className='text-gray mb-8'
            data-aos="fade-up" data-aos-delay="100">
              Suspendisse nibh sapien, ultricies ac purus vel, eleifend commdo tortor. Nam sed tempor sapien. Interdum et
            </p>
          </div>

          <div className='block sm:flex justify-start md:justify-end'
          data-aos="fade-up" data-aos-delay="200">
            <a className='mb-t text-center w-full sm:w-auto max-[768px]:mb-8 min-[768px]:mb-0
            inline-block py-4 px-5 rounded-[30px] bg-dark text-white
            border border-transparent transition-all duration-300 ease-in-out
           hover:bg-secondary hover:text-dark'>
              Wszystkie usługi
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8
        md:gap-20'>
          {servicesData.map((item, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100} key={item + index}>
              <Service title={item.title} text={item.text} imgUrl={item.img} key={item.text + index}/>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
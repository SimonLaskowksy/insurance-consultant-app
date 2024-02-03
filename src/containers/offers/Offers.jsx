import React from 'react';
import offer_img from '../../assets/img-2-min.jpg';
import Offer from '../../components/offer/Offer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const offersData = [
  {
    text: 'General Legal Advise',
  },
  {
    text: 'Contact Review and Drafting',
  },
  {
    text: 'Litigation',
  },
  {
    text: 'Family Law',
  },
];

const Offers = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'slide',
      duration: 800,
    });
  }, [])

  return (
    <section className="pt-0 px-0 pb-24 md:pb-[20rem] relative before:content-['']
    before:absolute before:z-[-1] before:w-1/4 before:left-0
    before:top-0 before:bottom-0 before:bg-white after:content-['']
    after:absolute after:z-[-1] after:w-full md:after:w-3/4 after:right-0
    after:top-0 after:bottom-0 after:bg-primary" id='offers'>
      <div className='block md:flex flex-row max-w-[1200px] mx-auto pt-0
      md:pt-20 justify-end items-center px-5'>

        <div className="w-full md:w-[45%] left-0 relative mb-[6.5rem]
        md:mb-0 md:absolute before:content-[''] before:absolute before:w-3/4
        before:h-[10.625rem] before:-bottom-[5rem] before:-left-6 md:before:left-0
      before:bg-secondary before:rounded-tr-[100px] before:rounded-br-[100px]"
        data-aos="fade-right" data-aos-delay="0">
          <img src={offer_img} alt="What we offer image" className='w-full
          h-[588px] object-cover object-top'/>
        </div>

        <div className='w-full md:w-[45%] z-[2] relative'>
          <div>
            <h2 className='text-2xl sm:text-[2rem] md:text[2.5rem] leading-[1/3]
            text-white mb-8 font-bold font-serif'
            data-aos="fade-up" data-aos-delay="100">
              Our legal team is highly skilled and well-versed
            </h2>
            <p className='text-white text-opacity-40 mb-8'
            data-aos="fade-up" data-aos-delay="200">
              Suspendisse nibh sapien, ultricies ac purus vel, eleifend
              commdo tortor. Nam sed tempor sapien. Interdum et
            </p>
            <ul className='mb-10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 list-none'>
              {offersData.map((item, index) => (
                <div data-aos="fade-up" data-aos-delay={index * 100 + 300} key={item + index}>
                  <Offer text={item.text} key={item.text + index}/>
                </div>
              ))}
            </ul>
              <div className='block sm:flex text-center items-center space-x-0
              sm:space-x-[1.875rem]' data-aos="fade-up" data-aos-delay="700">
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
        </div>


      </div>
    </section>
  )
}

export default Offers

import React from 'react';
import { client1, client2, Slide, Swiper, SwiperSlide, Navigation, Pagination } from './imports';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import{ FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";


const slidesData = [
  {
    img: client1,
    name: "John Davis",
    text: "I had the privilege of working with Johnson & Partners, and I can confidently say that they are th ebest in the businness. Attorney Emily Johnson and her team showed exceptional dedication and legal expertise in handlin my case. I'm truly gratrfull for their support.",
  },
  {
    img: client2,
    name: "Rob Smith",
    text: "I had the privilege of working with Johnson & Partners, and I can confidently say that they are th ebest in the businness. Attorney Emily Johnson and her team showed exceptional dedication and legal expertise in handlin my case. I'm truly gratrfull for their support.",
  },
];

const Testimonials = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'slide',
      duration: 800,
    });
  }, [])

  return (
    <div className="testimonial bg-primary py-16 md:py-28 px-0 md:px-5 relative z-[3]">
      <div className="bg-[#003830] w-[400px] h-1/2 z-[2] absolute rounded-bl-[300px]
      rounded-br-[300px] top-0 left-0 before:content-[''] before:absolute
      before:top-0 before:right-[20px] before:w-full before:h-full before:pb-[20px]
      before:z-[1] before:rounded-bl-[300px] before:rounded-br-[300px]
      before:border before:border-[#3b6b43]">
      </div>
      <div className='bg-[#003830] w-[400px] h-1/2 z-[2] absolute rounded-tl-[300px]
      rounded-tr-[300px] bottom-0 right-0'>
      </div>
      <div className='max-w-[1200px] mx-auto text-center relative z-[10]'>
        <h2 className='text-[2rem] md:text-[2.5rem] leading-tight text-white
        mb-14 font-bold font-serif' data-aos="fade-up" data-aos-delay="0">
          Moi zadowoleni klienci
        </h2>
        <div className='swiper-wrap' data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            speed={700}
            modules={
              [
                Navigation,
                Pagination
              ]
            }
            navigation={
              { 
                prevEl: ".custom-swiper-button-prev",
                nextEl: ".custom-swiper-button-next" 
              }
            }
            pagination={
              {
                el: ".swiper-pagination",
                clickable: true
              }
            }
          >
            {slidesData.map((item, index) => (
              <SwiperSlide key={item.text + index}>
                <Slide name={item.name} text={item.text} imgUrl={item.img} />
              </SwiperSlide>
            ))}
            <div className='swiper-pagination bottom-0 flex justify-center'></div>

            <div className='swiper-button-prev custom-swiper-button-prev
            !hidden sm:!inline-block absolute left-[20px] top-1/2
            -translate-y-1/2 duration-300 transition-all ease-in-out
            after:hidden group'>
                <FaChevronLeft className='block fa fa-chevron-left !w-[30px] !h-[30px] top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2 text-[2.2rem]
                text-secondary duration-300 transition-all ease-in-out
                group-hover:opacity-50'/>
            </div>

            <div className='swiper-button-next custom-swiper-button-next
            !hidden sm:!inline-block absolute !right-[20px] left-auto top-1/2
            -translate-y-1/2 duration-300 transition-all ease-in-out
            after:hidden group'>
                <FaChevronRight className='!w-[30px] !h-[30px] top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2 text-[2.2rem]
                text-secondary duration-300 transition-all ease-in-out
                group-hover:opacity-50'/>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;

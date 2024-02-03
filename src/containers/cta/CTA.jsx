import React from 'react';
import contactImage from '../../assets/person-2-min.jpg'
import{ FaPhone, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const CTA = () => {

	useEffect(() => {
		AOS.init({
			once: true,
			easing: 'slide',
			duration: 800,
		});
	}, [])

  return (
    <div className='pt-20 pb-[30rem] px-0 relative z-[1] bg-secondary'>
        <div className='max-w-[980px] mx-auto px-5 block md:flex flex-row
        justify-between items-center'>
            <div className='mb-12 md:mb-0 w-full md:w-[40%]'
						data-aos="fade-right" data-aos-delay="0">
                <div className="mx-auto md:mx-0 relative max-w-[350px] rounded-br-[300px]
                rounded-bl-[300px] z-[1] before:content-[''] before:absolute
                before:rounded-br-[300px] before:rounded-bl-[300px]
                before:z-[-1] before:w-full before:h-full before:-right-[20px]
                before:top-[20px] before:border before:border-dark">
                    <div className='p-8 bg-white flex flex-row items-center space-x-6'>
                        <img src={contactImage} alt="Josh Meyer" className='w-[70px]
                        grow-0 shrink-0 basis-[70px] rounded-full object-cover object-center'/>
                        <span>
                            <strong className='block font-serif text-[1.2rem] text-dark'>
                                John Meyer
                            </strong>
                            <span className='text-gray'>
                                Legal Expert
                            </span>
                        </span>
                    </div>
                    <div className='bg-primary px-12 pt-12 pb-16 flex flex-col
                    justify-center rounded-br-[300px] rounded-bl-[300px]'>
                        <a href="tel://696969696" className='mb-6 flex flex-row
                        justify-start space-x-[20px]'>
                            <span className='grow-0 shrink-0 basis-[30px] text-[2rem]
                            text-secondary relative'>
                                <FaPhone className='h-[30px]'/>
                            </span>
                            <div>
                                <span className='text-white text-opacity-40'>Call Us</span>
                                <strong className='block text-white text-[1.2rem]'>+48 696 969 696</strong>
                            </div>
                        </a>
                        <a href="mailto:6969@op.pl" className='mb-6 flex flex-row
                        justify-start space-x-[20px]'>
                            <span className='grow-0 shrink-0 basis-[30px] text-[2rem]
                            text-secondary relative'>
                                <FaEnvelope className='h-[30px]'/>
                            </span>
                            <div>
                                <span className='text-white text-opacity-40'>Write a message</span>
                                <strong className='block text-white text-[1.2rem]'>6969@op.pl</strong>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <div className='w-full md:w-3/5 pl-0 md:pl-12' data-aos="fade-left" data-aos-delay="100">
                <h2 className='text-2xl sm:text-[2rem] leading-[1.3] text-dark mb-5
                font-bold font-serif text-center sm:text-left'>
                    Porozmawiajmy już dziś
                </h2>
                <p className='mb-7 text-center sm:text-left'>
                    Ut quis molestie ipsum, non imperdiet nisi. 
                    Praesent sollicitudun, enim vel leoretcongue, 
                    enim lorem ullamcorper risus, sed vestibulum ante
                </p>

                <div className='text-center sm:text-left'>
                    <a className='mb-5 sm:mb-0 text-center w-full sm:w-auto
                    inline-block py-4 px-5 rounded-[30px] bg-dark text-white
                    border border-transparent transition-all duration-300 ease-in-out
                    hover:bg-white hover:text-dark'>
                        Skontaktujmy się
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CTA
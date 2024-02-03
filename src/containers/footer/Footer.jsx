import React from 'react'
import logo from '../../assets/logo.svg'
import{ FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer role='contentinfo' className='bg-primary py-28 px-0 relative z-[2]
    -mt-[25rem] rounded-tr-[200px] lg:rounded-tr-[300px]'>
      <div className='max-w-[1200px] mx-auto block md:flex flex-row
      justify-between px-5'>

        <div className='mb-14 md:mb-0 w-full md:w-[47%] lg:w-[35%]'>
          <a href="#" className='mb-6 inline-block'>
            <img src={logo} alt="Logo" className='w-[3.125rem]'/>
          </a>
          <p className='text-white text-opacity-40 mb-6'>
          Suspendisse nibh sapien, ultricies ac purus vel, 
          eleifend commdo tortor. Nam sed tempor sapien. Interdum et
          </p>
          <ul className='flex list-none space-x-4'>
            <li>
              <a href="#" className='flex justify-center items-center w-10 h-10
              border border-white duration-300 transition-all ease-in-out
              border-opacity-25 rounded-full hover:border-opacity-100'>
                <FaFacebookSquare className='text-white'/>
              </a>
            </li>
            <li>
              <a href="#" className='flex justify-center items-center w-10 h-10
              border border-white duration-300 transition-all ease-in-out
              border-opacity-25 rounded-full hover:border-opacity-100'>
                <FaTwitterSquare className='text-white'/>
              </a>
            </li>
            <li>
              <a href="#" className='flex justify-center items-center w-10 h-10
              border border-white duration-300 transition-all ease-in-out
              border-opacity-25 rounded-full hover:border-opacity-100'>
                <FaLinkedin className='text-white'/>
              </a>
            </li>
            <li>
              <a href="#" className='flex justify-center items-center w-10 h-10
              border border-white duration-300 transition-all ease-in-out
              border-opacity-25 rounded-full hover:border-opacity-100'>
                <FaInstagramSquare className='text-white'/>
              </a>
            </li>
          </ul>
        </div>
      <div className='w-full md:w-1/2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
        md:gap-3'>
          <div>
            <h3 className='text-base font-serif text-white font-bold mb-6'>
              Practicing Area
            </h3>
            <ul className='list-none'>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Personal Injury</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Real Estate</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Corporate Law</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Criminal Defense</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Corporate Law</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Immigration</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Estate Planning</a>
              </li>
            </ul>
          </div>
          <div> 
          <h3 className='text-base font-serif text-white font-bold mb-6'>
              About
            </h3>
            <ul className='list-none'>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Company</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Clients</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Team</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Career</a>
              </li>
            </ul>
          </div>
          <div>
          <h3 className='text-base font-serif text-white font-bold mb-6'>
              Resources
            </h3>
            <ul className='list-none'>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Blogs</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Press</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-white text-opacity-40 duration-300
                transition-all ease-in-out hover:text-opacity-100'>Frequently Asked Questions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      <div className='max-w-[1200px] pt-20 block md:flex flex-row mx-auto
      jusitfy-between px-5'>
        <div className='mb-[10px] md:mb-0 text-center md:text-left w-full md:w-1/2
        text-white text-opacity-40'>
          <span>&copy; Copyright 2023. <a href="https://github.com/SimonLaskowksy" className='text-white text-opacity-40
          duration-300 transition-all ease-in-out
          hover:text-opacity-100' target='_blank'>SimonLaskowsky</a>. All right reserved.
          </span>
        </div>

      <div className='mb-[10] md:mb-0 w-full md:w-1/2 text-center md:text-right flex
      justify-center md:justify-end'>
        <div className='felx space-x-4'>
          <a href="#" className='text-white text-opacity-40 duration-300
          transition-all ease-in-out hover:text-opacity-100'>Terms &amp; Conditions</a>
          <a href="#" className='text-white text-opacity-40 duration-300
          transition-all ease-in-out hover:text-opacity-100'>Privacy</a>
        </div>
      </div>

      </div>

    </footer>
  )
}

export default Footer
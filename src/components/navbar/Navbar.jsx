import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">Whats is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="relative">

      <div className="w-full absolute z-[7]">
        <div className="flex justify-between items-center flex-row max-w-[1200px] 
        max-auto pt-8 px-5">
          
          <div className="w-1/4">
            <a href="index.html">
              <img src={logo} alt='logo' className='w-[50px]'/>
            </a>
          </div>

          <div className="w-1/2 hidden md:flex justify-center">
            <div className="flex flex-row list-none space-x-8">
              <p className='p-0'><a href="#home" className='transition-all duration-300 ease-in-out text-white opacity-100'>Home</a></p>
              <p className='p-0'><a href="#home" className='transition-all duration-300 ease-in-out text-white opacity-50 hover:opacity-100'>About</a></p>
              <p className='p-0'><a href="#homes" className='transition-all duration-300 ease-in-out text-white opacity-50 hover:opacity-100'>Portfolio</a></p>
              <p className='p-0'><a href="#home" className='transition-all duration-300 ease-in-out text-white opacity-50 hover:opacity-100'>Services</a></p>
              <p className='p-0'><a href="#home" className='transition-all duration-300 ease-in-out text-white opacity-50 hover:opacity-100'>Contact</a></p>
            </div>
          </div>

          <div className="w-1/4 flex justify-end">
            <a href='#' className='transition-all duration-300 ease-in-out 
            text-white hidden md:inline-block py-[0.7rem] px-5 rounded-[30px]
             border border-white border-opacity-25 
            hover:border-white'>Hire Us</a>
          </div>

        </div>

        <div className="hidden">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
          )}
        </div>

      </div>

    </div>
  )
}

export default Navbar;
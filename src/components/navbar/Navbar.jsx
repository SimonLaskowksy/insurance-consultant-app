import React, { useEffect, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollData, setSrollData] = useState({
    y: 0,
    lastY: 0
  });
  const [showNav, setShowNav] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {

      const sections = document.querySelectorAll('section');
      let found = false;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 1000 && rect.bottom >= 500 && !found) {
          setTimeout(() => {
            setCurrentSection(section.id);
          }, 100);
          found = true;
        }
      });

      setSrollData(prevState => {
        return {
          y: window.scrollY,  
          lastY: prevState.y
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if(scrollData.y > 500 && scrollData.lastY < scrollData.y && !toggleMenu){
      setShowNav(false);
    } else {
      setShowNav(true);
    }

  }, [scrollData])

  return (
    <div className="relative">

      <div className="w-full top-0 z-[7] fixed bg-primary ease-in-out duration-1000"
      style={showNav ? {transform: "translateY(0%)"} : {transform: "translateY(-100%)"}}>
        <div className="flex justify-between items-center flex-row max-w-[1200px] 
        mx-auto py-6 px-5">
          
          <div className="w-1/4">
            <a href="index.html">
              <img src={logo} alt='logo' className='w-[50px]'/>
            </a>
          </div>

          <div className="mobile-hide w-1/2 hidden md:flex justify-center">
            <div className="flex flex-row list-none space-x-8">
              <p className='p-0'><a href="#home" className='transition-all duration-300 ease-in-out text-white' style={{ opacity: currentSection === 'home' ? 1 : 0.5 }}>Home</a></p>
              <p className='p-0'><a href="#offers" className='transition-all duration-300 ease-in-out text-white' style={{ opacity: currentSection === 'offers' ? 1 : 0.5 }}>Oferta</a></p>
              <p className='p-0'><a href="#services" className='transition-all duration-300 ease-in-out text-white' style={{ opacity: currentSection === 'services' ? 1 : 0.5 }}>Usługi</a></p>
              <p className='p-0'><a href="#why" className='transition-all duration-300 ease-in-out text-white' style={{ opacity: currentSection === 'why' ? 1 : 0.5 }}>O mnie</a></p>
              <p className='p-0'><a href="#testimonials" className='transition-all duration-300 ease-in-out text-white' style={{ opacity: currentSection === 'testimonials' ? 1 : 0.5 }}>Klienci</a></p>
              <p className='p-0'><a href="#faq" className='transition-all duration-300 ease-in-out text-white' style={{ opacity: currentSection === 'faq' ? 1 : 0.5 }}>Pytania</a></p>
              <p className='p-0'><a href="#cta" className='transition-all duration-300 ease-in-out text-white' style={{ opacity: currentSection === 'cta' ? 1 : 0.5 }}>Kontakt</a></p>
            </div>
          </div>

          <div className="mobile-hide w-1/4 flex justify-end">
            <a href='#' className='transition-all duration-300 ease-in-out 
            text-white hidden md:inline-block py-[0.7rem] px-5 rounded-[30px]
             border border-white border-opacity-25 
            hover:border-white'>Hire Us</a>
          </div>
          <div className='mobile-show absolute px-[30px] py-0 flex right-0 z-[9999]'>
            {toggleMenu
              ? <RiCloseLine color="#666666" size={27} onClick={() => setToggleMenu(false)} className='cursor-pointer text-[2rem]'/>
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} className='cursor-pointer text-[2rem]'/>}
          </div>
        </div>


        {/* {toggleMenu && ( */}
        <div className="mobile-menu py-[30px] px-0 fixed bg-white top-0 right-0 w-[380px] z-[9997]
        h-screen opacity-100"
        style={toggleMenu ? {
            transform: 'translate(0)',
            opacity: '1'
          } : {
            transform: 'translate(999px)',
            opacity: '0'
          }}>
          <div className="px-[30px] pt-[10px] pb-[50px] h-[calc(100vh-78px)] overflow-auto">
            <ul className="list-none p-0 m-0">
              <li className='p-0 list-none m-0'>
                <a href="#home" className='no-underline py-[6px] px-0 block text-[#666666] duration-300
               transition-all ease-in-out hover:text-primary'>Home
                </a>
              </li>
              <li className='p-0 list-none m-0'>
                <a href="#home" className='no-underline py-[6px] px-0 block text-[#666666] duration-300
               transition-all ease-in-out hover:text-primary'>About
                </a>
              </li>
              <li className='p-0 list-none m-0'>
                <a href="#home" className='no-underline py-[6px] px-0 block text-[#666666] duration-300
               transition-all ease-in-out hover:text-primary'>Portfolio
                </a>
              </li>
              <li className='p-0 list-none m-0'>
                <a href="#home" className='no-underline py-[6px] px-0 block text-[#666666] duration-300
               transition-all ease-in-out hover:text-primary'>Services
                </a>
              </li>
              <li className='p-0 list-none m-0'>
                <a href="#home" className='no-underline py-[6px] px-0 block text-[#666666] duration-300
               transition-all ease-in-out hover:text-primary'>Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* )} */}

      </div>
    </div>
  )
}

export default Navbar;
import React from 'react';
import Question from '../../components/question/Question';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const questionsData = [
  {
    title: 'What types of cases does your law firm handle?',
    text: 'Ut quis molestie ipsum, non imperdiet nisi. Praesent sollicitudun, enim vel leoretcongue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum. Praesent auctor tortor id mi hendrerit convallis.',
  },
  {
    title: 'What types of cases does your law firm handle?',
    text: 'Ut quis molestie ipsum, non imperdiet nisi. Praesent sollicitudun, enim vel leoretcongue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum. Praesent auctor tortor id mi hendrerit convallis.',
  },
  {
    title: 'What types of cases does your law firm handle?',
    text: 'Ut quis molestie ipsum, non imperdiet nisi. Praesent sollicitudun, enim vel leoretcongue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum. Praesent auctor tortor id mi hendrerit convallis.',
  },
  {
    title: 'What types of cases does your law firm handle?',
    text: 'Ut quis molestie ipsum, non imperdiet nisi. Praesent sollicitudun, enim vel leoretcongue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum. Praesent auctor tortor id mi hendrerit convallis.',
  },
  {
    title: 'What types of cases does your law firm handle?',
    text: 'Ut quis molestie ipsum, non imperdiet nisi. Praesent sollicitudun, enim vel leoretcongue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum. Praesent auctor tortor id mi hendrerit convallis.',
  },
  {
    title: 'What types of cases does your law firm handle?',
    text: 'Ut quis molestie ipsum, non imperdiet nisi. Praesent sollicitudun, enim vel leoretcongue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum. Praesent auctor tortor id mi hendrerit convallis.',
  },
]

const FAQ = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'slide',
      duration: 800,
    });
  }, [])

  return (
    <div className='py-16 md:py-20 px-0'>
      <div className='max-w-[1200px] mx-auto px-5'>
        <h2 className='text-[2rem] md:text-[2.5rem] leading-[1.3] text-dark
        text-center max-w-[400px] mx-auto !mb-[5.5rem] font-serif font-bold'
        data-aos="fade-up" data-aos-delay="0">
          Pytania które możesz mieć
        </h2>
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-10" id="faq">

          {questionsData.map(( item, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100} key={item + index}>
              <Question title={item.title} text={item.text} key={item.title + index}/>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default FAQ

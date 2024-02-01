import React from 'react';
import './offer.css'

const Offer = ({ text }) => {
  return (
    <li className="offer relative mb-[0.3rem] sm:mb-0 text-white pl-[2rem]
    before:content-[''] before:absolute before:left-0 before:top-[0.3rem]
    before:bg-contain before:bg-no-repeat before:w-[13px] before:h-[13px] bg-no-repeat">
      {text}
    </li>
  )
}

export default Offer;

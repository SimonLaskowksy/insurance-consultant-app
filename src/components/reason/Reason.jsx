import React from 'react';
import './reason.css'

const Reason = ({ text }) => {
  return (
    <li className="reason relative text-dark pl-8 before:content-['']
    before:absolute before:left-0 before:top-[0.1rem] before:bg-contain before:w-5
    before:h-5 before:bg-no-repeat">
      {text}
    </li>
  )
}

export default Reason;

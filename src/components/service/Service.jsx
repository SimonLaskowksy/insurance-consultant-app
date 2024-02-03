import React from 'react';

const Service = ({ title, text, imgUrl }) => {
  return (
    <div>
        <div className="mb-3.5 relative inline-block before:content-['']
        before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2
        before:w-8 before:h-8 before:rounded-full before:z-[-1] before:bg-secondary">
            <img src={imgUrl} alt="Icon" className='w-[4.6rem]'/>
        </div>
        <h2 className='text-lg mb-5 font-serif text-dark'>{title}</h2>
        <p className='text-gray'>
            {text}
        </p>
    </div>
  )
}

export default Service;

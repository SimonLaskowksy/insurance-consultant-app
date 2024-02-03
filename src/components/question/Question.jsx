import React from 'react';
import question from '../../assets/question.svg'

const Question = ({ title, text }) => {
  return (
    <div className='flex'>
            <span className="grow-0 shrink-0 basis-[50px] w-[50px] h-[50px]
            bg-primary rounded-full flex justify-center items-center mr-[30px]">
              <img src={question} alt="Question icon" />
            </span>
            <div>
              <h3 className='mb-5 fot-bold font-serif text-lg'>
                {title}
              </h3>
              <p className='text-gray mb-0'>
                {text}
              </p>
            </div>
          </div>
  )
}

export default Question;
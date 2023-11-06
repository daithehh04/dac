import React from 'react'

function Button({ text }) {
    return (
        <div className='md:w-[9.6875rem] flex justify-center items-center md:h-[3.02083rem] md:rounded-[2.23958rem] bg-[#000D10] md:px-[1.3rem] md:py-[1rem]'>
            <span className='subDescription !font-bold !text-[#fff]'>{text}</span>
        </div>
    )
}

export default Button
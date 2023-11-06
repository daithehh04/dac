import Image from 'next/image'
import React from 'react'

function TextnologyContent({ icon, text }) {
    return (
        <div className='flex flex-col md:w-[23.54167rem]'>
            <Image src={icon} alt='icon' quality={100} className='md:w-[5.78125rem] md:h-[5.78125rem]' />
            <p className='md:mt-[2.14rem] priDesc'>
                {text}
            </p>
        </div>
    )
}

export default TextnologyContent
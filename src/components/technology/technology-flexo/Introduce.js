import React from 'react'

function Introduce({dataIntro}) {
    return (
        <section className='md:pt-[5.57rem] pt-[6.4rem] max-md:px-[4.27rem] md:pr-[11.72rem] md:pl-[43.44rem] bg-[#F5F5F5]'>
            <h2 className='heading text-justify md:!tracking-[-0.17188rem] max-md:!tracking-[-0.34667rem] max-md:pb-[6.4rem]'>{dataIntro?.heading}</h2>
            <p className='md:py-[2.5rem] description text-justify !font-normal max-md:pb-[6.4rem]'>
                {dataIntro?.description}
            </p>
        </section>
    )
}

export default Introduce
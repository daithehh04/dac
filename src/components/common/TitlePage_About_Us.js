import React from 'react'
import Link from 'next/link'
function TitlePage_About_Us({lang,slugPage,titlePage}) {
  return (
    <div className='max-md:hidden'>
      <ul className='flex content pt-[3.8rem]'>
        {titlePage?.map((item,index)=>(
          <Link 
            href={`/${lang}/about-us/${slugPage[index]}`}
            key={index}
            className={`uppercase lg:text-[1.04167rem] md:text-[1.2rem] mr-[3.91rem] cursor-pointer }`}
          >
            {item}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default TitlePage_About_Us
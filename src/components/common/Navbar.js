"use client"
import React from 'react'
import SelectLang from '../lang/SelectLang'
import Image from 'next/image'
import logo from '@/assets/imgs/logo-h.svg'
import logoW from '@/assets/imgs/logo-w.svg'
import searchIcon from '@/assets/imgs/search-icon.svg'
import searchIconW from '@/assets/imgs/searchIcon-w.svg'
import barsIcon from '@/assets/imgs/bars-icon-b.svg'
import barsIconW from '@/assets/imgs/bars-icon-w.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar({ lang }) {
  const pathName = usePathname()
  let checkHome = false
  if (pathName === '/' || pathName === '/en' || pathName.startsWith('/service-products/')) {
    checkHome = true
  }
  const navLinks = [
    {
      link: 'VỀ CHÚNG TÔI',
      slug: 'about-us'
    },
    {
      link: 'THIẾT KẾ',
      slug: 'design'
    },
    {
      link: 'SẢN PHẨM DỊCH VỤ',
      slug: 'service-products'
    },
    {
      link: 'CÔNG NGHỆ',
      slug: 'technology/offset'
    },
    {
      link: 'TIN TỨC',
      slug: 'blog'
    },
    {
      link: 'TUYỂN DỤNG',
      slug: 'recruitment'
    },
    {
      link: 'LIÊN HỆ',
      slug: 'contact'
    },
  ]
  return (
    <nav className='absolute top-0 w-full navbar pt-[2.6rem] z-10'>
      <div className="content">
        <div className='flex items-center'>
          {checkHome ?
            <Link href={`/${lang}`}><Image src={logo} width={100} height={100} className='object-cover' alt='DAC' /></Link>
            : <Link href={`/${lang}`}><Image src={logoW} width={100} height={100} className='object-cover' alt='DAC' /></Link>
          }
          <div className='flex items-center ml-auto gap-[2vw] mr-[2.38vw]'>
            {navLinks.map((link, index) => (
              <Link className={` text-[1.04167vw] link ${checkHome ? 'text-black' : 'text-white'}`} key={index} href={`/${lang}/${link.slug}`}>{link.link}</Link>
            ))}
          </div>
          <SelectLang lang={lang} checkHome={checkHome} />
          {checkHome ? <Image src={searchIcon} width={50} height={50} alt='search' className='w-[1.2vw] h-[1.2vw] mr-[2.24vw] ml-[0.5vw]' /> :
            <Image src={searchIconW} width={50} height={50} alt='search' className='w-[1.2vw] h-[1.2vw] mr-[2.24vw] ml-[0.5vw]' />}
          <div className={`w-[3.4375vw] h-[3.4375vw] rounded-full grid item place-items-center ${checkHome ? 'bg-[#525252]' : 'bg-white'}`}>
            {checkHome ? <Image src={barsIconW} width={50} height={50} alt='bars' className='w-[1.4375vw] h-[1.4375vw]' /> :
              <Image src={barsIcon} width={50} height={50} alt='bars' className='w-[1.4375vw] h-[1.4375vw]' />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
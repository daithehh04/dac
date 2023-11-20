"use client"
import React, { useEffect, useRef, useState } from 'react'
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
import MenuMb from './MenuMb'
import { useMediaQuery } from 'react-responsive'

function Navbar({
  lang,
  dataProductList
}) {
  const [color, setColor] = useState('')
  const [bgColor, setBgColor] = useState('')
  const [checkHome, setCheckHome] = useState(false)
  const [shadow, setShadow] = useState('')
  const [logoHome, setLogoHome] = useState(logoW)
  const [checkScroll, setCheckScroll] = useState(false)
  const refMb = useRef()
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
  const handleOpenModal = () => {
    refMb?.current?.classList?.add('active')
  }
  const handleCloseModal = () => {
    refMb?.current?.classList?.remove('active')
  }
  const listPageBlackHeader = ['/', '/service-products/', '/en']

  const pathName = usePathname()
  useEffect(() => {
    setCheckHome(listPageBlackHeader.includes(pathName) || pathName.startsWith('/service-products/'))
  }, [pathName])


  useEffect(() => {
    const e = () => {
      if (window.scrollY > 50) {
        setColor('#000')
        setBgColor('#fff')
        setShadow('md:shadow-md')
        setLogoHome(logo)
        setCheckScroll(true)
      } else if ((listPageBlackHeader.includes(pathName) || pathName.startsWith('/service-products/'))) {
        setBgColor('')
        setColor('#000')
        setShadow('')
        setLogoHome(logoW)
        setCheckScroll(false)

      } else {
        setCheckScroll(false)
        setBgColor('')
        setShadow('')
        setColor('#fff')
        setLogoHome(logoW)
      }
    }
    window.addEventListener('scroll', e)
  }, [checkHome])

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navheader").style.top = "0";
        document.getElementById("navheader").style.backdropFilter = 'blur(4px)'
      } else {
        document.getElementById("navheader").style.top = "-100%";
        document.getElementById("navheader").style.backdropFilter = 'none'
      }
      if (currentScrollPos === 0) {
        document.getElementById("navheader").style.backdropFilter = 'none'
      }
      prevScrollpos = currentScrollPos;
    }
  }, [])
  const navLinks = [
    {
      link: 'VỀ CHÚNG TÔI',
      linkEn: 'ABOUT-US',
      slug: 'about-us/vision',
      slug2: 'about-us',
      listContent: [
        {
          name: 'Tầm nhìn - Sứ mệnh - Giá trị cốt lõi',
          nameEn: 'Vision - Mission - Core values',
          slug: 'vision'
        },
        {
          name: 'Chặng đường phát triển',
          nameEn: 'Development journey',
          slug: 'journey'
        },
        {
          name: 'Chứng chỉ và giải thưởng',
          nameEn: 'Certificates and awards',
          slug: 'prize'
        },
        {
          name: 'Sơ đồ tổ chức',
          nameEn: 'Organizational chart',
          slug: 'organize'
        }
      ]
    },
    {
      link: 'THIẾT KẾ',
      linkEn: 'DESIGN',
      slug: 'design'
    },
    {
      link: 'SẢN PHẨM DỊCH VỤ',
      linkEn: 'PRODUCTS AND SERVICES',
      slug: 'service-products',
      slug2: 'service-products',
      listContent: [
        {
          name: dataProductList?.[0]?.product_category?.info?.title,
          slug: dataProductList?.[0]?.product_category?.info?.featureProduct
        },
        {
          name: dataProductList?.[1]?.product_category?.info?.title,
          slug: dataProductList?.[1]?.product_category?.info?.featureProduct
        },
        {
          name: dataProductList?.[2]?.product_category?.info?.title,
          slug: dataProductList?.[2]?.product_category?.info?.featureProduct
        },
        {
          name: dataProductList?.[3]?.product_category?.info?.title,
          slug: dataProductList?.[3]?.product_category?.info?.featureProduct
        },
        {
          name: dataProductList?.[4]?.product_category?.info?.title,
          slug: dataProductList?.[4]?.product_category?.info?.featureProduct
        },
        {
          name: dataProductList?.[5]?.product_category?.info?.title,
          slug: dataProductList?.[5]?.product_category?.info?.featureProduct
        },
        {
          name: dataProductList?.[6]?.product_category?.info?.title,
          slug: dataProductList?.[6]?.product_category?.info?.featureProduct
        },
        {
          name: dataProductList?.[7]?.product_category?.info?.title,
          slug: dataProductList?.[7]?.product_category?.info?.featureProduct
        }
      ]
    },
    {
      link: 'CÔNG NGHỆ',
      linkEn: 'TECHNOLOGY',
      slug: 'technology/offset',
      slug2: 'technology',
      listContent: [
        {
          name: 'Công nghệ in Offset',
          nameEn: 'Offset printing technology',
          slug: 'offset'
        },
        {
          name: 'Công nghệ in Flexo',
          nameEn: 'Flexo printing technology',
          slug: 'flexo'
        },
        {
          name: 'Công nghệ in Ống đồng',
          nameEn: 'Gravure printing technology',
          slug: 'gravure'
        },
        {
          name: 'Công nghệ in Kỹ thuật số',
          nameEn: 'Digital printing technology',
          slug: 'digital'
        },
        {
          name: 'Giải pháp chống giả',
          nameEn: 'Anti-counterfeit solution',
          slug: 'other-printing'
        }
      ]
    },
    {
      link: 'TIN TỨC',
      linkEn: 'NEWS',
      slug: 'blog'
    },
    {
      link: 'TUYỂN DỤNG',
      linkEn: 'RECRUITMENT',
      slug: 'recruitment'
    },
    {
      link: 'LIÊN HỆ',
      linkEn: 'CONTACT',
      slug: 'contact'
    },
  ]

  return (
    <>
      <nav id='navheader' className={`bg-[${bgColor}] ${shadow} top-0 w-full fixed navbar md:pt-[1.3rem] md:pb-[1.3rem] pt-[12.27rem] z-10 ${isMobile && 'bg-transparent'}`}>
        <div className="content">
          <div className='flex items-center justify-between'>
            {checkHome ?
              <Link href={`/${lang}`}><Image src={logo} width={100} height={100} className='object-cover md:w-[7.91667rem] md:h-[4.21875rem] w-[18.4rem] h-[9.86667rem]' alt='DAC' /></Link>
              : <Link href={`/${lang}`}><Image src={logoHome} width={100} height={100} className='object-cover md:w-[7.91667rem] md:h-[4.21875rem] w-[18.4rem] h-[9.86667rem]' alt='DAC' /></Link>
            }
            <div className='flex items-center ml-auto gap-[2vw] mr-[2.38vw] max-md:hidden'>
              {navLinks.map((link, index) => (
                <Link className={`md:text-[1.24rem] lg:text-[1.04167rem] ${checkHome ? '!text-[#000]' : 'text-[#fff]'} link ${(checkScroll && !checkHome) && '!text-[#000]'} `} key={index} href={`/${lang}/${link.slug}`}>
                  {lang === 'vi' ? link?.link : link?.linkEn}
                </Link>
              ))}
            </div>
            <SelectLang lang={lang} color={color} checkHome={checkHome} />
            {checkHome ? <Image src={searchIcon} width={50} height={50} alt='search' className='w-[1.2vw] max-md:hidden h-[1.2vw] mr-[2.24vw] ml-[0.5vw]' /> :
              <Image src={searchIconW} width={50} height={50} alt='search' className='w-[1.2vw] max-md:hidden h-[1.2vw] mr-[2.24vw] ml-[0.5vw] ' />}
            <div onClick={handleOpenModal} className={`w-[10.4rem] h-[10.4rem] rounded-full grid md:hidden item place-items-center ${checkHome ? 'bg-[#525252]' : 'bg-white'}`}>
              {checkHome ? <Image src={barsIconW} width={50} height={50} alt='bars' className='w-[3.03125rem] h-[3.03125rem]' /> :
                <Image src={barsIcon} width={50} height={50} alt='bars' className='w-[3.03125rem] h-[3.03125rem]' />}
            </div>
          </div>
        </div>
      </nav>

      <div ref={refMb} className='fixed inset-0 md:hidden overflow-x-hidden overflow-y-auto w-full h-full bg-white !z-[199] nav-mobile' >
        <MenuMb
          data={navLinks}
          handleCloseModal={handleCloseModal}
          lang={lang}
        />
      </div>
    </>
  )
}

export default Navbar
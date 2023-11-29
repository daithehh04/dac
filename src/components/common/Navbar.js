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
import arrowUp from '@/assets/imgs/arrow_up.svg'
import { useMediaQuery } from 'react-responsive'
import scrollDown from '@/hooks/scrollDown'

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
  const bannerRef = useRef()
  const handleOpenModal = () => {
    refMb?.current?.classList?.add('active')
  }
  const handleCloseModal = () => {
    refMb?.current?.classList?.remove('active')
  }
  const listPageBlackHeader = ['/', '/san-pham-dich-vu/','/en/san-pham-dich-vu/', '/en']

  const pathName = usePathname()
  useEffect(() => {
    setCheckHome(listPageBlackHeader.includes(pathName) || pathName.startsWith('/san-pham-dich-vu/') || pathName.startsWith('/en/san-pham-dich-vu/'))
  }, [pathName])

  useEffect(() => {
    const e = () => {
      if (window.scrollY > 50) {
        setColor('#000')
        setBgColor('#fff')
        setShadow('md:shadow-md')
        setLogoHome(logo)
        setCheckScroll(true)
      } else if ((listPageBlackHeader.includes(pathName) || pathName.startsWith('/san-pham-dich-vu/') || pathName.startsWith('/en/san-pham-dich-vu/'))) {
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
    let prevScrollpos = window.scrollY;
    window.onscroll = function () {
      const banner_home = document.querySelector('.banner_home')
      const arrow_up = document.querySelector('.arrow_up')
      
      let currentScrollPos = window.scrollY;
      if (prevScrollpos >= currentScrollPos) {
        document.getElementById("navheader").style.top = "0";
        document.getElementById("navheader").style.backdropFilter = 'blur(4px)'
        document.getElementById("navheader").style.webkitBackdropFilter = 'blur(4px)';
      } else {
        document.getElementById("navheader").style.top = "-100%";
        document.getElementById("navheader").style.backdropFilter = 'none'
      }
      if (currentScrollPos === 0) {
        document.getElementById("navheader").style.backdropFilter = 'none'
      }

      if(banner_home && (currentScrollPos > banner_home.offsetHeight)){
          arrow_up.style.transform = 'translateY(0)'
      }else{
        arrow_up.style.transform = 'translateY(200%)'
      }
      prevScrollpos = currentScrollPos;
    }
  }, [])
  const navLinks = [
    {
      link: 'VỀ CHÚNG TÔI',
      linkEn: 'ABOUT-US',
      slug: 've-chung-toi/tam-nhin',
      slug2: 've-chung-toi',
      listContent: [
        {
          name: 'Tầm nhìn - Sứ mệnh - Giá trị cốt lõi',
          nameEn: 'Vision - Mission - Core values',
          slug: 'tam-nhin'
        },
        {
          name: 'Chặng đường phát triển',
          nameEn: 'Development journey',
          slug: 'chang-duong-phat-trien'
        },
        {
          name: 'Chứng chỉ và giải thưởng',
          nameEn: 'Certificates and awards',
          slug: 'chung-nhan'
        },
        {
          name: 'Sơ đồ tổ chức',
          nameEn: 'Organizational chart',
          slug: 'so-do-to-chuc'
        }
      ]
    },
    {
      link: 'THIẾT KẾ',
      linkEn: 'DESIGN',
      slug: 'thiet-ke'
    },
    {
      link: 'SẢN PHẨM DỊCH VỤ',
      linkEn: 'PRODUCTS AND SERVICES',
      slug: 'san-pham-dich-vu',
      slug2: 'san-pham-dich-vu',
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
      slug: 'cong-nghe/in-offset',
      slug2: 'cong-nghe',
      listContent: [
        {
          name: 'Công nghệ in Offset',
          nameEn: 'Offset printing technology',
          slug: 'in-offset'
        },
        {
          name: 'Công nghệ in Flexo',
          nameEn: 'Flexo printing technology',
          slug: 'in-flexo'
        },
        {
          name: 'Công nghệ in Ống đồng',
          nameEn: 'Gravure printing technology',
          slug: 'in-ong-dong'
        },
        {
          name: 'Công nghệ in Kỹ thuật số',
          nameEn: 'Digital printing technology',
          slug: 'in-kts'
        },
        {
          name: 'Giải pháp chống giả',
          nameEn: 'Anti-counterfeit solution',
          slug: 'khac'
        }
      ]
    },
    {
      link: 'TIN TỨC',
      linkEn: 'NEWS',
      slug: 'tin-tuc-su-kien'
    },
    {
      link: 'TUYỂN DỤNG',
      linkEn: 'RECRUITMENT',
      slug: 'tuyen-dung'
    },
    {
      link: 'LIÊN HỆ',
      linkEn: 'CONTACT',
      slug: 'lien-he'
    },
  ]

  return (
    <>
      <nav id='navheader'  className={`bg-[${bgColor}] ${shadow} top-0 w-full fixed navbar md:pt-[1.3rem] md:pb-[1.3rem] pt-[12.27rem] z-10 ${isMobile && 'bg-transparent'}`}>
        <div className="content">
          <div className='flex items-center justify-between'>
            {checkHome ?
              <Link href={`/${lang}`}><Image src={logo} width={100} height={100} className='object-cover md:w-[7.91667rem] md:h-[4.21875rem] w-[18.4rem] h-[9.86667rem]' alt='DAC' /></Link>
              : <Link href={`/${lang}`}><Image src={logoHome} width={100} height={100} className='object-cover md:w-[7.91667rem] md:h-[4.21875rem] w-[18.4rem] h-[9.86667rem]' alt='DAC' /></Link>
            }
            <div className='flex items-center ml-auto gap-[2vw] mr-[2.38vw] max-md:hidden'>
              {navLinks.map((item, index) => (
                <div key={index} className='relative text_link_nav'>
                  {
                    (item?.listContent  && index !== 2 ) ?
                    (
                        <span
                            className={`text-[#000] text-[1.04167rem]  ${checkHome ? '!text-[#000]' : 'text-[#fff]'} link ${(checkScroll && !checkHome) && '!text-[#000]'} `}
                            key={index}>{lang === 'vi' ? item?.link : item?.linkEn}
                        </span>
                    )
                    :
                    (
                        <Link
                            onClick={handleCloseModal}
                            className={`text-[#000] mb-[2.67rem] text-[1.04167rem] ${checkHome ? '!text-[#000]' : 'text-[#fff]'} link ${(checkScroll && !checkHome) && '!text-[#000]'} `}
                            href={`/${lang}/${item?.slug}` || '/'}>{lang === 'vi' ? item?.link : item?.linkEn}
                        </Link>
                    )
                  }
                  {
                                item?.listContent && (
                                    <div
                                        className='flex flex-col menu_dropdown  rounded-br-[2.61198rem] px-[1rem] py-[1rem] absolute'
                                    >
                                        {item?.listContent?.map((mbItem, index) => {
                                            return (
                                                <Link
                                                    onClick={handleCloseModal}
                                                    href={`/${lang}/${item?.slug2}/${mbItem?.slug}` || '/'}
                                                    key={index}
                                                    dangerouslySetInnerHTML={{ __html: `${mbItem?.nameEn ? (lang === 'vi' ? mbItem?.name : mbItem?.nameEn) : mbItem.name}` }}
                                                    className='text-[#888888] uppercase text_hover whitespace-nowrap text_product_item_nav text-[1.04167rem]  mb-[0.5rem]'>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )
                    }
                </div>
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
      <div ref={bannerRef}></div>

      <div ref={refMb} className='fixed inset-0 md:hidden overflow-x-hidden overflow-y-auto w-full h-full bg-white !z-[199] nav-mobile' >
        <MenuMb
          data={navLinks}
          handleCloseModal={handleCloseModal}
          lang={lang}
        />
      </div>

      <div onClick={() => scrollDown(bannerRef, 'start')} className='fixed arrow_up z-50 bottom-[2rem] right-[3.17rem]'>
          <Image src={arrowUp} alt='arrow' className='md:w-[2.29167rem] md:h-[2.13542rem] w-[4.3rem] h-[4.3rem]' />
      </div>
    </>
  )
}

export default Navbar
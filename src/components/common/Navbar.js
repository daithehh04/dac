"use client"
import React, { useRef, useState } from 'react'
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

function Navbar({ lang }) {
  const [openModal, setOpenModal] = useState(false)
  const refMb = useRef()
  const handleOpenModal = () => {
    refMb?.current?.classList?.add('active')
  }
  const handleCloseModal = () => {
    refMb?.current?.classList?.remove('active')
  }

  const pathName = usePathname()
  let checkHome = false
  if (pathName === '/' || pathName === '/en' || pathName.startsWith('/service-products/')) {
    checkHome = true
  }
  const navLinks = [
    {
      link: 'VỀ CHÚNG TÔI',
      slug: 'about-us/vision',
      slug2: 'about-us',
      listContent: [
        {
          name: 'Tầm nhìn - Sứ mệnh - Giá trị cốt lõi',
          slug: 'vision'
        },
        {
          name: 'Chặng đường phát triển',
          slug: 'journey'
        },
        {
          name: 'Chứng chỉ và giải thưởng',
          slug: 'prize'
        },
        {
          name: 'Sơ đồ tổ chức',
          slug: 'organize'
        }
      ]
    },
    {
      link: 'THIẾT KẾ',
      slug: 'design'
    },
    {
      link: 'SẢN PHẨM DỊCH VỤ',
      slug: 'service-products',
      slug2: 'service-products',
      listContent: [
        {
          name: 'Bao bì thuốc lá',
          slug: 'a'
        },
        {
          name: 'Bao bì Thực phẩm',
          slug: 'a'
        },
        {
          name: 'Bao bì dược mỹ phẩm',
          slug: 'a'
        },
        {
          name: 'Bao bì hàng tiêu dùng',
          slug: 'a'
        },
        {
          name: 'Bao bì Bia rượu nước giải khát',
          slug: 'a'
        },
        {
          name: 'Bao bì nông sản',
          slug: 'a'
        },
        {
          name: 'Thương mại &Vật tư ngành in',
          slug: 'a'
        },
        {
          name: 'Cho thuê văn phòng',
          slug: 'a'
        }
      ]
    },
    {
      link: 'CÔNG NGHỆ',
      slug: 'technology/offset',
      slug2: 'technology',
      listContent: [
        {
          name: 'Công nghệ in Offset',
          slug: 'offset'
        },
        {
          name: 'Công nghệ in Flexo',
          slug: 'flexo'

        },
        {
          name: 'Công nghệ in Ống đồng',
          slug: 'gravure'

        },
        {
          name: 'Công nghệ in Kỹ thuật số',
          slug: 'digital'

        },
        {
          name: 'Giải pháp chống giả',
          slug: 'other-printing'

        }
      ]
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
    <>
      <nav className='absolute top-0 w-full navbar md:pt-[2.6rem] pt-[12.27rem] z-10 '>
        <div className="content">
          <div className='flex items-center justify-between'>
            {checkHome ?
              <Link href={`/${lang}`}><Image src={logo} width={100} height={100} className='object-cover md:w-[7.91667rem] md:h-[4.21875rem] w-[18.4rem] h-[9.86667rem]' alt='DAC' /></Link>
              : <Link href={`/${lang}`}><Image src={logoW} width={100} height={100} className='object-cover md:w-[7.91667rem] md:h-[4.21875rem] w-[18.4rem] h-[9.86667rem]' alt='DAC' /></Link>
            }
            <div className='flex items-center ml-auto gap-[2vw] mr-[2.38vw] max-md:hidden'>
              {navLinks.map((link, index) => (
                <Link className={`md:text-[1.24rem] lg:text-[1.04167rem] link ${checkHome ? 'text-black' : 'text-white'}`} key={index} href={`/${lang}/${link.slug}`}>{link.link}</Link>
              ))}
            </div>
            <SelectLang lang={lang} checkHome={checkHome} />
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
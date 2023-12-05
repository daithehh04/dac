'use client'
import React, { useEffect, useRef, useState } from 'react'
import Banner from './Banner'
import { useQuery } from '@apollo/client'
import { DATA_NEWS_WITH_SEARCH_AND_CATEGORY } from '@/graphql/news-blog/query'
import BlogItem from './BlogItem'
import { useMediaQuery } from 'react-responsive'
import useDebounce from '@/hooks/useDebounce'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
function Blog({ lang, dataBlog,slug }) {
    let language = lang?.toUpperCase()
    const [activePage, setActivePage] = useState(0)
    const [text, setText] = useState("")
    const [number, setNumber] = useState(0)
    const [dataNew, setDataNew] = useState([])
    const textSearch = useDebounce(text, 500)
    const pathName = usePathname()
    const eleRef = useRef()
    const seeMoreRef = useRef()
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const { data, refetch, loading } = useQuery(DATA_NEWS_WITH_SEARCH_AND_CATEGORY, {
        variables: {
            language,
            offset: 0,
            size: isMobile ? 3 : 8,
            text: textSearch,
            term:slug
        }
    })
    useEffect(() => {
        if(text !== ""){
            eleRef?.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }, [activePage, textSearch])
    ///////////////////////////////////////////// handle click PC//////////////////////////////////////////

    function handleInput(e) {
        setText(e.target.value)
        setNumber(0)
    }
    const handleChangePage = (index) => {
        setActivePage(index)
        refetch({
            offset: index * 8,
            size: 8
        })
    }
    ///////////////////////////////////////////// handle click mobile//////////////////////////////////////////
    const handleClick = () => {
        setNumber(number + 1)
    }

    useEffect(() => {
        isMobile && refetch({
            offset: number * 3,
            size: 3,
            text: textSearch
        }).then(response => {
            if (number === Math.floor(response.data?.posts?.pageInfo?.offsetPagination?.total / 3) && seeMoreRef?.current) {
                seeMoreRef.current.style.display = 'none'
            } else {
                seeMoreRef.current.style.display = 'block'
            }
            if (textSearch) {
                setDataNew(response.data?.posts?.nodes)
            } else {
                setDataNew([...response.data?.posts?.nodes])
            }

            if (number > 0 && (textSearch === '' || textSearch)) {
                setDataNew([...dataNew, ...response.data?.posts?.nodes])
            }
        })
    }, [number, textSearch])

    const allNews = isMobile ? dataNew : data?.posts?.nodes
    const pageInfo = data?.posts?.pageInfo?.offsetPagination?.total
    const totalPage = Math.ceil(pageInfo / 8)


    // list category
    const listCategoryNews = [
        {
            nameVi:'Con người app',
            nameEn:'APP people',
            slug:'con-nguoi-app'
        },
        {
            nameVi:'dành cho nhà đầu tư',
            nameEn:'Investor',
            slug:'nha-dau-tu'
        },
        {
            nameVi:'dành cho doanh nghiệp',
            nameEn:'Customer',
            slug:'khach-hang'
        },
        {
            nameVi:'Tin tức khác',
            nameEn:'Others',
            slug:'khac'
        },
    ]
    return (
        <>
            <Banner dataBanner={dataBlog} />
            <section ref={eleRef} className='md:px-[4.17rem] blog_news md:pt-[3.13rem] md:pb-[2.97rem] max-md:flex flex-col-reverse'>
                <span ref={seeMoreRef} onClick={handleClick} className='md:hidden text-[4.26667rem] text-[#00A84F] leading-[116.662%] underline text-center mb-[8.1rem] mt-[2rem]'>Xem thêm</span>
                    <div className='flex md:mb-[5.21rem]'>
                        {
                            listCategoryNews?.map((item,index)=>(
                                <Link key={index} href={`/${lang}/tin-tuc-su-kien/${item?.slug}`}>
                                    <h2 className={`uppercase lg:text-[1.04167rem] md:text-[1.2rem] mr-[3.91rem] cursor-pointer ${pathName?.endsWith(item?.slug) ? 'text-[#00A84F]' : 'text-[#444]'}`}>{lang === 'vi' ? item?.nameVi : item?.nameEn}</h2>
                                </Link>
                            ))
                        }
                    </div>
                <div className='grid md:grid-cols-4 md:gap-x-[2.6rem] md:gap-y-[4.43rem] max-md:px-[4.27rem]'>
                    {
                        allNews?.map((item, index) => (
                            <BlogItem slug={slug} lang={lang} key={index} data={item} />
                        )
                        )
                    }
                </div>
                {/* input search */}
                <div className='searchTextBlog flex justify-center md:mt-[2.97rem] md:mb-[1rem] max-md:pt-[7.73rem] max-md:pb-[4.8rem]'>
                    <input onChange={handleInput} placeholder={`${lang === 'vi' ? 'Tìm Kiếm' : 'Search'}`} className='md:px-[0.8rem] md:pb-[0.25rem] md:w-[10.625rem] w-[42.4576rem] md:h-[2.1875rem] h-[8.8rem] md:rounded-[2.23958rem] rounded-[11.46667rem] bg-[#F0F0F0]' />
                </div>
                {/* pagination */}
                <div className='flex justify-center max-md:hidden items-center relative md:mt-[1rem]'>
                    {Array.from({ length: totalPage }, (_, index) => (
                        <div
                            key={index}
                            onClick={() => handleChangePage(index)}
                            className={`${totalPage > 1 ? 'cursor-pointer md:w-[1.125rem] md:h-[2.125rem]' : 'hidden'}`}
                        >
                            <span className={`${activePage === index ? 'text-[#00A84F]' : 'text-[#444]'}`}>{index + 1}</span>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default Blog

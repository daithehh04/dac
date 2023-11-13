'use client'
import React, { useEffect, useRef, useState } from 'react'
import Banner from './Banner'
import { useQuery } from '@apollo/client'
import { DATA_BY_SEARCH_TEXT, GET_ALL_NEWS } from '@/graphql/news-blog/query'
import BlogItem from './BlogItem'
function Blog({lang}) {
    let language = lang?.toUpperCase()
    const [activePage, setActivePage] = useState(0)
    const [text,setText] = useState(null)
    const eleRef = useRef()
    const { data, refetch, loading } = useQuery(GET_ALL_NEWS, {
        variables: {
          language,
          offset: 0,
          size: 8,
        }
      })
  useEffect(() => {
    eleRef?.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [activePage])
  function handleInput(e){
    setTimeout(()=>{
        setText(e.target.value)
    },1000)
  }
  const resultSearch = useQuery(DATA_BY_SEARCH_TEXT, {
    variables: {
        language,
        text: text,
        offset:0,
        size:8
    }
  })
  const handleChangePage = (index) => {
    setActivePage(index)
    if(text === null){
        refetch({
          offset: index * 2,
          size: 8
        })
    }else{
        resultSearch?.refetch({
            text: text,
            offset: index * 2,
            size: 8
        })
    }
  }
  const allNews = data?.posts?.nodes
  const pageInfo = resultSearch?.data ? resultSearch?.data?.posts?.pageInfo?.offsetPagination?.total : data?.posts?.pageInfo?.offsetPagination?.total
  const totalPage = Math.ceil(pageInfo / 8)
    return (
        <>
            <Banner />
            <section className='md:px-[4.17rem] md:pt-[8.28rem] md:pb-[2.97rem] max-md:flex flex-col-reverse'>
                <div className='grid md:grid-cols-4 md:gap-x-[2.6rem] md:gap-y-[4.43rem] max-md:px-[4.27rem]'>
                    {
                        resultSearch?.data && (text !== '' || text !== null) &&  resultSearch?.data?.posts?.nodes?.map((item,index)=>(
                            <BlogItem lang={lang} key={index} data={item} />
                        ))
                    }
                    {
                        (text === null || text === '' || (resultSearch?.data?.posts?.nodes && resultSearch?.data?.posts?.nodes?.length === 0 )) && 
                            allNews?.map((item, index) =>(
                                    <BlogItem lang={lang} key={index} data={item} />
                                )
                            )
                    }
                </div>
                {/* input search */}

                <div className='searchTextBlog flex justify-center md:mt-[2.97rem] md:mb-[1rem] max-md:pt-[7.73rem] max-md:pb-[4.8rem]'>
                    <input onChange={handleInput} placeholder='Tim Kiem' className='md:px-[0.8rem] md:w-[10.625rem] w-[42.4576rem] md:h-[2.1875rem] h-[8.8rem] md:rounded-[2.23958rem] rounded-[11.46667rem] bg-[#F0F0F0]' />
                </div>
                {/* pagination */}
                <div className='flex justify-center items-center relative md:mt-[1rem]'>
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

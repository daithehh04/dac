import React from 'react'
import item1 from '@/assets/imgs/BlogItem1.png'
import item2 from '@/assets/imgs/BlogItem2.png'
import item3 from '@/assets/imgs/BlogItem3.png'
import item4 from '@/assets/imgs/BlogItem4.png'
import item5 from '@/assets/imgs/BlogItem5.png'
import item6 from '@/assets/imgs/BlogItem6.png'
import item7 from '@/assets/imgs/BlogItem7.png'
import item8 from '@/assets/imgs/BlogItem8.png'
import BlogItem from './BlogItem'
function ListBlog() {
    const data = [
        {
            image: item1,
            title: 'Tieu de 1',
            desc: '25/08/2023'
        },
        {
            image: item2,
            title: 'Tieu de 2',
            desc: '25/08/2023'
        },
        {
            image: item3,
            title: 'Tieu de 3',
            desc: '25/08/2023'
        },
        {
            image: item4,
            title: 'Tieu de 4',
            desc: '25/08/2023'
        },
        {
            image: item5,
            title: 'Tieu de 5',
            desc: '25/08/2023'
        },
        {
            image: item6,
            title: 'Tieu de 6',
            desc: '25/08/2023'
        },
        {
            image: item7,
            title: 'Tieu de 7',
            desc: '25/08/2023'
        },
        {
            image: item8,
            title: 'Tieu de 8',
            desc: '25/08/2023'
        },
    ]
    return (
        <section className='md:px-[4.17rem] md:pt-[8.28rem] md:pb-[2.97rem]'>
            <div className='md:grid grid-cols-4 md:gap-x-[2.6rem] md:gap-y-[4.43rem]'>
                {data?.map((item, index) => (
                    <BlogItem key={index} image={item?.image} title={item?.title} desc={item?.desc} />
                ))}
            </div>
            {/* input search */}

            <div className='searchTextBlog flex justify-center md:mt-[2.97rem] md:mb-[1rem]'>
                <input placeholder='Tim Kiem' className=' md:w-[10.625rem] md:h-[2.1875rem] md:rounded-[2.23958rem] bg-[#F0F0F0]' />
            </div>
        </section>
    )
}

export default ListBlog

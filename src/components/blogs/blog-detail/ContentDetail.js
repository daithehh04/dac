'use client'
import Image from 'next/image'
import image1 from '@/assets/imgs/BlogDetailImg1.png'
import image2 from '@/assets/imgs/BlogDetailImg2.png'
import image3 from '@/assets/imgs/BlogDetailImg3.png'
import item1 from '@/assets/imgs/BlogItem1.png'
import item2 from '@/assets/imgs/BlogItem2.png'
import item3 from '@/assets/imgs/BlogItem3.png'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
function ContentDetail() {
    const data = {
        heading: 'Chuỗi sự kiện chào mừng 60 năm ngày thành lập Công ty Cổ phần Bao bì và In nông nghiệp (1963-2023), ngày 15/3/2023',
        listContent: [
            {
                headingContent: '60 năm thành lập và phát triển',
                content: 'Về dự lễ kỷ niệm 60 năm ngày thành lập Công ty, có toàn bộ các thế hệ Cán bộ, viên chức của Công ty qua từng thời kỳ. Ban lãnh đạo Công ty có Ông Nguyễn Thành Nam – Chủ tịch Hội đồng quản trị; Ông Lê Duy Toàn – Tổng giám đốc Công ty; các ông/bà là Phó Tổng giám đốc, phụ trách các đơn vị và toàn thể hơn 700 Cán bộ Công nhân viên tại Công ty cùng tham dự.Trải qua 60 năm thành lập và phát triển, Công ty Cổ phần Bao bì và In nông nghiệp dưới sự lãnh đạo và định hướng của các cấp Lãnh đạo; sự nỗ lực phấn đấu của toàn bộ các thế hệ Công nhân viên trong quá trình sản xuất, làm việc; Công ty đã đã gặt hái được rất nhiều thành công, nhiều năm liền nằm trong Top 10 các Công ty sản xuất Bao bì tại khu vực miền Bắc và tạo được uy tín, sự tin tưởng đối với các Khách hàng của Công ty, … Thành tích đáng tự hào đó là nhờ công đóng góp của lớp lớp các thế hệ Cán bộ Công nhân viên đã cống hiến, làm việc tại Công ty.',
                gallery: [
                    {
                        image: image1
                    }
                ]
            },
            {
                headingContent: 'Chuỗi hoạt động kỷ niệm ',
                content: 'Trong buổi lễ kỷ niệm, dưới mái nhà chung APP, Công ty vinh dự và vui mừng được đón các ông/bà nguyên lãnh đạo, cán bộ viên chức qua các thời kỳ để được tri ân và nói lời cảm ơn tới các đồng chí cán bộ viên chức đã từng công tác tại Công ty. Nhân dịp kỷ niệm 60 năm ngày Thành lập Công ty, Công ty tổ chức các cuộc thi văn nghệ, thể thao thi đua và tuyên dương, khen thưởng các Cán bộ Công nhân viên có thành tích làm việc xuất sắc trong năm 2022. Trải qua một chuỗi sự kiện phong trào phát động suốt 1 năm của Công đoàn Công ty để chào mừng 60 năm ngày thành lập, 1 tháng lên chương trình và chuẩn bị cho ngày kỷ niệm 15/3 của toàn bộ Cán bộ Công nhân viên, ngày kỷ niệm 60 năm thành lập Công ty đã thành công tốt đẹp.',
                gallery: [
                    {
                        image: image2
                    },
                    {
                        image: image3
                    }
                ]
            },
            {
                content: 'Có thể nói, trong suốt hành trình 60 năm của mình, tập thể APP đã sát cánh cùng nhau để liên tục lập nên những kỳ tích về các sản phẩm, dịch vụ để phục vụ tới Khách hàng.',
            }
        ],
        otherBlogs: [
            {
                image: item1,
                title: 'Tieu de 1'
            },
            {
                image: item2,
                title: 'Tieu de 2'
            },
            {
                image: item3,
                title: 'Tieu de 3'
            },
            {
                image: item3,
                title: 'Tieu de 3'
            },
            {
                image: item3,
                title: 'Tieu de 3'
            }
        ]
    }
    return (
        <section>
            <div className='flex flex-col md:pt-[4.11rem] md:pb-[6.25rem]'>
                {/* Text heading */}
                <div className='flex justify-end md:px-[12rem] md:h-[21rem]'>
                    <h2 className='heading md:w-[44.84375rem] line-clamp-5 md:tracking-[-0.1375rem]'>{data?.heading}</h2>
                </div>
                <div className='line-detail'></div>
                {data?.listContent?.map((item, index) => (
                    <div key={index}>
                        <div className='flex md:px-[12rem]'>
                            <h2 className='heading md:w-[31.40625rem]'>{item?.headingContent}</h2>
                            <div>
                                <p className='description !font-normal md:!tracking-[-0.02708rem] md:!leading-[1.2] md:w-[44.47917rem] md:mb-[3rem]'>{item?.content}</p>
                                <div className='flex gap-[2.6rem]'>
                                    {item?.gallery?.map((gallery, index) => {
                                        if (item?.gallery?.length < 2) {
                                            return (<Image key={index} src={gallery?.image} alt='img' quality={100} className='md:w-[44.53125rem] md:h-[29.73958rem] object-cover' />)
                                        } else {
                                            return (<Image key={index} src={gallery?.image} alt='img' quality={100} className='md:w-[20.98958rem] md:h-[14.01042rem] object-cover' />)
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        {index !== data?.listContent?.length - 1 && <div className='line-detail'></div>}
                    </div>
                ))}
            </div>
            <div className='md:pr-[4.17rem] md:pl-[1.57rem] md:pb-[2.67rem] flex overflow-x-auto gap-[2.6rem]'>
                <Swiper className="mySwiper swiperBlogDetail" slidesPerView={3}>
                    {data?.otherBlogs?.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <Image src={blog?.image} quality={100} alt='img' className='md:w-full md:h-[19.89583rem] object-cover' />
                            <p className='description !font-normal md:mt-[2.08rem] flex justify-center'>{blog?.title}</p>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    )
}

export default ContentDetail

import Image from 'next/image'
import React from 'react'
import organizationChart from '@/assets/imgs/organizationChart.png'

function Solution() {
    const data = [
        {
            title: 'Giải quyết ĐA DẠNG vấn đề trong quản lý sản phẩm',
            listInfo: [
                {
                    text: 'Hàng giả, hàng nhái'
                },
                {
                    text: 'Bảo hành sản phẩm'
                },
                {
                    text: 'Quản lý đuờng đi sản phẩm, tràn hàng lấn tuyến phân phối'
                },
                {
                    text: 'Gian lận tại kênh phân phối'
                }
            ]
        },
        {
            title: 'Số hóa hoạt động marketing',
            listInfo: [
                {
                    text: 'Kết nối trực tiếp doanh nghiệp - nhà phân phối - người tiêu dùng'
                },
                {
                    text: 'Triển khai chương trình khuyến mại cho người tiêu dùng & đại lý ngay trên sản phẩm'
                },
                {
                    text: 'Thu thập dữ liệu khách hàng quét mã theo thời gian thực'
                }
            ]
        },
        {
            title: 'Tích hợp dễ dàng - Tiết kiệm chi phí',
            listInfo: [
                {
                    text: 'Các giải pháp dễ dàng tùy biến, sử dụng độc lập hoặc tích hợp trên cùng 1 con tem theo nhu cầu của doanh nghiêp, nhờ vậy giúp tiết kiệm chi phí và vận hành hiệu quả hơn.'
                }
            ]
        }
    ]
    return (
        <section className='md:pt-[3.07rem] md:pb-[5.73rem]'>
            <h2 className='heading text-center md:mb-[1.87rem] md:pl-[10.43rem] md:pr-[12.03rem] md:h-[12.03125rem]'>
                Bộ giải pháp toàn diện cho doanh nghiệp sản xuất và phân phối
            </h2>
            <div className='md:pl-[5.78rem] md:pr-[11.67rem] relative'>
                <Image src={organizationChart} alt='image' quality={100} width={1000} height={1000} className='md:w-[73.75rem] object-cover md:h-[34.89583rem] absolute left-0 z-[-1]' />
                <div className='flex flex-col items-end md:pt-[1.5rem]'>
                    {data?.map((item, index) => (
                        <div key={index} className='description !leading-[1.2] md:w-[39.03125rem] md:mb-[2.19rem]'>
                            <p>
                                {item?.title}
                            </p>
                            <ul className='md:pl-[1.5rem]'>
                                {item?.listInfo?.map((item2, index) => (
                                    <li className={`!font-normal ${index === item?.listInfo?.length - 1 ? '' : 'list-disc'}`} key={index}>{item2?.text}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Solution
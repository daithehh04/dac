import React from 'react'
import prd1 from '@/assets/imgs/prd1.png'
import prd2 from '@/assets/imgs/prd2.png'
import prd3 from '@/assets/imgs/prd3.png'
import prd4 from '@/assets/imgs/prd4.png'
import prd5 from '@/assets/imgs/prd5.png'
import prd6 from '@/assets/imgs/prd6.png'
import prd7 from '@/assets/imgs/prd7.png'
import prd8 from '@/assets/imgs/prd8.png'
import ProductItem from './ProductItem'
import Link from 'next/link'
function Product() {
    const data = [
        {
            image: prd1,
            text: 'Bao bì thuốc lá',
            title: 'Bao thuốc lá thăng long',
            info: [
                {
                    name: 'Chất liệu:',
                    infoName: 'Ivory 220 Gsm'
                },
                {
                    name: 'Kiểu dáng:',
                    infoName: 'Compact'
                },
                {
                    name: 'Hiệu ứng:',
                    infoName: 'Bóng gốc nước, bóng sần cục bộ, bế nổi'
                },
                {
                    name: 'Công nghệ in:',
                    infoName: 'Offset/Flexo'
                }

            ],
            listImageFeature: [
                {
                    image: prd1
                },
                {
                    image: prd2
                },
                {
                    image: prd3
                }

            ],
            otherTitle: 'Các mẫu thuốc lá khác',
            listImageOther: [
                {
                    image: prd1
                },
                {
                    image: prd2
                },
                {
                    image: prd3
                },
                {
                    image: prd4
                },
                {
                    image: prd5
                },
                {
                    image: prd6
                }
            ]
        },
        {
            image: prd2,
            text: 'Bao bì dược phẩm'
        },
        {
            image: prd3,
            text: 'Bao bì dược mỹ phẩm'
        },
        {
            image: prd4,
            text: 'Bao bì hàng tiêu dùng'
        },
        {
            image: prd5,
            text: 'Bao bì bia rượu nước giải khát'
        },
        {
            image: prd6,
            text: 'Bao bì nông sản'
        },
        {
            image: prd7,
            text: 'Thương mại & vật tư ngành in'
        },
        {
            image: prd8,
            text: 'Cho thuê văn phòng'
        }
    ]
    return (
        <section>
            <div className='md:pt-[5.1rem] md:pl-[11.67rem] md:pr-[12.03rem] md:pb-[6.56rem] pb-[9rem] flex justify-between max-md:flex-col max-md:px-[4.27rem]'>
                <h2 className='heading md:w-[45.5rem] max-md:py-[8.33rem]'>Sản phẩm dịch vụ</h2>
                <div className='flex flex-col md:w-[28.80208rem] md:text-[1.35417rem] text-[4.26667rem] leading-[1.2] md:tracking-[-0.09479rem] text-[#444] '>
                    <p>Với tiêu chí <span className='font-bold'>“CHẤT LƯỢNG - SỐ LƯỢNG - TIẾN ĐỘ - GIÁ CẢ”</span> Chúng tôi tin tưởng vào khả năng đáp ứng yêu cầu của Quý khách hàng.</p>
                    <ul className='flex flex-col md:pl-[2.5rem] pl-[8rem]'>
                        <li className='list-disc'> Đa dạng chất liệu</li>
                        <li className='list-disc'> Đa dạng kiểu dáng</li>
                        <li className='list-disc'> Đa dạng hiệu ứng</li>
                        <li className='list-disc'> Đa dạng công nghệ</li>
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" className='max-md:hidden md:w-[2.60417rem] md:h-[2.23958rem] md:mt-[0.42rem]' viewBox="0 0 43 50" fill="none">
                        <path d="M43 32.0963L43 20.834L25.0162 35.8155L25.0162 -5.78718e-07L17.9911 -8.04783e-07L17.9911 35.8155L2.57768e-06 20.834L1.90898e-06 32.0963L21.5 50L43 32.0963Z" fill="#444444" />
                    </svg>
                </div>
            </div>


            {/* Product items */}

            <div className='md:grid grid-cols-4 md:gap-x-[2.6rem] md:gap-y-[2.45rem] md:px-[4.17rem]  md:pb-[13.23rem]'>
                {data?.map((item, index) => (
                    <Link href={'/service-products/a'} key={index}>
                        <ProductItem image={item?.image} text={item?.text} />
                    </Link>
                ))}
            </div>
        </section >
    )
}

export default Product

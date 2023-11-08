import Image from 'next/image'
import React from 'react'
import digital1 from '@/assets/imgs/Digital1.png'
import digital2 from '@/assets/imgs/Digital2.png'
import digital3 from '@/assets/imgs/Digital3.png'

function System() {
    return (
        <section className='md:pt-[5.05rem] px-[4.27rem] md:px-[12.03rem] md:pb-[9.03rem] '>
            <Image src={digital3} quality={100} width={1000} height={1000} className='md:w-[50%] max-md:my-[10.13rem] md:h-[12.76042rem] md:hidden object-cover' />
            <div className='flex max-md:flex-col max-md:pb-[6rem]'>
                <div className='md:mr-[2.6rem] max-md:mb-[6rem]'>
                    <h2 className='heading md:w-[31.40625rem] max-md:!text-[6.93333rem]'>Hệ thống máy in kỹ thuật số tại App</h2>
                    <p className='md:w-[36.66667rem] description !font-normal text-justify md:mt-[1.77rem] mt-[3rem]'>
                        Công ty cổ phần Bao bì và In Nông nghiệp sử dụng hệ thống máy móc in kỹ thuật số tiên tiến nhất đảm bảo các sản phẩm đưa đến tay khách hàng sẽ có chất lượng cao nhất, đáp ứng được mọi yêu cầu khắt khe của khách hàng về chất liệu, màu sắc, thiết kế và kích thước.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <Image src={digital3} quality={100} width={1000} height={1000} className='md:w-full max-md:hidden md:h-[22.1875rem] object-cover' />
                    <div className='flex md:mt-[4.43rem]'>
                        <Image src={digital1} quality={100} width={1000} height={1000} className='w-[50%] md:h-[12.76042rem] h-[34.66667rem] object-cover' />
                        <Image src={digital2} quality={100} width={1000} height={1000} className='w-[50%] md:h-[12.76042rem] h-[34.66667rem] object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default System
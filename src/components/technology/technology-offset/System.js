import Image from 'next/image'
import React from 'react'

function System() {
    return (
        <section className='md:pt-[5.05rem] px-[4.27rem] md:px-[12.03rem] md:pb-[9.03rem]'>
            <div className='flex max-md:flex-col'>
                <Image src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Rectangle-86.png' quality={100} width={1000} height={1000} className='md:w-full md:hidden md:h-[22.1875rem] object-contain' />
                <div className='md:mr-[2.6rem]'>
                    <h2 className='heading md:w-[31.40625rem]'>Hệ thống máy in Offset tại App</h2>
                    <p className='md:w-[36.66667rem] description !font-normal text-justify md:mt-[1.77rem] mt-[5rem]'>
                        Công ty cổ phần Bao bì và In Nông nghiệp sở hữu hệ thống các máy in Roland 700 và Roland 707 LV với công nghệ hiện đại nhất hiện nay được nhập khẩu từ Đức đảm bảo sản xuất được các sản phẩm đa dạng trên các loại chất liệu.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <Image src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Rectangle-86.png' quality={100} width={1000} height={1000} className='md:w-full max-md:hidden md:h-[22.1875rem] object-contain' />
                    <Image src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Rectangle-88.png' quality={100} width={1000} height={1000} className='md:w-full md:h-[22.1875rem] object-contain' />
                </div>
            </div>
        </section>
    )
}

export default System
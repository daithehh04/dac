import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/imgs/Image_Gravue1.png'
import img2 from '@/assets/imgs/Image_Gravue2.png'
function System() {
    return (
        <section className='md:pt-[5.05rem]  md:px-[12.03rem] md:pb-[6.35rem]'>
            <div className='flex'>
                <div className='md:mr-[2.6rem]'>
                    <h2 className='heading md:w-[31.40625rem]'>Hệ thống máy in ống đồng tại App</h2>
                    <div className='md:w-[36.66667rem] description !font-normal text-justify md:mt-[1.77rem]'>
                        <p>
                            Hiện tại, Nhà máy của App đã hoạt động với công suất in 2.000.000 m2/tháng, công suất dán túi 2.500.000 túi/tháng.
                            Công ty sở hữu các máy in ống đồng có xuất xứ từ Đức, Ý:
                        </p>
                        <ul className='md:mt-[2rem] md:pl-[2rem]'>
                            <li className='list-disc'>Máy in Heliostar II S – xuất xứ Đức</li>
                            <li className='list-disc'>Máy in Bobst RS 5002 – xuất xứ Ý</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <Image src={img1} quality={100} width={1000} height={1000} className='md:w-[36.66667rem] md:h-[22.1875rem] object-cover md:mb-[1.93rem]' />
                    <Image src={img2} quality={100} width={1000} height={1000} className='md:w-[36.66667rem] md:h-[22.1875rem] object-cover' />
                </div>
            </div>
        </section>
    )
}

export default System
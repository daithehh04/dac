import React from 'react'
import img1 from '@/assets/imgs/imgBox1.png'
import img2 from '@/assets/imgs/imgBox2.png'
import art1 from '@/assets/imgs/Artwork.svg'
import art2 from '@/assets/imgs/Artwork2.svg'
import art3 from '@/assets/imgs/Artwork3.svg'
import Image from 'next/image'
import ServiceItem from './ServiceItem'

function Branch() {

    const data = [
        {
            icon: art1,
            textEdit: 'Tư vấn tác quyền & Bản quyền',
            text: 'Các dịch vụ pháp lý khi xây dựng một thương hiệu mới'
        },
        {
            icon: art2,
            textEdit: 'Tư vấn chiến lược truyền thông',
            text: 'Đưa ra các giải pháp thiết kế sản phẩm cho một chiến lược truyền thông hay một dự án lâu dài.'
        },
        {
            icon: art3,
            textEdit: 'Tư vấn thương hiệu và thương hiệu số',
            text: 'Dịch vụ và giải pháp tư vấn chiến lược thương hiệu toàn diện trên các nền tảng công nghệ.'
        }
    ]

    return (
        <section>
            {/* nâng tầm thương hiệu */}
            <div className="md:px-[12.03rem] flex md:pt-[5.89rem] md:pb-[7.97rem] justify-between">
                <h2 className='heading md:w-[30.1875rem] md:h-[16.4375rem]'>Thiết kế &
                    <span className='text-[#888]'> Nâng tầm </span>
                    Thương hiệu
                </h2>

                <p className='text-[#444] md:w-[34.5625rem] text-justify md:h-[16.4375rem] text-ellipsis md:line-clamp-[8] md:text-[1.625rem] md:leading-[1.2] md:tracking-[-0.0325rem]'>
                    Chúng tôi tự hào với đội ngũ thiết kế chuyên nghiệp, những người có thể nâng tầm sản phẩm của bạn bằng những thiết kế đồ họa độc đáo và đẹp mắt, bao gồm: Tem, nhãn, bao bì, logo – Thương hiệu, quảng cáo, website... Sản phẩm của bạn sẽ được định hướng và đổi mới một cách toàn diện để làm bước đệm cho sự phát triển của thương hiệu.
                </p>
            </div>

            {/* Thiết kế bao bì */}
            <div className='md:h-[100vh] flex'>
                <div className='md:pl-[11.67rem] md:pt-[4.84rem] md:pb-[10.1rem] md:pr-[5.73rem] bg-[#000D10] flex flex-col flex-1 w-[50%]'>
                    <h2 className='heading !text-[#fff] md:mb-[3.4375rem]'>
                        Thiết kế <span className='md:text-[#00A84F]'>Bao bì</span>
                    </h2>
                    <div className='flex flex-col md:w-[34.5625rem] md:h-[37.0625rem] md:pr-[4.9rem] text-justify md:text-[1.35417rem] md:leading-[1.2] md:tracking-[-0.0325rem] text-[#fff]'>
                        <p>Thiết kế bao bì là sự kết nối về hình thức, cấu trúc, vật liệu, màu sắc, hình ảnh, kiểu chữ và thông tin, đi cùng yếu tố thiết kế để tạo ra một sản phẩm phù hợp</p>
                        <p className='md:my-[2rem]'>Thiết kế bao bì cũng quan trọng như sản phẩm của bạn vì vậy chúng tôi cung cấp những dịch vụ như:</p>
                        <ul className='md:ml-[2rem]'>
                            <li className='list-disc'>Thiết kế bao bì các ngành hàng</li>
                            <li className='list-disc'>Thiết kế bao bì các ngành hàng</li>
                            <li className='list-disc'>Thiết kế bao bì các ngành hàng</li>
                            <li className='list-disc'>Thiết kế bao bì các ngành hàng</li>
                        </ul>
                    </div>
                </div>
                <div className='md:w-[50%]'>
                    <Image src={img1} alt='img' priority quality={100} className='md:w-[48.75rem] object-cover h-full' />
                </div>
            </div>
            {/* Thiết kế nhận diện thương hiệu */}
            <div className='md:h-[100vh] flex'>
                <div className='md:w-[50%]'>
                    <Image src={img2} alt='img' priority quality={100} className='md:w-full object-cover h-full' />
                </div>
                <div className='md:pl-[7.86rem] md:pt-[4.84rem] md:w-[48.75rem] md:pb-[10.1rem] md:pr-[5.73rem] bg-[#F0F0F0] flex flex-col '>
                    <h2 className='heading md:mb-[3.4375rem]'>
                        Thiết kế <span className='text-[#19468D]'>Nhận diện thương hiệu</span>
                    </h2>
                    <div className='flex flex-col md:w-[34.5625rem] md:h-[37.0625rem] text-justify md:text-[1.35417rem] md:leading-[1.2] md:tracking-[-0.0325rem] text-[#444]'>
                        <p>Thiết kế nhận diện thương hiệu là cách tốt nhất để truyền thông đến với khách hàng các dịch vụ thiết kế của chúng tôi:</p>
                        <ul className='md:ml-[2rem]'>
                            <li className='list-disc'>Thiết kế logo</li>
                            <li className='list-disc'>Nhận diện thương hiệu</li>
                            <li className='list-disc'>Đặt tên thương hiệu</li>
                            <li className='list-disc'>Sáng tác slogan</li>
                            <li className='list-disc'>Rebranding (định hình lại thương hiệu)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Thiết Kế & Dịch vụ tư vấn */}

            <div className='md:h-[100vh] md:px-[4.2rem] md:pt-[8.39rem] md:pb-[4.06rem] justify-between flex'>
                <div className='md:mr-[10.47rem]'>
                    <p className='heading md:w-[28.75rem]'>Thiết kế &</p>
                    <span className='heading !text-[#888]'>dịch vụ tư vấn</span>
                </div>
                <div className='grid grid-cols-2'>
                    {data?.map((item, index) => (
                        <ServiceItem icon={item?.icon} textEdit={item?.textEdit} text={item?.text} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Branch

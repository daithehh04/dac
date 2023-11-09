import React from 'react'
import layer3 from '@/assets/imgs/Layer_3.svg'
import TextnologyContent from '@/components/common/TextnologyContent'
import imageContent from '@/assets/imgs/TechnologyBanner3.png'
import Image from 'next/image'
function ContentGravure() {
    const data = [
        {
            icon: layer3,
            text: 'Thành phẩm sau khi hoàn thiện ở dạng cuộn hoặc túi phù hợp với nhu cầu đóng gói sản phẩm của khách hàng.'
        },
        {
            icon: layer3,
            text: 'Bên cạnh đó, đội ngũ R&D của APP luôn sẵn sàng tư vấn các cấu trúc phù hợp với mặt hàng mà Quý khách hàng cần sản xuất trên tiêu chí: nhanh, nhiều, tốt, chi phí hợp lý'
        }
    ]
    return (
        <section className='contentWrapper bg-[#000D10] overflow-x-hidden'>
            <h2 className='heading-primary md:w-[33.1875rem] w-[35rem] max-md:mb-[6rem]'>
                CÔNG NGHỆ IN ỐNG ĐỒNG
            </h2>
            <div className='flex md:pb-[7rem] md:pt-[4rem] max-md:flex-col'>
                <div className='md:mr-[10.68rem] priDesc !text-start md:w-[27.59375rem]  max-md:mb-[6rem]'>
                    <p>Với máy móc hiện đại, tốc độ sản xuất cực nhanh lên tới 450m/phút,
                        hệ thống thiết bị đồng bộ khép kín từ in đến gia công (máy in, máy ghép, máy chia cuộn, máy dán túi, máy kiểm phẩm offline), công ty APP có thể đáp ứng được sản lượng cho các đơn hàng lớn và các yêu cầu khắt khe khác để đưa tới cho khách hàng những sản phẩm có chất lượng tốt nhất.
                    </p>
                </div>
                <div className='md:grid grid-cols-2 gap-x-[5.31rem] gap-y-[3.2rem]'>
                    {data?.map((item, index) => {
                        return (
                            <TextnologyContent key={index} icon={item?.icon} text={item?.text} />
                        )
                    })}
                </div>
            </div>
            <div className='md:pl-[38.44rem] md:mb-[6.67rem] md:h-[27.8125rem]'>
                <Image src={imageContent} alt='image' quality={100} className='w-full max-md:hidden object-cover md:h-[27.8125rem]' />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className='md:w-full  h-[2px]' viewBox="0 0 1762 2" fill="none">
                <path d="M1 1L1761 0.999846" stroke="white" stroke-linecap="round" />
            </svg>
        </section>
    )
}

export default ContentGravure
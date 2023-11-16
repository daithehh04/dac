import React from 'react'
import layer3 from '@/assets/imgs/Layer_3.svg'
import TextnologyContent from '@/components/common/TextnologyContent'
import imageContent from '@/assets/imgs/TechnologyBanner3.png'
import Image from 'next/image'
function ContentGravure({ dataContent }) {
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
            <h2 className='heading-primary md:w-[33.1875rem] max-md:!text-[8.53333rem] w-[60rem] max-md:mb-[6rem]'>
                {dataContent?.heading}
            </h2>
            <div className='flex md:pb-[7rem] md:pt-[4rem] max-md:flex-col'>
                <div
                    className='md:mr-[10.68rem] priDesc !text-start md:w-[27.59375rem]  max-md:mb-[6rem]'
                    dangerouslySetInnerHTML={{ __html: `${dataContent?.description}` }}
                >
                </div>
                <div className='md:grid grid-cols-2 gap-x-[5.31rem] gap-y-[3.2rem]'>
                    {dataContent?.listContent?.map((item, index) => {
                        return (
                            <TextnologyContent key={index} icon={item?.icon} text={item?.text} />
                        )
                    })}
                </div>
            </div>
            <div className='md:pl-[38.44rem] md:mb-[6.67rem] md:h-[27.8125rem]'>
                <Image src={dataContent?.image?.sourceUrl} alt={dataContent?.image?.altText || 'image'} width={1500} height={1000} quality={100} className='w-full max-md:hidden object-cover md:h-[27.8125rem]' />
            </div>

            <div className='w-full h-[2px] bg-[#fff] opacity-30'></div>
        </section>
    )
}

export default ContentGravure
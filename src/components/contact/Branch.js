import React from 'react'
import OpportunityItem from '../common/OpportunityItem'
import layer10 from '@/assets/imgs/Layer_10.svg'
import img from '@/assets/imgs/ContactImageInfo.png'
import Image from 'next/image'
function Branch() {
    const data = {
        title: 'Trụ sở & chi nhánh App',
        listInfomation: [
            {
                icon: layer10,
                title: 'CÔNG TY CỔ PHẨN BAO BÌ VÀ IN NÔNG NGHIỆP',
                desc: 'AGRICULTURE PRINTING AND PACKAGING JOINT STOCK COMPANY',
                about: [
                    {
                        text: 'Trụ sở: Tầng 6 tòa nhà APP – Số 72 Trường Chinh – Phương Mai – Đống Đa – Hà Nội'
                    },
                    {
                        text: 'Tel: (84.24) 36895605'
                    },
                    {
                        text: 'Fax: (84.24) 36895605'
                    },
                    {
                        text: 'Nhà máy: Lô 3 – CN3 Khu CN Ngọc Hồi -Thanh Trì – Hà Nội'
                    },
                    {
                        text: 'Tel: (84.24) 36840092/3/4i'
                    },
                    {
                        text: 'Fax: (84.24) 36840095'
                    },
                    {
                        text: 'Email: info@ appmail.vn'
                    },
                    {
                        text: 'Web: www.appprintco.com'
                    }
                ]
            },
            {
                icon: layer10,
                title: 'CHI NHÁNH CÔNG TY CỔ PHẦN BAO BÌ VÀ IN NÔNG NGHIỆP TẠI HƯNG YÊN',
                desc: 'BRANCH COMPANY IN HUNG YEN',
                about: [
                    {
                        text: 'Địa chỉ: Đường C1 – Khu CN Phố Nối A – Xã Lạc Hồng – Huyện Văn Lâm – Hưng Yên'
                    },
                    {
                        text: 'Tel: (0221) 3982136/7'
                    },
                    {
                        text: 'Fax: (0221) 3982135'
                    },
                    {
                        text: 'Email: Info@ appmail.vn'
                    }
                ]
            },
            {
                icon: layer10,
                title: 'CÔNG TY TNHH CÔNG NGHỆ CHỐNG GIẢ DAC',
                desc: 'DAC ANTI COUNTERFEIT TECHNOLOGY LIMITED COMPANY',
                about: [
                    {
                        text: 'Trụ sở: Tầng 6 tòa nhà APP – Số 72 Trường Chinh – Phương Mai – Đống Đa – Hà Nội'
                    },
                    {
                        text: 'Tel: (84.24) 62820045'
                    },
                    {
                        text: 'Fax: (84.24) 62820046'
                    },
                    {
                        text: 'Email: Info@temchonggia.com.vn'
                    },
                    {
                        text: 'Website: temchonggia.com.vn'
                    }
                ]
            }
        ]
    }
    return (
        <section className='md:pt-[7rem] pt-[7.47rem] md:px-[4.17rem] px-[4.27rem]'>
            <div className='flex max-md:flex-col'>
                <h2 className='heading2 md:mr-[7.97rem] max-md:w-[45rem]'>{data?.title}</h2>
                <div className=' max-md:mt-[12rem]'>
                    <div className='grid md:grid-cols-2 gap-x-[4.9rem] gap-y-[2.08rem]'>
                        {data?.listInfomation?.map((item, index) => (
                            <OpportunityItem check={true} classCus={'max-md:flex-col'} key={index} icon={item?.icon} data={item?.about} title={item?.title} desc={item?.desc} className={'md:w-[26.14583rem]'} />
                        ))}
                    </div>
                    <Image src={img} alt='image' quality={100} width={1000} height={1000} className='object-cover max-md:hidden md:h-[31.875rem] w-full' />
                </div>
            </div>

            <div className='md:px-[4.17rem] h-[1px] bg-[#000] md:my-[5.94rem]'></div>
        </section>
    )
}

export default Branch
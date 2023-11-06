import OpportunityItem from '@/components/common/OpportunityItem'
import React from 'react'
import layer10 from '@/assets/imgs/Layer_10.svg'
import Link from 'next/link'

function Profile() {
    const data =
    {
        listOppo: [
            {
                icon: layer10,
                infoOppo: [
                    {
                        text: 'Chuyên viên thiết kế đồ họa'
                    },
                    {
                        text: 'Địa điểm làm việc: Hà Nội'
                    },
                    {
                        text: 'Mức lương: Thỏa thuận'
                    }
                ]
            },
            {
                icon: layer10,
                infoOppo: [
                    {
                        text: 'Nhân viên Thị Trường'
                    },
                    {
                        text: 'Địa điểm làm việc: Hà Nội'
                    },
                    {
                        text: 'Mức lương: Thỏa thuận'
                    }
                ]
            },
            {
                icon: layer10,
                infoOppo: [
                    {
                        text: 'Kỹ thuật viên lập trình'
                    },
                    {
                        text: 'Địa điểm làm việc: Hưng Yên'
                    },
                    {
                        text: 'Mức lương: Thỏa thuận'
                    }
                ]
            },
            {
                icon: layer10,
                infoOppo: [
                    {
                        text: 'Kỹ thuật viên lập trình'
                    },
                    {
                        text: 'Địa điểm làm việc: Hưng Yên'
                    },
                    {
                        text: 'Mức lương: Thỏa thuận'
                    }
                ]
            }
        ]

    }
    return (
        <section className='md:pt-[3.13rem] md:px-[4.17rem] md:pb-[10rem]'>
            <div className='flex flex-col description md:w-[44.375rem] md:mb-[1.93rem]'>
                <h2 className='md:mb-[0.5rem]'>HỒ SƠ BAO GỒM</h2>
                <ul className='!font-normal md:mb-[0.5rem] md:pl-[2rem]'>
                    <li className='list-disc'>CV</li>
                    <li className='list-disc'>Bằng cấp liên quan</li>
                    <li className='list-disc'>Portfolio</li>
                </ul>
                <span className='md:mb-[0.5rem]'>Lưu ý:</span>
                <p className='!font-normal md:mb-[0.5rem]'>
                    Có thể nộp hồ sơ qua email: tuyendungapp@appmail.vn
                    (vui lòng ghi rõ họ tên và số di động)
                </p>
                <p className='!font-normal md:mb-[0.5rem]'>
                    Nộp trực tiếp tại Hà Nội: Phòng Hành chính – Nhân sự Công ty CP Bao bì và In Nông Nghiệp, Lô 3, CN3, KCN Ngọc Hồi, Thanh Trì, Hà Nội – SĐT: (84.24).36840095c
                </p>
                <p className='!font-normal md:mb-[0.5rem]'>
                    Tại Hưng Yên: Đường C1, KCN Phố Nối A, Lạc Hồng, Văn Lâm, Hưng Yên – SĐT: (0221).3982136
                </p>
            </div>

            <div>
                <h3 className='description md:mb-[2.24rem]'>Các vị trí khác</h3>
                <div className='md:grid grid-cols-4'>
                    {data?.listOppo?.map((item, index) => (
                        <div key={index}>
                            <OpportunityItem icon={item?.icon} data={item?.infoOppo} />
                            <Link href={`/recruitment/a`}>
                                <p className='md:w-[21.04167rem] cursor-pointer description !text-[#888] underline !font-normal'>Ứng tuyển ngay</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Profile
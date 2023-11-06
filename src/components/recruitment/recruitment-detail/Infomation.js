import React from 'react'
import layer_11 from '@/assets/imgs/Layer_11.svg'
import layer_12 from '@/assets/imgs/Layer_12.svg'
import layer_13 from '@/assets/imgs/Layer_13.svg'
import layer_14 from '@/assets/imgs/Layer_14.svg'
import layer_15 from '@/assets/imgs/Layer_15.svg'
import Image from 'next/image'
import Button from '@/components/common/Button'
function Infomation() {
    const dataForm = {
        title: 'Gửi thông tin ứng tuyển cho APP',
        infoInput: [
            {
                label: 'Họ tên*',
                icon: layer_11
            },
            {
                label: 'Email*',
                icon: layer_12
            },
            {
                label: 'Số điện thoại*',
                icon: layer_13
            },
            {
                label: 'Ngày sinh*',
                icon: layer_14
            },
            {
                label: 'Địa chỉ hiện tại*',
                icon: layer_15
            },
            {
                label: 'File đính kèm'
            }
        ]
    }
    return (
        <section className='md:pt-[4.7rem] md:px-[4.17rem] md:pb-[6.56rem] flex bg-[#F5F5F5]'>
            {/* content-left */}

            <div className='md:mr-[15.57rem]'>
                <h2 className='heading md:w-[28.64583rem] md:mb-[2.8rem]'>Chuyên viên thiết kế đồ họa</h2>
                <div className='flex flex-col description md:w-[44.63542rem] gap-[0.5rem]'>
                    <p>VỊ TRÍ TUYỂN DỤNG:</p>
                    <span className='!font-normal'>Chuyên viên thiết kế – full time</span>
                    <div className='flex'>
                        <p>Số lượng:</p>
                        <span className='!font-normal'>03</span>
                    </div>
                    <span>
                        Yêu cầu:
                    </span>
                    <p className='!font-normal'>Kinh nghiệm từ 2 năm trở lên</p>
                    <p className='!font-normal'>Sử dụng tốt Illustrator, Photoshop, Indesign</p>
                    <p className='!font-normal'>Yêu cầu sáng tạo tốt.</p>
                    <p className='!font-normal'>Khả năng phối hợp làm việc nhóm tốt</p>
                    <p className='!font-normal'>Có khả năng chịu được công việc căng thẳng cường độ cao</p>
                    <span>
                        Quyền lợi
                    </span>
                    <p className='!font-normal'>Thời gian làm việc: 8h30 – 18h00 các ngày từ thứ 2 đến thứ 7</p>
                    <p className='!font-normal'>Mức lương: Thỏa thuận (Tùy theo năng lực).</p>
                    <p className='!font-normal'>Được hưởng đầy đủ chế độ đãi ngộ, du lịch và phúc lợi theo Luật Lao động, môi trường làm việc trẻ trung, thân thiện, chuyên nghiệp.</p>

                </div>
            </div>

            {/* content-right */}

            <div className='md:pt-[4.7rem]'>
                <h3 className='description !font-normal md:mb-[3rem]'>{dataForm?.title}</h3>
                <div className='flex flex-col'>
                    {dataForm?.infoInput?.map((item, index) => (
                        <div key={index} >
                            <div className='flex justify-between items-center'>
                                <input placeholder={item?.label} className='bg-transparent' />
                                {item?.icon && <Image src={item?.icon} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] object-contain' />}
                            </div>
                            <div className={`md:w-[31.40625rem] md:h-[1px] bg-[#000] ${index === dataForm?.infoInput?.length - 1 ? 'md:mt-[5.1rem] md:mb-[2.24rem]' : 'md:my-[1rem]'}`}></div>
                        </div>
                    ))}
                </div>
                <Button text={'Gửi thông tin'} />
            </div>
        </section>
    )
}

export default Infomation
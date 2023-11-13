import React from 'react'
import layer6 from '@/assets/imgs/Layer_6.svg'
import layer7 from '@/assets/imgs/Layer_7.svg'
import layer8 from '@/assets/imgs/Layer_8.svg'
import ServiceItem from '../common/ServiceItem'

function Culture() {
    const data =
    {
        title1: 'Văn hóa APP',
        desc: 'Chúng tôi tạo ra nét văn hóa làm việc thống nhất, khoa học hướng đến hiệu quả công việc.Bên cạnh đó, chúng tôi luôn luôn mong muốn xây dựng môi trường làm việc đoàn kết, hợp tác, tin cậy và năng động để cùng nhau sáng tạo và phát triển trong công việc cũng như trong cuộc sống.Nếu bạn đang tìm kiếm những điều này, thì đừng chần chờ, hãy tham gia vào cộng đồng APP của chúng tôi.Mái nhà chung APP luôn sẵn sàng chào đón các tài năng.',
        dataCulture: [
            {
                icon: layer6,
                textEdit: 'Trung thực, minh bạch:',
                text: 'Giữ gìn chuẩn mực đạo đức nghề nghiệp, giữ gìn nề nếp, trật tự và bí mật Công ty; không có hành vi gian dối, tiêu cực; dám nghĩ, dám làm, dám chịu trách nhiệm; báo cáo nhanh chóng, kịp thời, chính xác mọi thông tin.'
            },
            {
                icon: layer7,
                textEdit: 'Đoàn kết, nhiệt huyết:',
                text: ' Đoàn kết, tương trợ lẫn nhau trong công việc và cuộc sống. Luôn hướng về việc hoàn thành mục tiêu với sự quyết tâm và tạo động lực làm việc cho đồng nghiệp. Hoàn thành công việc với kết quả tốt nhất bằng cách thực hiện chính xác quy trình từ đầu đến cuối.'
            },
            {
                icon: layer8,
                textEdit: 'Đổi mới, sáng tạo:',
                text: 'Làm việc với tinh thần “Đổi mới, sáng tạo để phát triển”'
            }
        ],
        title2: 'Cơ hội việc làm'
    }

    return (
        <section className='md:pt-[4rem] pt-[3.73rem] md:pb-[6rem] max-md:pb-[10rem] px-[4.27rem] md:px-[4.17rem] flex max-md:flex-col bg-[#F5F5F5]'>
            <div className='md:mr-[10.36rem]'>
                <h2 className='heading md:!tracking-[-0.17188rem] md:mb-[1.4rem] max-md:mb-[4.2rem]'>{data?.title1}</h2>
                <p className='description !leading-[1.2] !font-normal md:w-[28.80208rem] text-justify'>{data?.desc}</p>
            </div>
            <div className='grid md:grid-cols-2 max-md:gap-[5rem] gap-x-[9.52rem] gap-y-[1rem] max-md:mt-[8rem]'>
                {data?.dataCulture?.map((item, index) => (
                    <ServiceItem classNameCus={'md:w-[21rem] text-justify'} key={index} className='md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] max-md:mt-[4rem]' icon={item?.icon} textEdit={item?.textEdit} text={item?.text} />
                ))}
            </div>
        </section>
    )
}

export default Culture
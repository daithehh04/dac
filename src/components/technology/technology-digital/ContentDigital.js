import React from 'react'
import layer4 from '@/assets/imgs/Layer_4.svg'
import TextnologyContent from '@/components/common/TextnologyContent'
function ContentDigital() {
    const data = [
        {
            icon: layer4,
            text: ' Với máy móc in ấn nhập khẩu chuẩn Châu Âu và mực in được chọn lựa kĩ, Công ty cổ phần Bao bì và In Nông Nghiệp với hơn 60 năm kinh nghiệm trong lĩnh vực sản xuất bao bì có thể đáp ứng tốt những nhu cầu đa dạng của khách hàng với mọi số lượng, mọi kích cỡ ở dạng cuộn và tờ, sản phẩm có thể dán thủ công bằng tay hoặc dán máy tự động với chất lượng ổn định và giá cả hợp lý nhất. '
        },
        {
            icon: layer4,
            text: 'Các sản phẩm sau khi được in ấn và hoàn thiện các công đoạn gia công sau in sẽ được bảo quản, đóng gói một cách cẩn thận, đầy đủ và chính xác, đảm bảo được chất lượng tốt nhất khi đến tay khách hàng.'
        },
        {
            icon: layer4,
            text: 'Công đoạn chế bản với nhân lực có trình độ kỹ thuật cao, đảm bảo tính chính xác và nhanh chóng. '
        }
    ]
    return (
        <section className='contentWrapper bg-[#000D10] overflow-x-hidden'>
            <h2 className='heading-primary md:w-[39.16667rem] w-[40rem] max-md:mb-[6rem]'>
                CÔNG NGHỆ IN KỸ THUẬT SỐ
            </h2>
            <div className='flex md:pb-[7rem] md:pt-[4rem] max-md:flex-col'>
                <div className='md:mr-[10.68rem] priDesc !text-start md:w-[27.59375rem] max-md:mb-[7rem]'>
                    <p>
                        Động cơ in 6 màu mang lại sức mạnh hiển thị chưa từng có cho các bản in kỹ thuật số
                    </p>
                    <ul className='md:pl-[1.5rem] md:mt-[1rem] pl-[5rem]'>
                        <li className='list-disc'>Năng suất vượt trội với khả năng in tốc độ cao 120 trang/phút ngay cả khi in 6 Màu.</li>
                        <li className='list-disc'>Biểu thị độ nét cao với độ phân giải hiệu suất cao 2400 x 2400 dpi.</li>
                        <li className='list-disc'>Máy chủ (print server) hiệu suất cao giúp tối đa hóa năng suất động cơ in ấn.</li>
                        <li className='list-disc'>Hỗ trợ nhiều loại giấy: 52 gsm giấy mỏng, 400 gsm giấy dày, tối thiểu 98 x 148 mm và tối đa 330 x 1200 mm.</li>
                        <li className='list-disc'>Nhiều tùy chọn nạp giấy và bộ hoàn thiện đa dạng giúp hợp lý hóa quy trình công việc từ lúc in đến khâu sau in</li>
                    </ul>
                </div>
                <div className='md:grid grid-cols-2 gap-x-[5.31rem] gap-y-[3.2rem]'>
                    {data?.map((item, index) => {
                        return (
                            <TextnologyContent key={index} icon={item?.icon} text={item?.text} />
                        )
                    })}
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className='md:w-full  h-[2px]' viewBox="0 0 1762 2" fill="none">
                <path d="M1 1L1761 0.999846" stroke="white" stroke-linecap="round" />
            </svg>
        </section>
    )
}

export default ContentDigital
import React from 'react'
import group1 from '@/assets/imgs/Group1.svg'
import group2 from '@/assets/imgs/Group2.svg'
import group3 from '@/assets/imgs/Group3.svg'
import group4 from '@/assets/imgs/Group4.svg'
import TextnologyContent from '@/components/common/TextnologyContent'
function Content() {
    const data = [
        {
            icon: group1,
            text: 'Mã số an ninh giúp người tiêu dùng xác minh hàng chính hãng một cách chính xác.'
        },
        {
            icon: group2,
            text: 'Giải pháp bảo hành điện tử giúp kích hoạt bảo hành cho sản phẩm chỉ bằng một tin nhắn, đồng thời NTD vẫn có thể tải giấy bảo hành về máy.'
        },
        {
            icon: group3,
            text: 'Mã Qrcode giúp truy xuất thông tin sản phẩm nhanh chóng (truy xuất nguồn gốc) và có thể tích hợp thêm giải pháp Chống tràn hàng giúp doanh nghiệp quản lý kênh phân phối hàng hóa.'
        },
        {
            icon: group4,
            text: 'Quý doanh nghiệp có thể tích hợp các chương trình khuyến mãi, quảng cáo, tích điểm đổi quà, nhắn tin trúng thưởng, … để chạy các chương trình marketing giúp tăng doanh số và giữ chân khách hàng thân thiết đồng hành cùng công ty.'
        }
    ]
    return (
        <section className='md:pt-[4.32rem] md:px-[4.17rem] bg-[#000D10]'>
            <h2 className='heading-primary md:w-[33.1875rem]'>
                GIẢI PHÁP CHỐNG GIẢ
            </h2>
            <div className='flex md:pb-[7rem] md:pt-[4rem]'>
                <p className='md:mr-[10.68rem] priDesc  md:w-[28.59375rem]'>
                    Chúng tôi, Công ty TNHH Công nghệ chống giả DAC - Trực thuộc Công ty cổ phần Bao bì và In Nông Nghiệp với 60 năm hoạt động trong lĩnh vực in ấn và là thành viên Hiệp hội chống hàng giả và bảo vệ thương hiệu Việt Nam (VATAP).
                    Tự hào là công ty đầu tiên tại Việt Nam sản xuất và kinh doanh tem chống hàng giả kỹ thuật số, DAC chuyên cung cấp các giải pháp toàn diện và tối ưu cho nhu cầu chống giả cũng như quản lý phân phối hàng hóa. Tem kỹ thuật số DAC là một giải pháp tổng thể bao gồm nhiều tiện ích đi kèm
                </p>
                <div className='md:grid grid-cols-2 gap-x-[5.31rem] gap-y-[3.2rem]'>
                    {data?.map((item, index) => {
                        return (
                            <TextnologyContent key={index} icon={item?.icon} text={item?.text} />
                        )
                    })}
                </div>

            </div>
            {/*  */}
            <div className='priDesc md:pl-[39rem] md:pb-[3.94rem]'>
                <p className='md:mb-[2rem]'>Ngoài ra, giải pháp của DAC có thể tích hợp với các phần mềm tiện ích khác như CRM, SMS Marketing, SMS Brand Name giúp doanh nghiệp nâng cao chất lượng chăm sóc khách hàng sau bán hàng.</p>
                <p>Với bề dày kinh nghiệm trong lĩnh vực in ấn và sản xuất tem chống giả, cũng như thế mạnh về dây chuyền thiết bị. DAC tin tưởng vào khả năng ứng dụng công nghệ chống giả kỹ thuật số cho các doanh nghiệp Việt Nam. Không chỉ thế, hợp tác cùng chúng tôi doanh nghiệp còn được cung cấp các tiện ích, công cụ hỗ trợ trong việc quản lý bán hàng cũng như tương tác với người dùng. Công ty DAC cam kết mang đến chất lượng dịch vụ tốt nhất cho quý khách hàng</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1762" height="2" viewBox="0 0 1762 2" fill="none">
                <path d="M1 1L1761 0.999846" stroke="white" stroke-linecap="round" />
            </svg>
        </section>
    )
}

export default Content
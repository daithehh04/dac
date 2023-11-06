import TextnologyContent from '@/components/common/TextnologyContent'
import React from 'react'
import layer1 from '@/assets/imgs/layer_1.svg'
function ContentOffset() {
    const data = [
        {
            icon: layer1,
            text: ' Với máy móc in ấn nhập khẩu chuẩn Châu Âu và mực in được chọn lựa kĩ, Công ty cổ phần Bao bì và In Nông Nghiệp với hơn 60 năm kinh nghiệm trong lĩnh vực sản xuất bao bì có thể đáp ứng tốt những nhu cầu đa dạng của khách hàng với mọi số lượng, mọi kích cỡ, sản phẩm có thể dán thủ công bằng tay hoặc dán máy tự động với chất lượng ổn định và giá cả hợp lý nhất. '
        },
        {
            icon: layer1,
            text: 'Các sản phẩm sau khi được in ấn và hoàn thiện các công đoạn gia công sau in sẽ được bảo quản, đóng gói một cách cẩn thận, đầy đủ và chính xác, đảm bảo được chất lượng tốt nhất khi đến tay khách hàng.'
        },
        {
            icon: layer1,
            text: 'Công đoạn chế bản với nhân lực có trình độ kỹ thuật cao, đảm bảo tính chính xác và nhanh chóng.'
        }
    ]
    return (
        <section className='md:pt-[4.32rem] md:px-[4.17rem] bg-[#000D10]'>
            <h2 className='heading-primary md:w-[33.1875rem]'>
                CÔNG NGHỆ IN OFFSET
            </h2>
            <div className='flex md:pb-[7rem] md:pt-[4rem]'>
                <p className='md:mr-[10.68rem] priDesc  md:w-[28.59375rem]'>
                    Công suất in Offset của APP hiện tại lên tới 40.000 đến 80.000 tờ/1 ca in tùy vào định lượng và khổ in. Thế mạnh của công ty chúng tôi là sản xuất các bao bì chuyên dụng, cao cấp, đa dạng trên các chất liệu: Giấy Duplex, Ivory, Metalize, Couche, bền ẩm, giấy bồi sóng, các loại giấy decal,…
                </p>
                <div className='md:grid grid-cols-2 gap-x-[5.31rem] gap-y-[3.2rem]'>
                    {data?.map((item, index) => {
                        return (
                            <TextnologyContent key={index} icon={item?.icon} text={item?.text} />
                        )
                    })}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1762" height="2" viewBox="0 0 1762 2" fill="none">
                <path d="M1 1L1761 0.999846" stroke="white" stroke-linecap="round" />
            </svg>
        </section>
    )
}

export default ContentOffset
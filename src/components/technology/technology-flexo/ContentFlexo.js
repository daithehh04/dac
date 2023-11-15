import TextnologyContent from '@/components/common/TextnologyContent'
import React from 'react'
import layer2 from '@/assets/imgs/layer_2.svg'
function ContentFlexo({dataContent}) {
    console.log(dataContent);
    const data = [
        {
            icon: layer2,
            text: ' Với máy móc in ấn nhập khẩu chuẩn Châu Âu và mực in được chọn lựa kĩ, Công ty cổ phần Bao bì và In Nông Nghiệp với hơn 60 năm kinh nghiệm trong lĩnh vực sản xuất bao bì có thể đáp ứng tốt những nhu cầu đa dạng của khách hàng với mọi số lượng, mọi kích cỡ ở dạng cuộn và tờ, sản phẩm có thể dán thủ công bằng tay hoặc dán máy tự động với chất lượng ổn định và giá cả hợp lý nhất. '
        },
        {
            icon: layer2,
            text: 'Các sản phẩm sau khi được in ấn và hoàn thiện các công đoạn gia công sau in sẽ được bảo quản, đóng gói một cách cẩn thận, đầy đủ và chính xác, đảm bảo được chất lượng tốt nhất khi đến tay khách hàng.'
        },
        {
            icon: layer2,
            text: 'Công đoạn chế bản với nhân lực có trình độ kỹ thuật cao, đảm bảo tính chính xác và nhanh chóng. '
        }
    ]
    return (
        <section className='contentWrapper bg-[#000D10] max-md:overflow-x-hidden'>
            <h2 className='heading-primary md:w-[33.1875rem] w-[35rem]'>
                {dataContent?.heading}
            </h2>
            <div className='flex md:pb-[7rem] md:pt-[4rem] pt-[6rem] max-md:flex-col'>
                <div className='md:mr-[10.68rem] priDesc md:w-[28.59375rem]' dangerouslySetInnerHTML={{ __html: `${dataContent?.description}` }}>
                </div>
                <div className='md:grid grid-cols-2 gap-x-[5.31rem] gap-y-[3.2rem] max-md:mt-[6rem]'>
                    {dataContent?.listContent?.map((item, index) => {
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

export default ContentFlexo
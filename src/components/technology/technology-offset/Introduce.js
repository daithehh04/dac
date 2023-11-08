import React from 'react'

function Introduce() {
    const data = {
        title: 'In Offset là kỹ thuật in ấn đã xuất hiện từ những năm 1875 và trở thành kỹ thuật in phổ biến nhất trong in ấn thương mại ngày nay.',
        desc: 'Công nghệ in này cho ra các sản phẩm in đạt chất lượng hình ảnh cao, đáp ứng được các yêu cầu về màu sắc sản phẩm đẹp, sắc nét và hạn chế nhiều lỗi như mực in nhòe hoặc in không chuẩn màu… Thêm nữa, công nghệ in Offset có thể áp dụng trên nhiều chất liệu khác nhau, từ bề mặt phẳng đến sần sùi như gỗ, giấy thô nhám, kim loại,…'
    }
    return (
        <section className='md:pt-[6.15rem] pt-[6.93rem] md:pr-[11.72rem] md:pl-[43.44rem] bg-[#F5F5F5] max-md:px-[4.27rem]'>
            <h2 className='heading text-justify max-md:!text-[6.93333rem]'>{data?.title}</h2>
            <p className='md:py-[2.5rem] py-[6.93rem] description text-justify !font-normal'>
                {data?.desc}
            </p>
        </section>
    )
}

export default Introduce
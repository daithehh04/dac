import React from 'react'

function Introduce() {
    const data = {
        title: 'In Kỹ thuật số là một trong những công nghệ in rất được quan tâm hiện nay, bởi công nghệ này sở hữu rất nhiều ưu điểm vượt trội.',
        desc: 'Hiện nay, in Kỹ thuật số được ứng dụng vô cùng phổ biến và có thể chia làm nhiều loại như in chuyển nhiệt, in laser, in vải canvas… cho phép in ấn trực tiếp từ tệp điện tử với thời gian nhanh chóng cùng với chất lượng cao. Công nghệ in này cho phép tái tạo hình ảnh và màu sắc một cách chính xác, các hiệu ứng đặc biệt giúp sản phẩm của khách hàng nổi bật và cuốn hút.Thêm vào đó, thời gian và chi phí sản xuất được giảm đi rất nhiều khi sử dụng công nghệ in kỹ thuật số.'
    }
    return (
        <section className='md:pt-[5.57rem] pt-[6.4rem] md:pr-[11.72rem] md:pl-[43.44rem] max-md:px-[4.27rem] bg-[#F5F5F5] max-md:pb-[6rem]'>
            <h2 className='heading max-md:mb-[4rem] text-justify max-md:!tracking-[-0.27733rem] max-md:!text-[6.93333rem]'>{data?.title}</h2>
            <p className='md:py-[2.5rem] description !font-normal text-justify'>
                {data?.desc}
            </p>
        </section>
    )
}

export default Introduce
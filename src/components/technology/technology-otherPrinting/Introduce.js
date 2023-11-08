import React from 'react'

function Introduce() {
    const data = {
        title: 'Giải pháp chống giả kỹ thuật số được vận hành tại Công ty TNHH công nghệ chống giả DAC',
        desc: 'Tem "Kỹ thuật số" hay "Tem SMS" là giải pháp chống hàng giả dựa trên con tem được sản xuất bằng công nghệ in Kỹ thuật số với đặc trưng là các mã số biến đổi; Tem giúp Doanh nghiệp bảo vệ thương hiệu, chống hàng giả và có thêm công cụ quản lý hàng hóa cũng như marketing; Còn đối với người tiêu dùng có thể tự kiểm tra, xác minh được hàng chính hãng một cách dễ dàng.'
    }
    return (
        <section className='md:pt-[6.15rem] md:pr-[11.72rem] md:pl-[43.44rem] max-md:px-[4.27rem] bg-[#F5F5F5] max-md:pb-[5rem]'>
            <h2 className='heading text-justify md:!tracking-[-0.06875rem] max-md:mb-[4rem] max-md:!text-[6.93333rem]'>{data?.title}</h2>
            <p className='md:py-[2.5rem] description text-justify !font-normal'>
                {data?.desc}
            </p>
        </section>
    )
}

export default Introduce
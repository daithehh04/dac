import React from 'react'

function Introduce() {
    const data = {
        title: 'In Flexo là một trong những kỹ thuật in ấn phổ biến hiện nay. Nhờ có kỹ thuật hiện đại, kiểu in này sử dụng để in số lượng lớn cho các ngành công nghiệp',
        desc: 'Khác với công nghệ in Offset (in phẳng) và công nghệ in ống đồng (in lõm), công nghệ in Flexo là kiểu in cao cho ra hình ảnh thật và sống động, gây ấn tượng cho người dùng. '
    }
    return (
        <section className='md:pt-[5.57rem] md:pr-[11.72rem] md:pl-[43.44rem] bg-[#F5F5F5]'>
            <h2 className='heading text-justify md:!tracking-[-0.17188rem]'>{data?.title}</h2>
            <p className='md:py-[2.5rem] description text-justify !font-normal'>
                {data?.desc}
            </p>
        </section>
    )
}

export default Introduce
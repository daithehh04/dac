import React from 'react'

function Introduce() {
    const data = {
        title: 'Công nghệ in ống đồng được ứng dụng rộng rãi trên thị trường bao bì hiện nay với nhiều ưu điểm nổi trội cho những bao bì có tính linh hoạt cao.',
        desc: 'Kỹ thuật này gọi là in lõm và sử dụng một trục in được mạ đồng dày khoảng 100 microns, các phần tử in (hình ảnh, chữ viết) được khắc sâu và nằm dưới bề mặt trục in, phần tử không in nằm trên bề mặt trục in và hầu hết in ống đồng được in chủ yếu ở dạng cuộn.'
    }
    return (
        <section className='md:pt-[6.15rem] md:pr-[11.72rem] md:pl-[43.44rem] max-md:px-[4.27rem] bg-[#F5F5F5] max-md:pb-[6rem]'>
            <h2 className='heading text-justify md:!tracking-[-0.1375rem] max-md:mb-[4rem]'>{data?.title}</h2>
            <p className='md:py-[2.5rem] description text-justify !font-normal'>
                {data?.desc}
            </p>
        </section>
    )
}

export default Introduce
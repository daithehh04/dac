import React from 'react'
import History from './History'
import img1 from '@/assets/imgs/history-1.jpg'
import img2 from '@/assets/imgs/history2.jpg'
import HistoryMobile from './HistoryMobile'

function IndexJourney() {
  const text = `Được khai sinh từ năm 1963, trải qua 60 năm hình thành và triển phát triển, Công ty Cổ phần Bao bì và In nông nghiệp (APP) đã phần nào khẳng định được vị thế của mình trên thị trường ngành sản xuất bao bì. Đồng thời Công ty cũng cung cấp các giải pháp chống hàng giả, truy xuất nguồn gốc hàng hóa bằng tem kỹ thuật số. <br/>
  Mang sứ mệnh đem đến những sản phẩm bao bì chất lượng nhất tới tay khách hàng, APP làm việc với phương châm suốt những năm hoạt động trong ngành in ấn: “Đáp ứng yêu cầu của Khách hàng không những về yếu tố Chất lượng, Số lượng mà còn giúp Khách hàng hài lòng về vấn đề Giá cả và Tiến độ” <br/>
  Với mục tiêu và tầm nhìn trở thành một trong những doanh nghiệp hàng đầu trong lĩnh vực sản xuất bao bì trên quy mô công nghiệp tại Việt Nam và hơn thế nữa có thể vươn ra trên thị trường quốc tế, APP đã và đang phục vụ những khách hàng của mình một cách tận tâm nhất. `

  const data = [
    {
      year: 1963,
      img: img1,
      text: 'Bộ Nông nghiệp thành lập Tổ in thuộc vụ Tuyên giáo, sau đó lại trực thuộc Vụ Quản lý ruộng đất.'
    },
    {
      year: 1969,
      img: img2,
      text: 'Đổi tên thành Nhà in nông nghiệp'
    },
    {
      year: 1963,
      img: img1,
      text: 'Đổi tên thành Xưởng in vẽ bản đồ'
    },
    {
      year: 1977,
      img: img2,
      text: 'Đổi tên thành Xí nghiệp in nông nghiệp 1'
    },
    {
      year: 1983,
      img: img1,
      text: 'Đổi tên thành Xí nghiệp in nông nghiệp 1'
    },
    {
      year: 1993,
      img: img2,
      text: 'Đổi tên thành Xưởng in vẽ bản đồ'
    },
    {
      year: 2002,
      img: img1,
      text: 'Đổi tên thành Xí nghiệp in nông nghiệp 1'
    },
    {
      year: 2004,
      img: img2,
      text: 'Đổi tên thành Xí nghiệp in nông nghiệp 1'
    }
  ]

  return (
    <div className='mt-[5.31rem]'>
      <div className='content'>
        <h3 className='heading max-md:mb-[5rem]'>Chặng đường APP</h3>
        <p className='lg:text-[1.35417rem] text-[4.26667rem] md:text-[1.5rem] md:mt-[1.6rem] text-justify md:w-[44.375rem]' dangerouslySetInnerHTML={{ __html: `${text}` }}></p>
      </div>
      <History data={data} />
      <HistoryMobile data={data} />
    </div>
  )
}

export default IndexJourney
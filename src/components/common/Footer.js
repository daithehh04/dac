import Image from 'next/image'
import React from 'react'
import logo from '@/assets/imgs/logo-w.svg'

function Footer() {
  return (
    <footer className='footer bg-[#000D10] text-[#888] pt-[4.98rem]'>
      <div className="content">
        <div className="logo">
          <Image src={logo} width={100} height={100} className='object-cover' alt='DAC' />
        </div>
        <div className='flex items-start justify-between mt-[4.58vw]'>
          <div className="left w-[44rem] mr-[10.4rem]">
            <h3 >CÔNG TY CỔ PHẨN BAO BÌ VÀ IN NÔNG NGHIỆP</h3>
            <p> Trụ sở: Tầng 6 tòa nhà APP - Số 72 Trường Chinh – Phương Mai – Đống Đa – Hà Nội <br/> Tel: (84.24) 36895605 – Fax: (84.24) 36895605 <br/> Nhà máy: Lô 3 – CN3 Khu CN Ngọc Hồi -Thanh Trì – Hà Nội <br/> Tel: (84.24) 36840092/3/4 – Fax: (84.24) 36840095 <br/> Email: info@ appmail.vn <br/> Web: www.appprintco.com</p>
          </div>
          <div className="right">
            <h3>CÔNG TY TNHH CÔNG NGHỆ CHỐNG GIẢ DAC</h3>
            <p> Trụ sở: Tầng 6 tòa nhà APP - Số 72 Trường Chinh – Phương Mai – Đống Đa – Hà Nội <br/> Tel: (84.24) 36895605 – Fax: (84.24) 36895605 <br/> Nhà máy: Lô 3 – CN3 Khu CN Ngọc Hồi -Thanh Trì – Hà Nội <br/> Tel: (84.24) 36840092/3/4 – Fax: (84.24) 36840095 <br/> Email: info@ appmail.vn <br/> Web: www.appprintco.com</p>
            <h3>CHI NHÁNH CÔNG TY CỔ PHẦN BAO BÌ VÀ IN NÔNG NGHIỆP TẠI HƯNG YÊN</h3>
            <p> Địa chỉ: Đường C1 – Khu CN Phố Nối A – Xã Lạc Hồng – Huyện Văn Lâm – Hưng Yên <br/> Tel: (0221) 3982136/7 – Fax: (0221) 3982135 <br/> Email: Info@appmail.vn</p>
          </div>
        </div>
        <div className="h-[0.0625vw] w-full bg-[#fff] mt-[1.35417rem]"></div>
        <div className="flex items-center justify-between copy-right py-[3.25rem]">
          <p>Copyright © 2023 AppPrint Co. All rights reserved</p>
          <div className='flex items-center gap-[2rem]'>
            <span>Cookie policy</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
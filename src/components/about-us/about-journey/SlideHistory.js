// 'use client'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import img1 from '@/assets/imgs/history-1.jpg'
// import img2 from '@/assets/imgs/history2.jpg'
// import circle from '@/assets/imgs/circle.svg'
// import Image from 'next/image'

// function SlideHistory() {
//   let dataSlide = [
//     {
//       year: 1963,
//       img: img1,
//       text: 'Bộ Nông nghiệp thành lập Tổ in thuộc vụ Tuyên giáo, sau đó lại trực thuộc Vụ Quản lý ruộng đất.'
//     },
//     {
//       year: 1969,
//       img: img2,
//       text: 'Bộ Nông nghiệp thành lập Tổ in thuộc vụ Tuyên giáo, sau đó lại trực thuộc Vụ Quản lý ruộng đất.'
//     },
//     {
//       year: 1963,
//       img: img1,
//       text: 'Đổi tên thành Xưởng in vẽ bản đồ'
//     },
//     {
//       year: 1977,
//       img: img2,
//       text: 'Đổi tên thành Xí nghiệp in nông nghiệp 1'
//     },
//     {
//       year: 1983,
//       img: img1,
//       text: 'Đổi tên thành Xí nghiệp in nông nghiệp 1'
//     },
//     {
//       year: 1993,
//       img: img2,
//       text: 'Đổi tên thành Xưởng in vẽ bản đồ'
//     },
//     {
//       year: 2002,
//       img: img1,
//       text: 'Đổi tên thành Xí nghiệp in nông nghiệp 1'
//     },
//     {
//       year: 2004,
//       img: img2,
//       text: 'Đổi tên thành Xí nghiệp in nông nghiệp 1'
//     },
//   ]
//   return (
//     <div className='mt-[6.93rem] content slide-history relative mb-[5.3rem]'>
//       <Swiper
//         breakpoints={{
//           768: {
//             slidesPerView: 4
//           }
//         }}
//         slidesPerView={2}
//         spaceBetween={0}
//         loop={false}
//         centeredSlides={false}
//         allowTouchMove={true}
//         speed={1000}
//         className='w-full'
//       >
//         {dataSlide?.map((item, index) => {
//           return (
//             <SwiperSlide key={index * Math.random()}>
//               <div className='mr-[2.76rem] flex justify-center flex-col item-history relative'>
//                 <Image
//                   src={item?.img}
//                   width={'100%'}
//                   height={'100%'}
//                   alt='history'
//                   className='object-cover h-[15.1rem] image'
//                 />
//                 <p className='mt-[1.4rem] text-[1.41rem] lg:text-[1.35417rem] line-clamp-3 min-h-[4.5rem]'>{item?.text}</p>
//                 <span className='text-[#444] font-bold text-[1.875rem] text-center block year'>{item?.year}</span>
//                 <Image src={circle} width={'100%'} height={'100%'} alt='circle' className='absolute bottom-0 left-[50%] w-[0.9375rem] h-[0.9375rem] object-cover circle' />
//               </div>
//             </SwiperSlide>
//           )
//         })}
//       </Swiper>
//       <div className='line absolute top-[calc(50%)]'></div>
//     </div>
//   )
// }

// export default SlideHistory

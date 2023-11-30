'use client'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import imgBox1 from '@/assets/imgs/Tissues_050000.png'
import imgBox2 from '@/assets/imgs/Tissues_050001.png'
import imgBox3 from '@/assets/imgs/Tissues_050002.png'
import imgBox4 from '@/assets/imgs/Tissues_050003.png'
import imgBox5 from '@/assets/imgs/Tissues_050004.png'
import imgBox6 from '@/assets/imgs/Tissues_050005.png'
import imgBox7 from '@/assets/imgs/Tissues_050006.png'
import imgBox8 from '@/assets/imgs/Tissues_050007.png'
import imgBox9 from '@/assets/imgs/Tissues_050008.png'
import imgBox10 from '@/assets/imgs/Tissues_050009.png'
import imgBox11 from '@/assets/imgs/Tissues_050010.png'
import imgBox12 from '@/assets/imgs/Tissues_050011.png'
import imgBox13 from '@/assets/imgs/Tissues_050012.png'
import imgBox14 from '@/assets/imgs/Tissues_050013.png'
import imgBox15 from '@/assets/imgs/Tissues_050014.png'
import imgBox16 from '@/assets/imgs/Tissues_050015.png'
import imgBox17 from '@/assets/imgs/Tissues_050016.png'
import imgBox18 from '@/assets/imgs/Tissues_050017.png'
import imgBox19 from '@/assets/imgs/Tissues_050018.png'
import imgBox20 from '@/assets/imgs/Tissues_050019.png'
import imgBox21 from '@/assets/imgs/Tissues_050020.png'
import imgBox22 from '@/assets/imgs/Tissues_050021.png'
import imgBox23 from '@/assets/imgs/Tissues_050022.png'
import imgBox24 from '@/assets/imgs/Tissues_050023.png'
import imgBox25 from '@/assets/imgs/Tissues_050024.png'
import imgBox26 from '@/assets/imgs/Tissues_050025.png'
import imgBox27 from '@/assets/imgs/Tissues_050026.png'
import imgBox28 from '@/assets/imgs/Tissues_050027.png'
import imgBox29 from '@/assets/imgs/Tissues_050028.png'
import imgBox30 from '@/assets/imgs/Tissues_050029.png'
import imgBox31 from '@/assets/imgs/Tissues_050030.png'
import imgBox32 from '@/assets/imgs/Tissues_050031.png'
import imgBox33 from '@/assets/imgs/Tissues_050032.png'
import imgBox34 from '@/assets/imgs/Tissues_050033.png'
import imgBox35 from '@/assets/imgs/Tissues_050034.png'
import imgBox36 from '@/assets/imgs/Tissues_050035.png'
import imgBox37 from '@/assets/imgs/Tissues_050036.png'
import imgBox38 from '@/assets/imgs/Tissues_050037.png'
import imgBox39 from '@/assets/imgs/Tissues_050038.png'
import imgBox40 from '@/assets/imgs/Tissues_050039.png'
import imgBox41 from '@/assets/imgs/Tissues_050040.png'
import imgBox42 from '@/assets/imgs/Tissues_050041.png'
import imgBox43 from '@/assets/imgs/Tissues_050042.png'
import imgBox44 from '@/assets/imgs/Tissues_050043.png'
import imgBox45 from '@/assets/imgs/Tissues_050044.png'
import imgBox46 from '@/assets/imgs/Tissues_050045.png'
import imgBox47 from '@/assets/imgs/Tissues_050046.png'
import imgBox48 from '@/assets/imgs/Tissues_050047.png'
import imgBox49 from '@/assets/imgs/Tissues_050048.png'
import imgBox50 from '@/assets/imgs/Tissues_050049.png'
import imgBox51 from '@/assets/imgs/Tissues_050050.png'
import imgBox52 from '@/assets/imgs/Tissues_050051.png'
import imgBox53 from '@/assets/imgs/Tissues_050052.png'
import imgBox54 from '@/assets/imgs/Tissues_050053.png'
import imgBox55 from '@/assets/imgs/Tissues_050054.png'
import imgBox56 from '@/assets/imgs/Tissues_050055.png'
import imgBox57 from '@/assets/imgs/Tissues_050056.png'
import imgBox58 from '@/assets/imgs/Tissues_050057.png'
import imgBox59 from '@/assets/imgs/Tissues_050058.png'
import imgBox60 from '@/assets/imgs/Tissues_050059.png'
import imgBox61 from '@/assets/imgs/Tissues_050060.png'
import imgBox62 from '@/assets/imgs/Tissues_050061.png'
import imgBox63 from '@/assets/imgs/Tissues_050062.png'
import imgBox64 from '@/assets/imgs/Tissues_050063.png'
import imgBox65 from '@/assets/imgs/Tissues_050064.png'
import imgBox66 from '@/assets/imgs/Tissues_050065.png'
import imgBox67 from '@/assets/imgs/Tissues_050066.png'
import imgBox68 from '@/assets/imgs/Tissues_050067.png'
import imgBox69 from '@/assets/imgs/Tissues_050068.png'
import imgBox70 from '@/assets/imgs/Tissues_050069.png'
import imgBox71 from '@/assets/imgs/Tissues_050070.png'
import imgBox72 from '@/assets/imgs/Tissues_050071.png'
import imgBox73 from '@/assets/imgs/Tissues_050072.png'
import imgBox74 from '@/assets/imgs/Tissues_050073.png'
import imgBox75 from '@/assets/imgs/Tissues_050074.png'
import imgBox76 from '@/assets/imgs/Tissues_050075.png'
import imgBox77 from '@/assets/imgs/Tissues_050076.png'
import imgBox78 from '@/assets/imgs/Tissues_050077.png'
import imgBox79 from '@/assets/imgs/Tissues_050078.png'
import imgBox80 from '@/assets/imgs/Tissues_050079.png'
import imgBox81 from '@/assets/imgs/Tissues_050080.png'
import imgBox82 from '@/assets/imgs/Tissues_050081.png'
import imgBox83 from '@/assets/imgs/Tissues_050082.png'
import imgBox84 from '@/assets/imgs/Tissues_050083.png'
import imgBox85 from '@/assets/imgs/Tissues_050084.png'
import imgBox86 from '@/assets/imgs/Tissues_050085.png'
import imgBox87 from '@/assets/imgs/Tissues_050086.png'
import imgBox88 from '@/assets/imgs/Tissues_050087.png'
import imgBox89 from '@/assets/imgs/Tissues_050088.png'
import imgBox90 from '@/assets/imgs/Tissues_050089.png'
import imgBox91 from '@/assets/imgs/Tissues_050090.png'
import imgBox92 from '@/assets/imgs/Tissues_050091.png'
import imgBox93 from '@/assets/imgs/Tissues_050092.png'
import imgBox94 from '@/assets/imgs/Tissues_050093.png'
import imgBox95 from '@/assets/imgs/Tissues_050094.png'
import imgBox96 from '@/assets/imgs/Tissues_050095.png'
import imgBox97 from '@/assets/imgs/Tissues_050096.png'
import imgBox98 from '@/assets/imgs/Tissues_050097.png'
import { useMediaQuery } from 'react-responsive'
function Banner({ lang, dataBanner }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
  gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default
  //       const locomotiveScroll = new LocomotiveScroll(
  //         {
  //           lenisOptions: {
  //             wrapper: window,
  //             content: document.documentElement,
  //             lerp: 0.1,
  //             duration: 1.2,
  //             orientation: 'vertical',
  //             gestureOrientation: 'vertical',
  //             smoothWheel: true,
  //             smoothTouch: true,
  //             wheelMultiplier: 1,
  //             touchMultiplier: 0.5,
  //             normalizeWheel: true,
  //             easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  //           }
  //         }
  //       );
  //     }
  //   )()
  // }, [])

  useEffect(() => {
    const list = document.querySelectorAll(".tissue")
    list.forEach((item, index) => {

      ScrollTrigger.create({
        trigger: '.frame',
        start: `start+=${isMobile ? window.innerWidth * 0.01 * index : window.innerWidth * 0.02 * index}vw`,
        onEnter: self => {
          // item.classList.add("active")
          gsap.to(item, {
            zIndex:'10',
            opacity:'1',
            duration:'0'
          })
          for (let i = 0; i < list.length; i++) {
            if (index !== i) {
              // list[i].classList.remove("active")
              gsap.to(list[i], {
                zIndex:'1',
                opacity:'0',
                duration:'0'
              })
            }
          }
        },
        onLeaveBack: self => {
          // item.classList.remove("active")
          gsap.to(item, {
            zIndex:'1',
            opacity:'0',
            duration:'0'
          })
          for (let i = 0; i < list.length; i++) {
            if (index == 0) {
              // list[0].classList.add("active")
              gsap.to(list[0], {
                zIndex:'10',
                opacity:'1',
                duration:'0'
              })
            }
            else {
              if (i !== index - 1) {
                // list[i].classList.remove("active")
                gsap.to(list[i], {
                  zIndex:'1',
                  opacity:'0',
                  duration:'0'
                })
              }
              else {
                // list[i].classList.add("active")
                gsap.to(list[i], {
                  zIndex:'10',
                  opacity:'1',
                  duration:'0'
                })
              }
            }
          }
        },
      })
    })
  }, [])
  return (
    <>
      <section className='banner banner_home relative md:w-full md:h-[300vw] xl:h-[170vw] lg:h-[250vw] h-[250vw] max-md:flex flex-col md:justify-center items-center frame '>
        <div className='flex sticky_box items-center sticky max-md:pt-[10rem] max-md:w-full top-0 md:h-[95vh] justify-between  md:border-b border-solid border-[#888] max-md:flex-col'>
          <div className='flex justify-center'>
            <div className='lg:w-[48.02rem] lg:h-[45.8rem]  md:w-[45rem] md:h-[45rem] w-[74.3464rem] h-[74rem] relative'>
            <Image alt="tissue-picture" src={imgBox1} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue active'></Image>
            <Image alt="tissue-picture" src={imgBox2} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox3} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox4} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox5} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox6} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox7} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox8} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox9} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox10} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox11} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox12} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox13} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox14} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox15} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox16} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox17} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox18} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox19} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox20} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox21} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox22} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox23} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox24} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox25} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox26} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox27} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox28} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox29} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox30} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox31} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox32} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox33} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox34} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox35} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox36} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox37} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox38} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox39} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox40} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox41} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox42} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox43} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox44} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox45} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox46} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox47} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox48} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox49} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox50} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox51} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox52} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox53} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox54} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox55} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox56} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox57} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox58} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox59} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox60} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox61} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox62} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox63} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox64} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox65} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox66} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox67} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox68} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox69} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox70} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox71} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox72} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox73} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox74} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox75} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox76} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox77} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox78} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox79} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox80} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox81} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox82} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox83} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox84} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox85} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox86} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox87} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox88} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox89} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox90} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox91} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox92} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox93} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox94} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox95} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox96} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox97} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            <Image alt="tissue-picture" src={imgBox98} width={800} height={795} priority={true} className='w-full h-full absolute top-0 left-0 object-contain tissue'></Image>
            </div>
          </div>
          <div className='flex max-md:flex-row-reverse justify-center items-center md:mr-[6rem] '>
            <h2 className='lg:text-[3.4375rem] text-[4.5rem] max-md:text-[6.93333rem] max-md:w-[43rem] leading-[1.2] font-bold md:w-[30rem] lg:w-[25rem] text-start md:text-end'>{dataBanner?.textfeature}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-[5.96302rem] md:w-[7rem] md:h-[9.7rem] lg:h-[7.69896rem] mw-[11.20427rem] h-[13.9rem]' viewBox="0 0 115 149" fill="none">
              <path d="M90.6716 113.444L115 144.819H93.2724L80.3632 128.292C75.1616 134.719 69.9058 139.41 64.5823 142.351C57.8907 146.153 49.9664 148.061 40.8094 148.061C26.0173 148.061 15.0587 143.083 7.93354 133.112C2.97576 126.169 0.510437 118.393 0.510437 109.8C0.510437 99.5717 2.5694 91.2941 6.68734 84.9676C10.8053 78.641 19.0276 71.7406 31.3408 64.2664C26.0173 57.2513 22.4005 51.8716 20.477 48.1417C18.0659 43.2927 16.8603 38.0421 16.8603 32.4042C16.8603 23.4237 19.583 15.9782 25.0284 10.082C31.097 3.52593 39.1432 0.240723 49.1671 0.240723C59.1911 0.240723 67.1831 3.38247 72.7505 9.68032C77.5728 15.06 79.9975 21.8456 79.9975 30.0371C79.9975 39.0177 77.207 46.9223 71.6397 53.7366C68.4835 57.6673 63.0381 62.3871 55.2899 67.896L80.3632 99.2704C81.9075 94.8806 82.9912 91.3371 83.6143 88.6545C84.2374 85.9718 84.9417 81.998 85.7545 76.7617H101.725C101.725 81.6106 100.763 87.1481 98.8534 93.3886C96.9298 99.6147 94.2071 106.3 90.6852 113.444H90.6716ZM71.6397 116.199L40.8094 76.3744C32.0858 82.2705 26.3288 86.9043 23.5384 90.2468C19.3256 95.2249 17.226 101.322 17.226 108.538C17.226 116.6 20.4093 122.869 26.7894 127.317C31.5575 130.659 36.5966 132.338 41.9201 132.338C54.3688 132.338 64.2707 126.958 71.6397 116.213V116.199ZM46.5663 56.204C51.8899 52.4741 55.6014 49.2606 57.7146 46.5636C61.6699 41.8438 63.6612 36.7223 63.6612 31.2278C63.6612 25.7334 61.9544 21.2288 58.5544 18.5461C56.0078 16.509 52.8923 15.5048 49.1807 15.5048C43.1121 15.5048 38.6827 17.5419 35.9058 21.6018C34.1042 24.2988 33.2101 27.4979 33.2101 31.2422C33.2101 35.2447 34.795 39.8641 37.9512 45.1147C40.2404 48.9163 43.1257 52.6176 46.5934 56.2327L46.5663 56.204Z" fill="#444545"/>
            </svg>
          </div>
        <p className='uppercase md:text-[1.8rem] relative md:absolute md:pl-[4.17rem] md:pb-[4.58rem] bottom-0 lg:text-[1.25rem] text-[3.36rem] font-bold text-[#444] max-md:mt-[2.46rem] max-md:mb-[5.9rem] max-md:text-center'>{dataBanner?.slogan}</p>
          <div className='border-b border-solid border-[#888] w-full md:hidden mx-[4.27rem]'></div>
        </div>
      </section>
    </>
  )
}

export default Banner
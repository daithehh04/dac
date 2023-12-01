'use client'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useLayoutEffect, useRef,useState } from 'react';
import { useMediaQuery } from 'react-responsive'
function Banner({ lang, dataBanner }) {
  const [scroll,setScroll] = useState()

  // useEffect(()=>{
  //   window.addEventListener('scroll',(e)=>{
  //     setScroll(e.scrollY)
  //   })
  // },[])
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const list = document.querySelectorAll(".tissue")
    list.forEach((item, index) => {

      ScrollTrigger.create({
        trigger: '.frame',
        start: `start+=${isMobile ? window.innerWidth * 0.05 * index : window.innerWidth * 0.02 * index}vw`,
        onEnter: self => {
          gsap.to(item, {
            zIndex:'10',
            opacity:'1',
            duration:'0'
          })
          for (let i = 0; i < list.length; i++) {
            if (index !== i) {
              gsap.to(list[i], {
                zIndex:'1',
                opacity:'0',
                duration:'0'
              })
            }
          }
        },
        onLeaveBack: self => {
          gsap.to(item, {
            zIndex:'1',
            opacity:'0',
            duration:'0'
          })
          for (let i = 0; i < list.length; i++) {
            if (index == 0) {
              gsap.to(list[0], {
                zIndex:'10',
                opacity:'1',
                duration:'0'
              })
            }
            else {
              if (i !== index - 1) {
                gsap.to(list[i], {
                  zIndex:'1',
                  opacity:'0',
                  duration:'0'
                })
              }
              else {
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
      <section className='banner banner_home relative md:w-full md:h-[300vw] xl:h-[170vw] lg:h-[250vw] h-[400vw] max-md:flex flex-col md:justify-center items-center frame '>
        <div className='flex sticky_box items-center sticky max-md:pt-[10rem] max-md:w-full top-0 md:h-[95vh] justify-between  md:border-b border-solid border-[#888] max-md:flex-col'>
          <div className='flex justify-center'>
            <div className='lg:w-[48.02rem] lg:h-[45.8rem]  md:w-[45rem] md:h-[45rem] w-[74.3464rem] h-[74rem] relative'>
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050000.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue active' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050001.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050002.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050003.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050004.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050005.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050006.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050007.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050008.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050009.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050010.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050011.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050012.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050013.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050014.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050015.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050016.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050017.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050018.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050019.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050020.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050021.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050022.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050023.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050024.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050025.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050026.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050027.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050028.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050029.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050030.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050031.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050032.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050033.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050034.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050035.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050036.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050037.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050038.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050039.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050040.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050041.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050042.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050043.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050044.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050045.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050046.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050047.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050048.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050049.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050050.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050051.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050052.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050053.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050054.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050055.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050056.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050057.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050058.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050059.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050060.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050061.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050062.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050063.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050064.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050065.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050066.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050067.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050068.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050069.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050070.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050071.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050072.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050073.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050074.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050075.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050076.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050077.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050078.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050079.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050080.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050081.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050082.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050083.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050084.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050085.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050086.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050087.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050088.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050089.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050090.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050091.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050092.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050093.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050094.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050095.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050096.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
            <img alt="tissue-picture" src='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Tissues_050097.png' fetchPriority='high'  className='w-full h-full absolute top-0 left-0 object-contain tissue' />
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
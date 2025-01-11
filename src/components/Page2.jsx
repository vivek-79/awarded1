import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);


function Page2() {

    const pageRef= useRef(null);
    const [progress,setProgress] = useState(0);
    useGSAP(()=>{
            gsap.to('.dk-mod',{

                scrollTrigger:{
                    scroller:'body',
                    trigger:'.dk-mod',
                    start:'top center',
                    end:'bottom center',
                    onEnter: () => {
                        document.body.classList.add('dark');  // Add 'dark' class to enable dark mode
                    },
                    onLeaveBack: () => {
                        document.body.classList.remove('dark');  // Remove 'dark' class when scrolling back
                    },
                    onLeave: () => {
                        document.body.classList.remove('dark');  // Remove 'dark' class when scrolling past the section
                    },
                    onEnterBack: () => {
                        document.body.classList.add('dark');  // Re-add 'dark' class when scrolling back into the section
                    },
                    onUpdate:(self)=>{
                        setProgress((self.progress*100).toFixed(1));
                    }
                }
            })
    },[])

    console.log(progress)
  return (
    <section ref={pageRef} className='w-full min-h-dvh px-2 md:px-4 overflow-hidden dark:bg-black dark:text-white dk-mod relative'>
        <div className='w-full min-h-dvh md:flex md:gap-2'>
            <div className='md:min-h-dvh h-32 md:w-[40%] flex items-center justify-center'>
                <p className='text-black dark:text-violet-50/60 md:text-xs w-64 '><b className='text-black/60 dark:text-violet-50'>Our backers</b> include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.</p>
            </div>
            <div className='h-fit md:w-[50%] flex flex-col items-start gap-1'>  
                <AnimatedTitle title='O<b>u</b>r partners' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}/>
                <AnimatedTitle title='coinbase venture' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>0 && progress<6.7)?'yellow':''}/>
                <AnimatedTitle title='pantera capital' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>6.6 && progress<13.3)?'yellow':''}/>
                <AnimatedTitle title='skyvision capital' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50` } styl= {(progress>13.2 && progress<19.8)?'yellow':''}/>
                <AnimatedTitle title='defiance capital' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>19.7 && progress<26.4)?'yellow':''}/>
                <AnimatedTitle title='animoca brands' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>26.3 && progress<33)?'yellow':''}/>
                <AnimatedTitle title='vessel capital' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>32.9 && progress<39.6)?'yellow':''}/>
                <AnimatedTitle title='play venture' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>39.5 && progress<46.2)?'yellow':''}/>
                <AnimatedTitle title='binance lab' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>46.1 && progress<52.8)?'yellow':''}/>
                <AnimatedTitle title='arche fund' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>52.7 && progress<59.4)?'yellow':''}/>
                <AnimatedTitle title='marblex' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>59.3 && progress<66)?'yellow':''}/>
                <AnimatedTitle title='fnatic' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>65.9 && progress<72.6)?'yellow':''}/>
                <AnimatedTitle title='jambo' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>72.5 && progress<79.2)?'yellow':''}/>
                <AnimatedTitle title='xset' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>79.1 && progress<85.8)?'yellow':''}/>
                <AnimatedTitle title='aws' containerClas={`!display-inline !text-[3rem] lg:!text-[3rem] xl:!text-[3.7rem] !text-black dark:!text-violet-50`}  styl= {(progress>85.7 && progress<100)?'yellow':''}/>
            </div>
        </div>
    </section>
  )
}

export default Page2
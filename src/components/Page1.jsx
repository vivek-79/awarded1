import React, { useRef, useState } from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button';

function Page1() {

    const [hovered,setHovered] = useState(0)
    const itemRef = useRef(null);
    const[transformStyle,setTransformStyle] = useState('')
    const handleMouseEnter =(e,ind)=>{
        setHovered(ind)

    }

    const handleMouseLeave =()=>{
        setHovered(0);
        setTransformStyle('');
    }

    const handleMouseMove = (e)=>{
        if(!itemRef.current) return;

        
        const {left,top,width,height} = itemRef.current.getBoundingClientRect();
        const relativeX =(e.clientX-left)/width;
        const relativeY = (e.clientY-top)/height;

        const tiltX=(relativeY -0.5)*60;
        const tiltY=(relativeX -0.5)*-60;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
        setTransformStyle(newTransform);
    }
  return (
    <div className='min-h-dvh w-full relative py-8 px-2 md:px-8  md:py-12 dark:bg-black flex flex-col items-center overflow-hidden'>
        <p className='font-general text-sm font-bold'>WHO WE ARE</p>
        <div className='w-full h-full relative py-8 flex flex-col items-center gap-1 justify-center sm:-ml-6 '>
            <AnimatedTitle title='we&apos;re b<b>u</b>ilding ' containerClas='!text-black md:!text-[6rem] !text-6xl max-sm:!text-[3rem]'/>
            <div className='flex'>
                <AnimatedTitle title='new' containerClas='!text-black md:!text-[6rem] !text-6xl max-sm:!text-[3rem]'/>
                <div onMouseEnter={(e)=>handleMouseEnter(e,1)} className='z-10 relative w-7 h-7 md:w-10 md:h-10 bg-black dark:bg-violet-50 self-center rounded-md  '>
                        { hovered ==1 &&
                         <div ref={itemRef} style={{transform:transformStyle,transition:'transform 0.1s ease-out'}} onMouseMove={(e)=>handleMouseMove(e)} onMouseLeave={handleMouseLeave}  className='overflow-hidden z-50 rounded-md absolute -mt-6 -ml-10 h-32 w-48 md:h-40 md:w-60 bg-transparent'>
                         <video 
                        src='/videos/hero-1.mp4'
                        autoPlay
                        muted
                        loop
                        className='size-full object-cover object-center'
                        />
                    </div> 
                        }
                </div>
                <AnimatedTitle title='realit<b>y</b>' containerClas='!text-black md:!text-[6rem] !text-6xl max-sm:!text-[3rem]'/>
            </div>
            <AnimatedTitle title='th<b>a</b>t rew<b>a</b>rds' containerClas='!text-black md:!text-[6rem] !text-6xl max-sm:!text-[3rem]'/>
            <div  className='flex'>
                <AnimatedTitle title='pla<b>y</b>ers' containerClas='!text-black md:!text-[6rem] !text-6xl max-sm:!text-[3rem]'/>
                <div onMouseEnter={(e)=>handleMouseEnter(e,2)} className='z-10 relative w-7 h-7 md:w-10 md:h-10 dark:bg-violet-50 bg-black self-center rounded-md'>
                        { hovered ==2 &&
                         <div ref={itemRef} style={{transform:transformStyle,transition:'transform 0.1s ease-out'}} onMouseMove={(e)=>handleMouseMove(e)} onMouseLeave={handleMouseLeave}  className='overflow-hidden z-50 rounded-md absolute -mt-6 -ml-10 h-32 w-48 md:h-40 md:w-60 bg-transparent'>
                         <video 
                        src='/videos/hero-2.mp4'
                        autoPlay
                        muted
                        loop
                        className='size-full object-cover object-center'
                        />
                    </div> 
                        }
                </div>
                <AnimatedTitle title='and' containerClas='!text-black md:!text-[6rem] !text-6xl max-sm:!text-[3rem]'/>
            </div>
            <AnimatedTitle title='e<b>m</b>powers' containerClas='!text-black md:!text-[6rem] !text-6xl max-sm:!text-[3rem]'/>
            <AnimatedTitle title='hu<b>m</b>ans & ai' containerClas='!text-black md:!text-[6rem] !text-6xl max-sm:!text-[3rem]'/>
            <div className='flex'>
                <AnimatedTitle title='to' containerClas='!text-black md:!text-[6rem] !text-6xl max-sm:!text-[3rem]'/>
                <div onMouseEnter={(e)=>handleMouseEnter(e,3)} className='z-10 relative w-7 h-7 md:w-10 md:h-10 dark:bg-violet-50 bg-black self-center rounded-md '>
                        { hovered ==3 &&
                         <div ref={itemRef} style={{transform:transformStyle,transition:'transform 0.1s ease-out'}} onMouseMove={(e)=>handleMouseMove(e)} onMouseLeave={handleMouseLeave}  className='overflow-hidden z-50 rounded-md absolute -mt-6 -ml-10 h-32 w-48 md:h-40 md:w-60 bg-transparent'>
                         <video 
                        src='/videos/hero-3.mp4'
                        autoPlay
                        muted
                        loop
                        className='size-full object-cover object-center'
                        />
                    </div> 
                        }
                </div>
                <AnimatedTitle title='thri<b>v</b>e' containerClas='!text-black md:!text-[6rem] !text-6xl dark:text-white max-sm:!text-[3rem]'/>
            </div>
            <p className='w-64 text-center mt-8 leading-4 font-circular-web dark:text-violet-50'>
            Zentry envisions a future where players, emerging tech, and a new economy unite at the convergence of gaming and AI.
            </p>
            <Button containerClas='mt-8 !bg-black !text-white dark:!bg-violet-50 dark:!text-black' title='discover who we are'/>
        </div>
    </div>
  )
}
export default Page1
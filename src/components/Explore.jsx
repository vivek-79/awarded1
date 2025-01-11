import React, { useEffect, useState } from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


function Explore() {

    const [progres,setProgres] = useState(0);
    const [clip,setClip] = useState('')
    useGSAP(() => {
         gsap.to('#explore', {
          scrollTrigger: {
            trigger: '#explore',
            start: 'center center',
            end: '+=1000 center',
            pin: true,  // Pin the element during the scroll
            pinSpacing: true,  // Space for the pinned element
            scrub: 0.5,  // Smoothly scrub the animation based on scroll positio
            
            onUpdate: (self) => {
                // self.progress gives you the percentage of the scroll progress
                setProgres((self.progress * 100).toFixed() );
              },
            onEnter: () => {
                gsap.set('#explore', { backgroundColor: 'yellow' });
            },
            onEnterBack: () => {
                gsap.set('#explore', { backgroundColor: 'yellow' });
            },
            onLeave: () => {
                console.log('onLeave triggered'); 
                gsap.set('#explore', { backgroundColor:'#dfdff0' });
            },
          }
        });
    }, []);
    
    useEffect(() => {
        // Animate based on the progress value
        let animationParams = {
            y: '20px',  // Define the initial Y offset for the animation
            opacity: 0,
            duration: 1,
        };

        // Customize animation parameters based on 'progres' value
        if (progres ==1) {
            gsap.from('.fade-up', animationParams);
        } else if (progres==34) {
            gsap.from('.fade-up', animationParams);
        }
        else if (progres ==68) {
            gsap.from('.fade-up', animationParams);
        }

        // Apply the animation once
        
    }, [progres]);

    useGSAP(()=>{
        gsap.to('.inner-cube', {
            rotate: 135,     // Rotate the element by 45 degrees
            duration: 1,    // Duration of 1 second for each cycle
            repeat: -1,
            stagger:1,
               // Repeat indefinitel
            ease: 'linear', // Linear easing for continuous, smooth animation
        });
        gsap.to('.triangl', {
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
               // Rotate the element by 45 degrees
            duration: 1,    // Duration of 1 second for each cycle
            repeat: -1,
               // Repeat indefinitel
            ease: 'linear', // Linear easing for continuous, smooth animation
        });
        
    },[])
  return (
    <section id='explore' className='min-h-dvh w-screen relative -mt-10'>
        <div id='heading' className='h-64 w-fit'>
            <AnimatedTitle title='The univ<b>e</b>rse <br/> powered by Ze<b>n</b>t' containerClas='!text-black !text-7xl mt-10'/>
            <Button title='Enter Vault' containerClas='!bg-black text-white ms-16 mt-10 py-5 px-9'/>
        </div>
        <div className='absolute left-6 bottom-16'>
            <ul className=' flex flex-col gap-4'>
                <li className='flex gap-7 '>
                    <div className=' font-general text-xl md:text-xs md:mt-[5px] flex flex-col relative'>
                        <p className={`${progres<33 ?'' :'text-black/50'}`}>01</p>
                        <div className='w-[1.5px] bg-black/30 h-full ml-2 relative'> <div className={`w-[1.5px] bg-black  absolute`} style={{height:`${progres*3}%`}}></div></div>
                    </div>
                    <div className='flex flex-col w-full md:w-1/3 pr-4'><p className={`text-xl ${progres<33 ?'' :'text-black/50'}`}>Shaping Zentry Continuously</p>{(progres<33)&&<p className='md:text-xs text-black/60  leading-5 text-xl fade-up' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt repellat ipsa quisquam, id exercitationem odio totam dolores itaque labore dolorem quaerat. Est ad digniss</p>}</div>
                </li>
                <li className='flex gap-7 '>
                    <div className='font-general text-xl md:text-xs md:mt-[5px] flex flex-col relative'>
                        <p className={`${progres>33&& progres<68 ?'' :'text-black/50'}`}>02</p>
                        <div className='w-[1.5px] bg-black/30 h-full ml-2 relative'> <div className={`w-[1.5px] bg-black  absolute`} style={{height:`${(progres-32)*3}%`}}></div></div>
                    </div>
                    <div className='flex flex-col w-full md:w-1/3 pr-4'><p className={`text-xl ${progres>33&& progres<68 ?'' :'text-black/50'}`}>Shaping Zentry Continuously</p>{(progres>33 && progres<67 )&&<p className='md:text-xs text-black/60 text-xl leading-5 fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt repellat ipsa quisquam, id exercitationem odio totam dolores itaque labore dolorem quaerat. Est ad digniss</p>}</div>
                </li>
                <li className='flex gap-7 '>
                    <div className='font-general text-xl md:text-xs md:mt-[5px] flex flex-col relative'>
                        <p className={`${progres>68 ?'' :'text-black/50'}`}>03</p>
                        <div className='w-[1.5px] bg-black/30 h-full ml-2 relative'> <div className={`w-[1.5px] bg-black  absolute`} style={{height:`${(progres-66)*3}%`}}></div></div>
                        </div>
                    <div className='flex flex-col w-full md:w-1/3 pr-4'><p className={`text-xl ${progres>68 ?'' :'text-black/50'}`}>Shaping Zentry Continuously</p>{(progres>67 )&&<p className='md:text-xs text-xl text-black/60  leading-5 fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt repellat ipsa quisquam, id exercitationem odio totam dolores itaque labore dolorem quaerat. Est ad digniss</p>}</div>
                </li>
            </ul>
        </div>
        <div className='w-32 h-32 md:w-64 md:h-64 absolute max-md:bottom-[15vh] max-md:left-1/2 max-md:-translate-x-1/2 right-32 bottom-32 flex items-center justify-center'>
            <div  className='w-[5.7rem] h-[5.5rem] md:w-[9.1rem] md:h-[9.1rem] bg-black rotate-45 inner-cube'></div>
            <div className='size-full md:size-52 fixed bg-transparent inner-cube'>
                <div className='absolute w-full md:h-28 h-12 bg-black md:-top-28 -top-12 triangl' style={{clipPath: `polygon(50% 100%, 100% 100%, 0% 100%)`}}></div>
                <div className='absolute w-full md:h-28 h-12 bg-black -rotate-90 triangl md:-ml-40 md:mt-12 -ml-[5.5rem] mt-10' style={{clipPath: `polygon(50% 100%, 100% 100%, 0% 100%)`}}></div>
                <div className='absolute w-full md:h-28 h-12 bg-black rotate-90 triangl md:ml-40 md:mt-12 ml-[5.5rem] mt-10' style={{clipPath: `polygon(50% 100%, 100% 100%, 0% 100%)`}}></div>
                <div className='absolute w-full md:h-28 h-12 bg-black triangl rotate-180 md:mt-52 mt-32' style={{clipPath: `polygon(50% 100%, 100% 100%, 0% 100%)`}}></div>
            </div>
        </div>
    </section>
  )
}

export default Explore
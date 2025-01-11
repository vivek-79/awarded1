import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

function Button({title,id,rightIcon,leftIcon,containerClas}) {

  const cardMusicRef =useRef(null);
  const buttonRef= useRef(null);
  const [animated,setAnimated] = useState(false)
        const handleMouseOver =()=>{
            if(! animated){
                gsap.from(buttonRef.current,{
                    y:'20px',
                    duration:0.5,
                    opacity:0,
    
                })
                setAnimated(true);
            }
        }
        const handleMouseLeave = ()=>{
            gsap.to(buttonRef.current, {
                y: '0px',
                opacity: 1,
                duration: 0.5,
            });
            setAnimated(false);
        }
      const cardEnterMusic =()=>{
      
          cardMusicRef.current.currentTime=0;
          cardMusicRef.current.volume=1;
          handleMouseOver();
          cardMusicRef.current.play().then(()=>{
              cardMusicRef.current.addEventListener('timeupdate',handleTimeUpdate);
          }).catch((error)=>{
              console.log('error while audio play',error);
          })
      }
  
      const handleTimeUpdate =()=>{
          if (cardMusicRef.current.currentTime >= 2) {
              cardMusicRef.current.pause();
              // Remove the event listener to avoid unnecessary checks
              cardMusicRef.current.removeEventListener("timeupdate", handleTimeUpdate);
            }
      }

  return (
    <button id={id} onMouseEnter={cardEnterMusic} onMouseLeave={handleMouseLeave} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full
    bg-violet-50 px-7 py-3 text-black hover:rounded-lg ${containerClas}`}>
        {leftIcon}
        <span className='relative incline-flex overflow-hidden font-general
        text-xs uppercase'>
            <div ref={buttonRef}>
                {title}
            </div>
        </span>
        <audio ref={cardMusicRef} src='/audio/ui.mp3' preload='auto' className='hidden'/>
        {rightIcon}
    </button>
  )
}

export default Button
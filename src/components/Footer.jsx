import React, { useRef, useState } from 'react'
import{FaDiscord, FaGithub, FaTwitch, FaTwitter} from 'react-icons/fa'

const links =[
    { href:'https://discord.com',icon:<FaDiscord/>},
    { href:'https://twitter.com',icon:<FaTwitter/>},
    { href:'https://github.com',icon:<FaGithub/>},
    { href:'https://twitch.com',icon:<FaTwitch/>},
]

function Footer() {

    const zentryRef = useRef(null);
    const [transformStyle,setTransformstyle] = useState('')
    const handleMouseMove =(e)=>{

        if(!zentryRef.current) return;

        const {left,top,height,width} = zentryRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left)/width;
        const relativeY = (e.clientY - top)/height;

        const tiltX = (relativeY - 0.5) * -90;
        const tiltY = (relativeX - 0.5) * 40;

        const newTransformStyle =(`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateX(${relativeX*300}px)`);

        setTransformstyle(newTransformStyle);
    }

    const handleMouseLeave =()=>{
        setTransformstyle('')
    }
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div ref={zentryRef} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} className='flex items-center justify-center overflow-hidden'>
            <p   className='font-zentry text-[40vw] ' style={{transform:transformStyle,transition:'transform 0.1s ease-out '}}>ZENTRY</p>
        </div>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left'>&copy;Nova 2025. All rights reserved</p>

            <div className='flex justify-center gap-4 md:justify-start'>
                { links.map((link)=>(
                    <a key={link} href={link.href} target='_blank' rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                        {link.icon}
                    </a>
                ))}
            </div>

            <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>
                Privacy policy
            </a>
        </div>

    </footer>
  )
}

export default Footer
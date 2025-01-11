import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img
            className='size-full object-cover object-center'
            src={src}
        />
    </div>
)

function Page3() {
    return (
        <section id='contact' className='py-20 min-h-96 w-screen px-10 overflow-hidden relative dark:bg-black'>
            <div className=' bg-black rounded-lg py-24 text-blue-50 sm:overflow-hidden  relative'>

                <div className='absolute -left-20 top-0  hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
                    <ImageClipBox clipClass='contact-clip-path-1' src='/img/contact-1.webp' />
                    <ImageClipBox clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60' src='/img/contact-2.webp' />
                </div>
                <div className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
                    <ImageClipBox clipClass='absolute md:scale-125' src='/img/swordman-partial.webp' />
                    <ImageClipBox clipClass='sword-man-clip-path md:scale-125' src='/img/swordman.webp' />
                </div>
                <div className='flex flex-col items-center text-center'>
                    <p className='text-violet-50 mb-8 text-[10px] font-general'>JOIN ZENTRY</p>
                    <AnimatedTitle title='let&apos;s b<b>u</b>ild the' containerClas='!text-violet-50/80 z-20' />
                    <AnimatedTitle title='new era of g<b>a</b>ming' containerClas='!text-violet-50/80 z-20' />
                    <AnimatedTitle title='t<b>o</b>grther.' containerClas='!text-violet-50/80 z-20' />
                    <Button title='contact us' containerClas='!font-bold mt-10' />
                </div>
            </div>
        </section>
    )
}

export default Page3
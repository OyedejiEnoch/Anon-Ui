"use client"
import Button from '@/components/Button'
import fuelIcon from "@/assets/fuelIcon.svg"
import React, { useRef } from 'react'
import iconsImg from "@/assets/iconsImage.svg"
import { Gift, Hourglass, RefreshCcw, Slash, Spline } from 'lucide-react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Header = () => {
  const featureRef =useRef<HTMLDivElement>(null)
  const buttonRef =useRef<HTMLDivElement>(null)

  useGSAP(()=>{
    const titleSplit = SplitText.create('.title', {type:'words'})
    const paragraphSplit = SplitText.create('.text', {type:'words'})
    const items = featureRef.current!.querySelectorAll('div')
    const buttons = buttonRef.current!.querySelectorAll('div')

    const tl =gsap.timeline({
      delay:0.5
    })
    tl.to('.hero-section', {opacity:1})
    tl.from('.hour-glass', {opacity:0, duration:0.5, ease:'power2.out'})
    tl.from(titleSplit.words, {opacity:0,yPercent:100, stagger:0.06, ease:'power1.inOut'})
    tl.from(paragraphSplit.words, {opacity:0, yPercent:150, stagger:0.06, ease:'power2.out'})
    tl.from(items, {
      opacity: 0,
      y: 30,
      duration: 0.3,
      stagger: 0.1,
      ease: 'power2.out',
    })
    .from(buttons, {
      opacity: 0,
      y: 30,
      duration: 0.3,
      stagger: 0.06,
      ease: 'power2.out',
    })
    .from('.hero-image', {
      opacity:0,
      duration:1,
      ease:'power1.inOut',
      scrollTrigger:{
        trigger:'.hero-section',
        start:'30% bottom',
        end:'40% top',
      }
    })
  },[])

  return (
    <section className='hero-section py-32 md:py-42 opacity-0'>
      <div className='max-w-7xl mx-auto'>
        
        <div className='flex justify-center items-center hour-glass'>
            <div className='flex items-center text-sm gap-2 px-4 py-2 rounded-lg shadow-lg border border-[#262729] bg-gradient-to-r from-[#111111] via-[#111111] to-[#13161A]'>
                <Hourglass size={20} className='text-[#0A7CFF]' />
               <span>Growing collection</span> 
            </div>
        </div>

        <h1
        className='mt-4 text-center font-semibold text-3xl md:text-4xl lg:text-5xl title'>Flexible Figma icons for outstanding UI</h1>
        <p 
        className='max-md:text-sm text-gray-400 mt-3 text-center max-w-[540px] mx-auto text'>Figma library based on variants. 5,000+ smooth and consistent icons in
        6 styles. Designed with great attention to detail, yet ready to adapt.</p>
      
        <div ref={featureRef} className='flex items-center mt-8 text-sm justify-center gap-4 features '>
            <div
            className='flex items-center gap-2'>
                <Slash size={16} className='text-[#0A7CFF]'/>
                <p>Live stroke</p>
            </div>
            <div 
            className='flex items-center gap-2'>
                <Spline size={16} className='text-[#0A7CFF]'/>
                <p>Live coners</p>
            </div>
            <div
            className='flex items-center gap-2'>
                <RefreshCcw size={16} className='text-[#0A7CFF]'/>
                <p>Free updates</p>
            </div>
        </div>

        <div ref={buttonRef} className='flex items-center gap-4 justify-center mt-10'>
          <div
          >
            <Button  image={fuelIcon as string} text='Buy now' />
          </div>
          <div
          >
            <Button icon={Gift} text='Try demo' gradient={true} />
          </div>
        </div>



        <div 
        className='relative flex justify-center mt-18 hero-image'>
          <div className='absolute inset-0 z-0 opacity-85 -top-80' style={{backgroundImage:'url(/anonGrdBg.svg)'}}/>
            <Image src={iconsImg} alt='icons-image' />
        </div>
      </div>
    </section>
  )
}

export default Header


    //If you want several animations to play one after the other we use timeline
    // Timelines are often used with ScrollTrigger to control multiple animations based on scroll.
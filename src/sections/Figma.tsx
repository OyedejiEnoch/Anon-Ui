"use client"
import Image from 'next/image'
import React from 'react'
import figmaImg from "@/assets/figmaSecImg.svg"
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Figma = () => {

  useGSAP(()=>{

    const titleSplit =SplitText.create('.figma-title', {type:'words'})
    const paragraphSplit =SplitText.create('.figma-text', {type:'words'})

    const figmaTl =gsap.timeline({
      scrollTrigger:{
        trigger:'.figma',
        start:'top 50%',
        end:'bottom 80%',
      }
    })
    figmaTl.from('.sub-comp', {opacity:0, duration:0.2, ease:'power2.out'})
    figmaTl.from(titleSplit.words, {opacity:0,yPercent:100, stagger:0.09, ease:'power1.inOut'})
    figmaTl.from(paragraphSplit.words, {opacity:0, yPercent:150, stagger:0.06, ease:'power2.out'},'-=0.1')
    // figmaTl.from('.figma-img', {opacity:0, ease:'power2.inOut'}, '-=0.2')
    // figmaTl.from('.figma Image', {opacity:0, ease:'power1.inOut', duration:0.8})
  })

  return (
    <section className='figma py-28 lg:py-40 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-center items-center sub-comp'>
            <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#bddafa]'>Made for Figma</h2>
        </div>
        <h1 className='mt-4 text-center font-semibold text-3xl md:text-3xl lg:text-4xl text-black figma-title'>Figma icons made from scratch & with love</h1>
        <p className='mt-4 text-sm text-gray-400 text-center max-w-[500px] mx-auto figma-text'>Every single shape and vector point is ready for quick changes. Easily adapt
        icons to fit the personality of your projects, not vice versa.</p>

        <div 
        className='flex justify-center mt-18 figma-img'>
            <Image src={figmaImg} alt='icons-image' />
        </div>
      </div>
    </section>
  )
}

export default Figma

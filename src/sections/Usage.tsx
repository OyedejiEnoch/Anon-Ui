"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import UsageImg1 from "@/assets/usageImg1.svg"
import UsageImg2 from "@/assets/usageImg2.svg"
import UsageImg3 from "@/assets/usageImg3.svg"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)

const features =[
  {
    id:1,
    title:"Adapt corners to your project",
    desc:'By default, all corners are live and you can manually change the rounding on each corner.',
    image:UsageImg1
  },
  {
    id:2,
    title:"Turn live corners into a curve",
    desc:"If you're happy with your customized corner rounding, you can quickly turn it into a curve, simply hit corner.",
    image:UsageImg2
  },
  {
    id:3,
    title:"Outline stroke when required",
    desc:'Any icon or a group of icons at once can be reduced to a single outlied shape, simply corner.',
    image:UsageImg3
  },
]



const Usage = () => {

  const featureRef =useRef<(HTMLDivElement | null)[]>([])

  useGSAP(()=>{

    const paragraphSplit =SplitText.create('.usage-paragraph', {type:'words'})

    const usageTl =gsap.timeline({
      scrollTrigger:{
        trigger:'.usage-section',
        start:'top 50%',
      }
    })

    usageTl.to('.usage-title', {opacity:1,
      duration:1,
      clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease:'circ.out'})
    .from(paragraphSplit.words, {yPercent:100, opacity:0, stagger:0.04, ease:'power2.inOut'}, '-=0.2')
    .from(featureRef.current, {
      y:100,
      opacity:0,
      stagger:0.3,
      ease:'power2.inOut',
      duration: 0.6,
    }, '-=0.1')

  },[])

  return (
    <section className='usage-section py-28 lg:py-40'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-center items-center'>
                <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#1281f8]/20 sub-comp'>Flexible Vectors</h2>
        </div>
        <h1 style={{
          clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
        }}
        className='usage-title mt-4 text-center font-semibold text-3xl md:text-3xl text-white lg:text-4xl '>Full control over vector shapes</h1>
        <p className='usage-paragraph mt-4 text-gray-400 text-center max-md:text-sm max-w-[400px] md:max-w-[500px] mx-auto'>You get maximum flexibility out of the box, but you can control how much
        of that flexibility you need.</p>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
          {features.map((feature, index)=>(
            <div ref={(el)=>{featureRef.current[index] = el}} key={feature.id} className='flex flex-col'>
                <div className='border border-[#1d1e1f]/80 rounded-xl px-3 py-8 flex justify-center'>
                    <Image src={feature.image} alt='Image' />
                </div>
                <h2 className='font-semibold text-center mt-4'>{feature.title}</h2>
                <p className='text-center mt-2 text-sm text-gray-400 max-w-[300px] mx-auto'>{feature.desc}</p>
            </div>
          ))}
 
        </div>
      </div>
    </section>
  )
}

export default Usage

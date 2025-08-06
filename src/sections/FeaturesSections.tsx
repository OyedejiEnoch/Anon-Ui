'use client'
import Image from 'next/image'
import React from 'react'
import featureImg1 from "@/assets/featuresIImg.svg"
import featureImg3 from "@/assets/feature3Img.svg"
import featureImg4 from "@/assets/feature4Img.svg"
import { Gift } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const FeaturesSections = () => {


  return (
    <section className='py-28 lg:py-32 bg-white'>
        <div className='max-w-6xl mx-auto max-lg:p-3'>

            <div className='flex flex-col-reverse md:flex-row gap-8'>
            <div className='flex-1 flex flex-col'>
                <div className='flex justify-start items-center sub-comp'>
                    <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#cfe1f5] '>Based on Variants</h2>
                </div>

                    <h1 className='first-title mt-4 font-semibold text-3xl max-w-[400px] md:max-w-[500px] md:text-3xl lg:text-4xl text-black'>Seamless switching
                    between icon styles</h1>
                    <p className='first-paragraph mt-4 text-gray-400 max-md:text-sm max-w-[350px] md:max-w-[400px] '>Easily switch between icon styles without using search or switch between icon 
                        components while keeping their style.</p>
                
                <div className='first-button'>
                <button 
                className='mt-8 px-6 py-3 shadow border border-gray-300  max-md:text-sm flex items-center gap-2 text-black rounded-2xl'>
                    <Gift className='text-[#0A7CFF]' />
                    Try free demo
                </button>
                </div>
            </div>


            <div className='flex-1 '>
                <Image src={featureImg1} alt='image' className='hero-image'/>
            </div>

            </div>

        <div className='second-section flex py-20 flex-col-reverse md:flex-row gap-8'>
            <div className='flex-1 flex flex-col'>
                <div className='flex justify-start items-center sub-comp2'>
                    <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#cfe1f5]'>Smart Search</h2>
                </div>

                    <h1 className='second-title mt-4 font-semibold text-3xl max-w-[400px] md:max-w-[500px] md:text-3xl lg:text-4xl text-black'>Clean search results</h1>
                    <p className='second-paragraph mt-4 text-gray-400 max-md:text-sm max-w-[350px] md:max-w-[400px] '>Your search won&apos;t be overloaded with icons
                        in all 6 styles. And smart tags will make it even more accurate.</p>
                
                <div className='second-button'>
                <button className='mt-8 px-6 py-3 shadow border max-md:text-sm border-gray-300 flex items-center gap-2 text-black rounded-2xl'>
                    <Gift className='text-[#0A7CFF]' />
                    Try free demo
                </button>
                </div>
            </div>


            <div className='flex-1'>
                <Image src={featureImg3} alt='image' className='hero-image2'/>
            </div>
        </div>

        <div className='third-section flex py-20 flex-col md:flex-row gap-8'>
            <div className='flex-1 flex flex-col'>
                <div className='flex justify-start items-center .sub-comp3'>
                    <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#cfe1f5]'>Named Layers</h2>
                </div>

                    <h1 className='third-title mt-4 font-semibold text-3xl max-w-[400px] md:max-w-[500px] md:text-3xl lg:text-4xl text-black'>Clean layers panel</h1>
                    <p className='third-paragraph mt-4 text-gray-400 max-md:text-sm max-w-[350px] md:max-w-[400px]'>Consistent structure and naming allows you
                    to save color and stroke properties when switching between icons in the same style.</p>
                
                <div className='third-button'>
                <button className='mt-8 px-6 py-3 shadow border max-md:text-sm border-gray-300 flex items-center gap-2 text-black rounded-2xl'>
                    <Gift className='text-[#0A7CFF]' />
                    Try free demo
                </button>
                </div>
            </div>


            <div className='flex-1'>
                <Image src={featureImg4} alt='image' className='hero-image3'/>
            </div>
        </div>
        
        </div>

    </section>
  )
}

export default FeaturesSections

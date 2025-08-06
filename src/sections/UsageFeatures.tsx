'use client'
import Image from 'next/image'
import React from 'react'
import UsageImg1 from "@/assets/usageImg4.svg"
import UsageImg2 from "@/assets/usageImg55.svg"
import UsageImg3 from "@/assets/cornerImg.svg"
import UsageImg4 from "@/assets/cornerImg2.svg"
import Button from '@/components/Button'
import fuelIcon from "@/assets/fuelIcon.svg"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const UsageFeatures = () => {
    
    useGSAP(()=>{

        const firstTitleSplit = SplitText.create('.first-title', {type:'words'})
        const firstParaSplit = SplitText.create('.first-paragraph', {type:'words'})

        const secondTitleSplit = SplitText.create('.second-title', {type:'words'})
        const secondParaSplit = SplitText.create('.second-paragraph', {type:'words'})

        const thirdTitleSplit = SplitText.create('.third-title', {type:'words'})
        const thirdParaSplit = SplitText.create('.third-paragraph', {type:'words'})

        const fourthParaSplit = SplitText.create('.fourth-paragraph', {type:'words'})

        const firstTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.usage-features .first-section',
            start:'top 60%',
        }
        })

        firstTl.from(firstTitleSplit.words, {yPercent:100, opacity:0, ease:'power2.inOut', duration:0.5, stagger:0.04})
        firstTl.from(firstParaSplit.words, {yPercent:100, opacity:0, ease:'power2.inOut', duration:0.5, stagger:0.04}, '-=0.5')
        firstTl.from('.first-button', {opacity:0, duration:0.6, ease:'power2.out'}, '-=0.5')
        firstTl.from('.first-image', {opacity:0, duration:0.6, ease:'power1.out',},'-=0.3')


        const secondTl =gsap.timeline({
        scrollTrigger:{
            trigger:'.usage-features .second-section',
            start:'top 60%',
        }
        })

        secondTl.from(secondTitleSplit.words, {yPercent:100, opacity:0, duration:0.5, stagger:0.04, ease:'power2.inOut'})
        .from(secondParaSplit.words, {yPercent:100, duration:0.5, opacity:0,stagger:0.04, ease:'power2.inOut'}, '-=0.5')
        .from('.second-button', {opacity:0, duration:0.6, ease:'power2.out'}, '-=0.5')
        .from('.hero-image2', {opacity:0, duration:0.6, ease:'power1.out', 
        })

        const thirdTl =gsap.timeline({
        scrollTrigger:{
            trigger:'.usage-features .third-section',
            start:'top 60%',
        }
        })

        thirdTl.from(thirdTitleSplit.words, {yPercent:100, opacity:0, duration:0.5, stagger:0.04, ease:'power2.inOut'})
        .from(thirdParaSplit.words, {yPercent:100, duration:0.5, opacity:0,stagger:0.04, ease:'power2.inOut'}, '-=0.5')
        .from('.third-button', {opacity:0, duration:0.6, ease:'power2.out'}, '-=0.5');

        const fourthTl =gsap.timeline({
            scrollTrigger:{
                trigger:'.usage-features .fourth-section',
                start:'top 60%',
            }
        })
        fourthTl.to('.fourth-title', {opacity:1,
      duration:1,
      clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease:'circ.out'})
      .from(fourthParaSplit.words, {yPercent:100, duration:0.5, opacity:0,stagger:0.04, ease:'power2.inOut'}, '-=0.5')
      .from('.fourth-image', {opacity:0, duration:0.8, ease:'power2.inOut'})

    },[])

  return (
    <section className='usage-features py-28 lg:py-40'>
      <div className='max-w-6xl mx-auto  max-lg:p-3'>
        <div className='first-section flex flex-col-reverse md:flex-row gap-6 '>
            <div className='flex-1 flex flex-col'>
                    <div className='flex justify-start items-center'>
                        <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#1281f8]/20'>Standard grid</h2>
                    </div>

                        <h1 className='first-title mt-4 font-semibold text-3xl max-w-[400px] md:text-3xl lg:text-4xl'>Standard size with
                        optimal stroke</h1>
                        <p className='first-paragraph mt-6 md:mt-10 text-gray-400 max-md:text-sm max-w-[350px] md:max-w-[400px]'>Classic 24px grid, elegant 1.5px stroke
                            weight by default. Compatible with many
                            other icon libraries.</p>
                    
                    <div className='mt-8 first-button'>
                    <Button image={fuelIcon as string} text='Try demo' gradient={true} />
                    </div>
                </div>


                <div className='flex-1'>
                    <Image src={UsageImg1} alt='image' className='first-image' />
                </div>
        </div>


        <div className='second-section flex py-20 gap-20 flex-col-reverse md:flex-row'>
            <div className='flex-1'>
                    <Image src={UsageImg2} alt='image' />
                </div>
            <div className='flex-1 flex flex-col'>
                    <div className='flex justify-start items-center'>
                        <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#1281f8]/20'>Live stroke</h2>
                    </div>

                        <h1 className='second-title mt-4 font-semibold text-3xl max-w-[400px] md:text-3xl lg:text-4xl'>Control stroke width</h1>
                        <p className='second-paragraph mt-6 text-gray-400 max-md:text-sm max-w-[350px] md:max-w-[400px]'>Figma has amazing built-in functionality for
                            batch edits. So you can change the thickness
                            on all icons at once with just a few clicks.</p>
                    
                    <div className='mt-8 second-button'>
                    <Button image={fuelIcon as string} text='Buy Anon icons' gradient={true} />
                    </div>
                </div>
        </div>


        <div className='third-section flex py-20 gap-20 flex-col md:flex-row'>

            <div className='flex-1 flex flex-col'>
                    <div className='flex justify-start items-center'>
                        <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#1281f8]/20'>Live stroke</h2>
                    </div>

                        <h1 className='third-title mt-4 font-semibold text-3xl max-w-[400px] md:text-3xl lg:text-4xl'>Control corner radius</h1>
                        <p className='third-paragraph mt-6 text-gray-400  max-md:text-sm max-w-[350px] md:max-w-[400px]'>Massively customize the rounding of icons or
                            remove it completely to personalize them for
                            your unique products.</p>
                    
                    <div className='mt-8 third-button'>
                    <Button image={fuelIcon as string} text='Buy Anon icons' gradient={true} />
                    </div>
                </div>

            <div className='flex-1'>
                <Image src={UsageImg2} alt='image' />
            </div>
        </div>


        <div className='fourth-section py-20'>
            <div className='flex justify-center items-center'>
                    <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#1281f8]/20'>Snooth corners</h2>
            </div>
            <h1  style={{
                clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
                }}  
            className='mt-4 text-center font-semibold text-3xl md:text-3xl text-white lg:text-4xl fourth-title'>Corner smoothing you can&apos;t unsee</h1>
            <p className='fourth-paragraph mt-4 text-gray-400 max-md:text-sm text-center max-w-[500px] mx-auto'>Apple-like continuously variable curvature by default on every corner. Extra
            polishing detail that are not available in most packs made with Adobe.</p>

            <div className='flex flex-col items-center gap-10 justify-center mt-16 fourth-image'>
                <Image src={UsageImg3} alt='image' />
                <Image src={UsageImg4} alt='image' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default UsageFeatures

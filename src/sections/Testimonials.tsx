'use client'
import React from 'react'
import img1 from "@/assets/img1.jpg"
import Image from 'next/image'
import {StarIcon } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const Testimonials = () => {

    useGSAP(()=>{
        
        const testimonialTl =gsap.timeline({
            scrollTrigger:{
                trigger:'.testimonial-section',
                start:'top 50%',
            }
        })

        testimonialTl.to('.testimonial-title', {opacity:1,
            duration:2,
            clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease:'circ.out'
        })
        // .from(paragraphSplit.words, {opacity:0, yPercent:150, stagger:0.06, ease:'power2.out'}, '-=0.5')
    },[])

  return (
    <section className='testimonial-section py-28 lg:py-40 bg-white'>
         <div className='max-w-6xl mx-auto max-lg:p-3'>

            <div className='flex justify-center items-center'>
                    <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#bddafa]'>Testimonials</h2>
            </div>

            <h1 style={{
                clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
            }} 
            className='opacity-0 mt-4 text-center font-semibold text-3xl md:text-3xl lg:text-4xl text-black testimonial-title'>Trusted by hundreds of professionals</h1>
            <p className='mt-4 max-md:text-sm text-gray-400 text-center max-w-[500px] mx-auto testimonial-text'>Some of the most memorable reviews we heard from our design colleagues.</p>
         
            <div className='flex items-center justify-center mt-12'>

                <div className='bg-white shadow-2xl flex flex-col items-center justify-center border-t-6 border-[#1F78FF]'>
                    <div className='flex items-center gap-1 bg-[#1F78FF] px-4 py-3 rounded-b-3xl -mt-1 rounded-t-xl'>
                    {Array.from({length: 5}).map((_, index) => (
                        <StarIcon key={index} className='text-white' size={20} />
                    ))}
                    </div>

                    <div className=' px-6 py-10'>
                    <h2 className='text-3xl font-bold text-black text-center max-w-[800px]'>My go-to icon pack for every project that I start
                        working on. The flexibility and customization it gives
                        me hasn&apos;t been matched by anyone so far.</h2>
                    

                    <div className='flex justify-center items-center flex-col mt-10'>
                        
                            <Image src={img1} alt='image' className='object-cover size-16 rounded-full' />
                        <h2 className='text-lg text-black font-medium mt-2'>Denislav Jeliazkov</h2>
                        <p className='text-sm text-gray-400'>Founder of UiLearn & Figura</p>
                    </div>

                    </div>
                </div>

            </div>
         
         </div>
    </section>
  )
}

export default Testimonials

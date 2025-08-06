import React from 'react'
import logo from "@/assets/singleLogo.svg"
import Image from 'next/image'
import {Bookmark, Instagram, Linkedin, Mail, X} from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const Footer = () => {

  useGSAP(()=>{
      const paragraphSplit =SplitText.create('.footer-paragraph', {type:'words'})

      const footerTl =gsap.timeline({
          scrollTrigger:{
            trigger:'.footer-section',
            start:'top 60%'
          }
        })

      footerTl.to('.footer-title', {opacity:1,
      duration:1,
      clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease:'circ.out'})
      .from(paragraphSplit.words, {yPercent:100, opacity:0, stagger:0.04, ease:'power2.inOut'}, '-=0.2')
      .from('.footer-button', {yPercent:10, opacity:0, ease:'back.out'}, '-=0.2')
  },[])

  return (
    <section className='footer-section py-28 lg:py-32'>
         <div className='max-w-6xl mx-auto flex flex-col items-center max-md:p-3'>
            <Image src={logo} alt='logo' />

            <h1 style={{
          clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
        }} className='footer-title mt-6 text-center font-semibold text-3xl md:text-3xl lg:text-4xl'>Stay tuned for updates</h1>
            <p className='footer-paragraph mt-6 max-md:text-sm text-gray-400 text-center max-w-[600px] mx-auto'>We share thoughts on design, tools, and productivity. If you don't want to
            miss them, subscribe to our newsletter on Substack.</p>

            <div className='flex justify-between items-center mt-10'>
                <button className='footer-button flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-[#0A7CFF] text-white'>
                    <Bookmark />
                    Follow on Substack
                </button>
            </div>

            <div className='mt-12 flex items-center gap-10'>
                <X className='border border-gray-600/40 size-10 rounded-full p-2'/>
                <Instagram className='border border-gray-600/40 size-10 rounded-full p-2'/>
                <Linkedin className='border border-gray-600/40 size-10 rounded-full p-2'/>
                <Mail className='border border-gray-600/40 size-10 rounded-full p-2'/>
            </div>


            <div className='border-t p-1 w-full mt-10 border-gray-500/30' />

            <div className='flex items-center gap-8 text-gray-400 mt-12 text-sm flex-wrap'>
                <span className='text-white'>Home</span>
                <span>Pricing</span>
                <span>FAQ</span>
                <span>ChangeLog</span>
                <span>License</span>
                <span>Gumroad</span>
                <span>Contact</span>
            </div>

            <p className='text-xs text-gray-500 mt-18'>&copy; 2020-2025 Anon, Developed By<span className='text-white'> OYEDEJI ENOCH </span>, All rights reserved</p>
         </div>
    </section>
  )
}

export default Footer

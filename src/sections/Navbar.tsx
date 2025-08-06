"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import anonLogo from "@/assets/anonLogo.svg"
import fuelIcon from "@/assets/fuelIcon.svg"
import Image from 'next/image'
import Button from '@/components/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const navLinks =[
    {
        title:"Home",
        link:"/",
    },
    {
        title:"Pricing",
        link:"/pricing",
    },
    {
        title:"FAQs",
        link:"/faq",
    },
    {
        title:"Changelog",
        link:"/changelog",
    },
    {
        title:"Blog",
        link:"/blog",
    },
]
const Navbar = () => {

    const [isOpen, setIsOpen] =useState(false) 
    const mobileMenuRef =useRef(null)
    const menuTl = useRef<gsap.core.Timeline | null>(null)
    const linkRef = useRef<(HTMLDivElement | null)[]>([])
    const iconTl = useRef<gsap.core.Timeline | null>(null)
    const topLineRef = useRef(null)
    const bottomLineRef = useRef(null)


    useGSAP(()=>{

        gsap.set(mobileMenuRef.current, {yPercent:-200})
        gsap.set(linkRef.current, {autoAlpha:0})

        menuTl.current =gsap.timeline({
            paused:true
        })
        .to(mobileMenuRef.current, {yPercent:0,opacity:1, duration:0.8, ease:'power3.out'})
        .to(linkRef.current, {autoAlpha:1, stagger:0.08, duration:0.8, ease:'power2.out'})
        
        iconTl.current =gsap.timeline({
            paused:true
        })
        .to([topLineRef.current], {
            rotation:45,
            y:3.3,
            duration:0.5,
            ease:"power2.inOut",
        })
        .to([bottomLineRef.current], {
            rotation:-45,
            y:-3.3,
             duration:0.5,
            ease:"power2.inOut",
        }, "<")
    },[])


    const toggleMenu =()=>{
        if(isOpen){
            menuTl.current?.reverse()
            setIsOpen(false)
             iconTl!.current!.reverse()
        }else{
            menuTl.current?.play()
            setIsOpen(true)
             iconTl.current?.play()
        }

    }

  return (
    <section className='py-4 lg:py-8  border-b border-gray-900 relative '>
      <div className='max-w-7xl mx-auto '>

        <div className='flex items-center justify-between px-4'>
            <Link href={"/"} className='flex items-center gap-2'>
                <Image src={anonLogo} alt='anon-logo' />
                <h1 className='font-semibold text-xl'>Anon</h1>
            </Link>


            <div className='hidden md:flex items-center gap-4'>
            <ul className='flex items-center gap-4 text-sm text-[#E6EDFA]'>
                {navLinks.map((link)=>(
                    <a key={link.title} href={link.link}
                    className='fle'
                    >{link.title}</a>
                ))}
            </ul>
            
                <Button image={fuelIcon as string} text='Buy now'/>
            </div>

            <div onClick={toggleMenu} className='md:hidden bg-white size-14 z-50 flex flex-col gap-1 justify-center items-center md:size-20 transition-all duration-300 rounded-full cursor-pointer'>
                <span ref={topLineRef} className='block w-8 h-0.5 bg-black rounded-full origin-center'></span>
                <span ref={bottomLineRef} className='block w-8 h-0.5 bg-black rounded-full origin-center'></span>
            </div>
        </div>
      </div> 

      <div ref={mobileMenuRef} className='md:hidden fixed inset-0 border border-white/15 w-full h-[100vw] z-30 flex flex-col items-center justify-between text-white/80 py-22 px-10 gap-y-10 backdrop-blur opacity-0 '>
            <div className='flex flex-col gap-y-6 text-3xl'>
                {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item, index)=>(
                    <div key={index} ref={(el)=>{linkRef.current[index] =el }} className=''>
                        <span className='transition-all duration-300 hover:text-white font-semibold cursor-pointer'>
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>   
    </section>
  )
}

export default Navbar

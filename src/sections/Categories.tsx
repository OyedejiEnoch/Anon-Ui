"use client"
import React, { Fragment, useEffect, useRef } from 'react'
import {Home, Bell, Move, Clapperboard, PhoneForwarded, LayoutPanelLeft, AppWindow, PenTool, CreditCard, Utensils,
    BookImage, Lock, Timer, User, CloudDownload, Airplay
} from "lucide-react"
import { motion, useAnimate, useInView } from 'framer-motion'


const top=[
    {
        title:"Alerts",
        desc:"90 icons",
        icon: Bell
    },
    {
        title:"Arrows",
        desc:"796 icons",
        icon:Home
    },
    {
        title:"Audiovisual",
        desc:"468 icons",
        icon:Move
    },
    {
        title:"Basic",
        desc:"1020 icons",
        icon:Clapperboard
    },
    {
        title:"Call",
        desc:"96 icons",
        icon:PhoneForwarded
    },
]
const middle=[
    {
        title:"Images",
        desc:"96 icons",
        icon: BookImage
    },
    {
        title:"Resturant",
        desc:"42 icons",
        icon:Utensils
    },
    {
        title:"Editor",
        desc:"780 icons",
        icon:PenTool
    },
    {
        title:"Files",
        desc:"264 icons",
        icon:AppWindow
    },
    {
        title:"Finances",
        desc:"114 icons",
        icon:CreditCard
    },
    {
        title:"Grid",
        desc:"294 icons",
        icon:LayoutPanelLeft
    },
]
const bottom=[
    {
        title:"Security",
        desc:"138 icons",
        icon: Lock
    },
    {
        title:"Time",
        desc:"168 icons",
        icon:Timer
    },
    {
        title:"Users",
        desc:"84 icons",
        icon:User
    },
    {
        title:"Electronics",
        desc:"210 icons",
        icon:CloudDownload
    },
    {
        title:"Brands",
        desc:"144 icons",
        icon:Airplay
    },
]

const Categories = () => {

      const ref =useRef(null)
  const isInView =useInView(ref, {once:true})
  const [headingScope, headingAnimate]=useAnimate()
  const [titleScope, titleAnimate]=useAnimate()
  const [textScope, textAnimate] =useAnimate()

  useEffect(()=>{
      if(isInView){
        headingAnimate([
          [headingScope.current, {opacity:1}, {duration:1.2, delay:0.4}]
        ])
        titleAnimate([
          [titleScope.current, {opacity:1}, {duration:1.5, delay:0.8}]
        ])
        textAnimate([
          [textScope.current, {opacity:1}, {duration:1.2, delay:1.2}]
        ])
      }
    }, [isInView])

  return (
    <section ref={ref} className='py-28 lg:py-40 bg-white'>
        <div className='max-w-6xl mx-auto'>
            <div className='flex justify-center items-center'>
                <motion.h2 
                initial={{
                opacity:0
                }}
                ref={headingScope}
                className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#bddafa]'>Categories</motion.h2>
            </div>
            <motion.h1 
              initial={{
            opacity:0
            }}
            ref={titleScope}
            className='mt-4 text-center font-semibold text-3xl md:text-3xl lg:text-4xl text-black'>19 neatly organized categories</motion.h1>
            <motion.p 
                initial={{
                opacity:0
            }}
            ref={textScope}
            className='mt-4 text-sm text-gray-400 text-center max-w-[500px] mx-auto'>All icons are nicely separated by frames, icon styles are clearly organized
            using Figma Variants. More categories are upcoming.</motion.p>

            <div className='relative flex flex-col gap-10 mt-16 items-center justify-center w-full h-72 overflow-x-hidden' style={{
                backgroundImage:'url("/bgCategory.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', // or 'contain'
                backgroundPosition: 'center',
            }}>
              
                <motion.div 
                 initial={{
                    x: 0
                    }}
                    animate={{
                    x:'-50%'
                    }}
                    transition={{
                    duration:15,
                    repeat:Infinity,
                    ease:'linear'
                }}
                className='flex items-center gap-6'>
                    {Array.from({length:2}).map((_,i)=>(
                        <Fragment key={i}>
                    {top.map((menu)=>(
                        <div key={menu.title} className='border border-gray-300 bg-white shadow px-4 py-2 flex items-center gap-4 rounded-lg'>
                                <div className='size-10 rounded-full border border-gray-300 flex items-center justify-center'>
                                    <menu.icon className='text-[#1F78FF]' size={20}/>
                                </div>
                        
                            <div className='flex flex-col gap-1'>
                                <h2 className='font-semibold text-black max-md:text-sm'>{menu.title}</h2>
                                <p className='text-sm text-gray-400 text-[12px]'>{menu.desc}</p>
                            </div>
                        </div>
                    ))}
                    </Fragment>
                     ))}

                     
                </motion.div>
                <div className='flex items-center gap-6'>
                    {middle.map((menu)=>(
                        <div className='border border-gray-300 bg-white shadow px-4 py-2 flex items-center gap-4 rounded-lg'>
                                <div className='size-10 rounded-full border border-gray-300 flex items-center justify-center'>
                                    <menu.icon className='text-[#1F78FF]' size={20}/>
                                </div>
                        
                            <div className='flex flex-col gap-1'>
                                <h2 className='font-semibold text-black max-md:text-sm'>{menu.title}</h2>
                                <p className='text-sm text-gray-400 text-[12px]'>{menu.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center gap-6'>
                    {bottom.map((menu)=>(
                        <div className='border border-gray-300 bg-white shadow px-4 py-2 flex items-center gap-4 rounded-lg'>
                                <div className='size-10 rounded-full border border-gray-300 flex items-center justify-center'>
                                    <menu.icon className='text-[#1F78FF]' size={20}/>
                                </div>
                        
                            <div className='flex flex-col gap-1'>
                                <h2 className='font-semibold text-black max-md:text-sm'>{menu.title}</h2>
                                <p className='text-sm text-gray-400 text-[12px]'>{menu.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories

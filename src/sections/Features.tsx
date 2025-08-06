"use client"
import React, {useRef } from 'react'
import figmaIcon from "@/assets/figmaGradIcon.svg"
import gradIcon2 from "@/assets/gradIcon2.svg"
import gradIcon3 from "@/assets/gradIcon3.svg"
import gradIcon4 from "@/assets/gradIcon4.svg"
import gradIcon5 from "@/assets/gradIcon5.svg"
import gradIcon6 from "@/assets/gradIcon6.svg"
import gradIcon7 from "@/assets/gradIcon7.svg"
import gradIcon8 from "@/assets/gradIcon8.svg"
import gradIcon9 from "@/assets/gradIcon9.svg"
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const features =[
    {
        title:"Created in Figma from scratch",
        desc:"Organized with variants, ready to adapt. It isn't just another icon set with the trivial import from Illustrator.",
        icon:figmaIcon
    },
    {
        title:"5,000+ icons / 6 styles",
        desc:"Crafted with love and great attention to detail. 6 stylish looks to help your UI stand out from the crowd.",
        icon:gradIcon2
    },
    {
        title:"Standard size & optimal stroke",
        desc:"Classic 24px grid, elegant 1.5px stroke weight by default. Compatible with many other icon libraries.",
        icon:gradIcon3
    },
    {
        title:"Variable stroke weight & radius",
        desc:"Easily change stroke weight or corner radius of any icon. Or make changes on all the icons at once, if required.",
        icon:gradIcon4
    },
    {
        title:"Fast switching between styles",
        desc:"Variants allow you to switch between icon styles without using search. Huge time & energy saver.",
        icon:gradIcon5
    },
    {
        title:"Smart & clean search results",
        desc:"Your search won't be overloaded with icons in all 6 styles. And smart tags will make it even more accurate.",
        icon:gradIcon6
    },
    {
        title:"Save color & stroke overrides",
        desc:"When switching between icons in the same style, their color and stroke properties are preserved.",
        icon:gradIcon7
    },
    {
        title:"Two ways to resize icons",
        desc:"Resize the icon keeping the original stroke weight and radius, or scale them in sync with the Scale Tool.",
        icon:gradIcon8
    },
    {
        title:"Optimized SVG output",
        desc:"Minimum number of shapes and no unnecessary attributes. Easily change icon colors in code.",
        icon:gradIcon9
    },
]


const Features = () => {

  const featureRefs =useRef<(HTMLDivElement | null)[]>([])

  useGSAP(()=>{
    
    const paragraphSplit = SplitText.create('.features-section .feature-text', {type:'words'})
  
    const featureTl = gsap.timeline({
      scrollTrigger:{
        trigger:'.features-section',
        start:'top 50%',
        end:'bottom bottom',
      }
    })
  
    featureTl.to('.features-section h1', {
      opacity:1,
      duration:1,
      clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease:'circ.out'
    })
    .from(paragraphSplit.words, {opacity:0, yPercent:150, stagger:0.06, ease:'power2.out'}, '-=0.2')

      .from(featureRefs.current, { //animating 
        y: 100,
        delay:0.2,
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: "back.out",
        
      },);
    
  
  },[])

  return (
    <section className='features-section py-28 lg:py-32'>
      <div className='max-w-6xl mx-auto max-lg:p-3'>
        <h1 style={{
          clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
        }}
        className='mt-4 text-center font-semibold text-3xl md:text-3xl lg:text-4xl opacity-0'
        >Native Figma icons, ready for any task</h1>
        <p className='mt-4 text-sm text-gray-400 text-center max-w-[500px] mx-auto feature-text'>These icons created with great attention to detail, but with fast editing in
        mind. Available from any browser on any device, without Adobe.</p>
      
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {features.map((feature, index)=>(
            
            <div key={feature.title} ref={(el) => {featureRefs.current[index] = el}} className='flex flex-col items-center gap-2'>
                <Image src={feature.icon} alt='icon' />
                <h2 className='font-bold text-md text-center '>{feature.title}</h2>
                <p className='text-sm text-gray-500  text-center max-w-[260px]'>{feature.desc}</p>
            </div>
            ))}
        </div>
      </div>
      {/* “Okay, parent says go from hidden → visible, and this child has a variants object that defines what that means. Let’s animate it accordingly.” */}
    {/* Even though itemVariants is separate from containerVariants, it defines what the child should do at the "hidden" and "visible" states. that is why at
    the feature div we are not defining the inital or animate, it knows what to do from the parent */}
    </section>
  )
}

export default Features

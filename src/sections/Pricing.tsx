import React, { useRef } from 'react'
import fuelIcon from "@/assets/fuelIcon.svg"
import Image from 'next/image'
import checkIconImg from '@/assets/checkIcon.svg'
import pricingImg1 from "@/assets/pricing1.svg"
import pricingImg2 from "@/assets/pricing2.svg"
import pricingImg3 from "@/assets/pricing3.svg"
import { Gift } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const pricing =[
    {
        title:"Professional",
        desc:"For freelancers, indie developers or solopreneurs.",
        image: pricingImg1,
        price: 56,
        features:[
            "Single user license",
            "Lifetime updates",
            "5,000+ icons",
            "6 unique styles",
            "Live stroke & corners",
            "Powered by variants",
            "IconJar & SVG library",
            "Unlimited projects",
        ]
    },
    {
        title:"Team",
        desc:"For fast-growing teams, up to 6 library users.",
        image: pricingImg2,
        price: 112,
        features:[
            "Up to 6 users license",
            "Lifetime updates",
            "5,000+ icons",
            "6 unique styles",
            "Live stroke & corners",
            "Powered by variants",
            "IconJar & SVG library",
            "Unlimited projects",
        ]
    },
    {
        title:"Enterprise",
        desc:"For large teams, an unlimited number of library users.",
        price: 224,
        image: pricingImg3,
        features:[
            "Unlimited library users",
            "Lifetime updates",
            "5,000+ icons",
            "6 unique styles",
            "Live stroke & corners",
            "Powered by variants",
            "IconJar & SVG library",
            "Unlimited projects",
        ]
    },
]
const Pricing = () => {

    const priceRef =useRef<(HTMLDivElement | null)[]>([])

    useGSAP(()=>{
        const paragraphSplit =SplitText.create('.price-paragraph', {type:'words'})

        const priceTl =gsap.timeline({
            scrollTrigger:{
                trigger:'.pricing-section',
                start:'top 60%'
            }
        })

        priceTl.to('.price-title', {opacity:1,
      duration:1,
      clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease:'circ.out'})
      .from(paragraphSplit.words, {yPercent:100, opacity:0, stagger:0.04, ease:'power2.inOut'}, '-=0.2')
    .from(priceRef.current, { //animating 
        y: 100,
        delay:0.6,
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: "back.out",
      },'-=0.3');

    },[])

  return (
    <section className='pricing-section py-28 lg:py-32 bg-white'>
        <div className='max-w-6xl mx-auto max-lg:p-3'>

            <div className='flex justify-center items-center'>
                <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#bddafa]'>Pricing</h2>
            </div>

            <h1  style={{
          clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
        }} className='price-title mt-4 text-center font-semibold text-3xl md:text-3xl lg:text-4xl text-black'>Pay once, use forever, upgrade for free</h1>
            <p className='price-paragraph mt-4 max-md:text-sm text-gray-400 text-center max-w-[500px] mx-auto'>Flexible pricing for any team size. It&apos;s a one-time payment — you only buy a
            license once, and all future updates are free for you forever.</p>


            <div className='mt-10 flex flex-col md:flex-row gap-8 justify-center'>
                {pricing.map((item, index)=>(

               
                <div key={item.title} ref={(el)=>{priceRef.current[index] = el}} className='bg-white border relative border-gray-100 p-6 rounded-2xl shadow-lg text-black'>
                    <Image src={item.image} alt='img' className='absolute top-0 right-0'/>
                    <div>
                        <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#bddafa] max-w-min'>{item.title}</h2>

                        <h2 className='font-bold text-4xl md:text-5xl mt-6'><span className='text-gray-400 text-2xl'>$</span> {item.price}</h2>
                        <p className='text-gray-400 max-w-[250px] text-sm mt-6'>{item.desc}</p>

                        <div className='flex justify-between items-center max-w-[200px] mx-auto mt-4'>
                        <button className='bg-[#0A7CFF] w-full px-10 py-4 rounded-4xl shadow-lg shadow-blue-400 flex justify-center items-center text-white gap-2'>
                            <Image src={fuelIcon} alt='img' />
                            <p>Buy Now</p>
                        </button>
                        </div>

                        <div className='mt-8'>
                            <ul className='flex flex-col gap-2'>
                                {item.features.map((feature, index)=>(
                                    <li key={index} className='flex items-center gap-2 text-gray-500 text-sm'>
                                        <Image src={checkIconImg} alt='icon'/>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                ))}
            </div>
            
            <p className='text-center text-sm mt-10 leading-6 text-gray-500 max-w-[450px] mx-auto'>Not ready to pay yet? Try the free demo with 600 icons. Same styles, same
            features, same flexibility. It also includes full preview.</p>

            <div className='justify-center flex items-center gap-4 mt-6'>
                {/* <Button icon={Gift} text='Try demo'  /> */}
                <button className='flex items-center gap-3 border border-gray-300 text-sm shadow px-6 py-3 rounded-full text-black '>
                    <Gift className='text-[#0A7CFF]' />
                    Try free demo
                </button>
            </div>
        </div>
      
    </section>
  )
}

export default Pricing

import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { LucideIcon  } from 'lucide-react'

type Props ={
    image?:string,
    icon?: LucideIcon ,
    text:string,
    gradient?:boolean
}
const Button = ({icon:Icon, text, gradient, image}:Props) => {
  return (
    <button className={twMerge('bg-[#0A7CFF] py-4 px-6 text-white rounded-3xl text-sm font-medium flex items-center gap-2', 
        gradient && "bg-[#13161A] border border-[#262729] shadow-md"
    )}>
     {image && <Image  src={image as string}  alt='icon'/>} 
     {Icon && <Icon className='text-[#0A7CFF]'/> }
     <span>{text}</span>
    </button> 
  )
}

export default Button

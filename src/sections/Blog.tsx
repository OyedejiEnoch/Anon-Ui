import Image from 'next/image'
import React from 'react'
import blogImg1 from "@/assets/blogImg.svg"
import avatarImg from "@/assets/imgPic24.jpg"

const Blog = () => {
  return (
    <section className='py-28 lg:py-32 bg-white'>
        <div className='max-w-6xl mx-auto'>

            <div className='flex justify-center items-center'>
                <h2 className='text-[#0A7CFF] px-4 py-2 rounded-lg text-sm bg-[#bddafa]'>Blog</h2>
            </div>

            <h1 className='mt-4 text-center font-semibold text-3xl md:text-3xl lg:text-4xl text-black'>Latest blog posts</h1>
            <p className='mt-4 max-md:text-sm text-gray-500 text-center max-w-[500px] mx-auto'>Thoughts on design, software and productivity.</p>

            <div className='flex items-center justify-center mt-8'>
                <div className='p-4 max-w-[450px] mx-auto'>
                    <Image src={blogImg1} alt='image' />
                    <p className='text-sm text-gray-400 mt-6'>Oct 19, 2024 - 10mins</p>

                    <h2 className='font-bold text-black mt-6'>Why organize icon styles with Figma Variants</h2>
                    <p className='text-gray-500 mt-2'>Analyzing all the pros and cons of this method compared
                    to the classic approach with individual icon components.</p>

                    <div className='mt-8 flex items-center gap-2'>
                        <Image src={avatarImg} alt='image' className='rounded-full object-cover size-8' />
                        <p className='text-sm text-black font-semibold'>Anton Lapko</p>
                    </div>
                </div>  

            </div>
        </div>
      
    </section>
  )
}

export default Blog

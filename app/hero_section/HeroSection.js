import React from 'react';
import { data } from '../data';
import Image from 'next/image';
import heroImage from '../assets/home_image.jpeg'

const HeroSection  = () => {
    return (
        <div className="w-full relative">
            <Image src={heroImage} alt='hero image' className='w-[100vh] md:w-full sm:w-full xs:w-full object-cover'></Image>

            <div className='w-full absolute top-0 h-full z-10 bg-gradient-to-r from-[#161616]'></div>

            {/* --------text div-------- */}
            <div className='xl:text-base z-40 absolute bottom-[100px] lg:bottom-[100px] md:bottom-[100px] md:left-16 p-16 text-white lg:w-1/2'>
                <p>{data.instructor.name}</p>
                <h1 className='font-medium text-wrap text-xl lg:text-6xl md:text-3xl sm:text2xl'>{data.course.title}</h1>
            </div>
        </div>
    )
}

export default HeroSection

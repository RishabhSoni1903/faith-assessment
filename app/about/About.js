'use client'
import React, { useState } from 'react'
import Course from './Course'

const About = () => {

    const [checked, setChecked] = useState('about')

    return (
        <div className='mx-[128px] w-1/2'>
            <div className=' w-full text-center flex justify-between'>
                <div onClick={() => { setChecked('about') }} className={"py-4 w-1/3 cursor-pointer uppercase font-bold " + `${checked == "about" ? "border-b-4 border-[#593CAC]" : ''}`}>About</div>
                <div onClick={() => { setChecked('instructions') }} className={"py-4 w-1/3 cursor-pointer uppercase font-bold " + `${checked == "instructions" ? "border-b-4 border-[#593CAC]" : ''}`}>Instructor</div>
                <div onClick={() => { setChecked('reviews') }} className={"py-4 w-1/3 cursor-pointer uppercase font-bold " + `${checked == "reviews" ? "border-b-4 border-[#593CAC]" : ''}`}>Reviews</div>
            </div>
            <div className='my-8'>
                {checked == "about" && <Course />}
                {checked == "instructions" && <div>Instructions</div>}
                {checked == "reviews" && <div>Reviews</div>}
            </div>
        </div>
    )
}

export default About
import React from 'react'
import Image from 'next/image'
import { data } from '../data';
import image from '@/app/assets/portrait.jpg'


const Testimonial = () => {
    return (
        <div className='py-9 bg-[aliceblue] flex'>
            <div className='my-auto mx-6'><button className="btn btn-circle btn-sm bg-[#D0D5DE]">&#11164;</button></div>
            <div className='my-auto'>
                <div className='text-center mx-auto my-4 text-2xl font-bold w-4/5 md:w-3/5 lg:w-1/2'>&quot;{data.testimonial.text}&quot;</div>
                <div className='flex justify-center my-4'>
                    <div className="avatar mx-2">
                        <div className="size-10">
                            <Image src={image} alt="user photo" className='rounded-full' />
                        </div>
                    </div>
                    <div className='mx-2 my-auto'>
                        <div className='text-center text-sm font-semibold'>{data.testimonial.reviewer_designation}</div>
                        <div className='text-center text-sm'>{data.testimonial.reviewer_name}</div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <div className="badge badge-primary badge-xs bg-[#D0D5DE] cursor-pointer border-none"></div>
                    <div className="badge badge-primary badge-xs bg-[#D0D5DE] cursor-pointer border-none"></div>
                    <div className="badge badge-primary badge-xs bg-[#D0D5DE] cursor-pointer border-none"></div>
                </div>
            </div>
            <div className='my-auto mx-6'><button className="btn btn-circle btn-sm bg-[#D0D5DE]">&#11166;</button></div>
        </div>
    )
}


export default Testimonial; 
import React from 'react'
import Image from 'next/image'
import { data } from '../data'
import chatIcon from '@/app/assets/chatIcon.svg'
import videoIcon from '@/app/assets/videoIcon.svg'

const FeeContainer = () => {
    return (
        <div className="p-6 z-20 absolute -top-10 right-[128px] bg-[#FAF4FF] h-min">
            <div>
                <div className='font-semibold'>Course Fees</div>
                <div className='text-4xl font-semibold'>{data.course.fee.currency === "INR" ? <span>&#8377;</span> : $} {data.course.fee.amount}</div>
            </div>
            <div className='my-6'>
                <div className='text-xl font-semibold'> <p>What&apos;s included:</p></div>
                <div className='my-3'>
                    <div className='my-1 flex'><span><Image src={videoIcon} alt='chat icon' className='size-6 pr-2'></Image></span>{data.course.inclusions.on_demand_videos} on-demand videos</div>
                    {data.course.inclusions.live_qa_sessions ? <div className='my-1 flex'> <span><Image src={chatIcon} alt='chat icon' className='size-6 pr-2'></Image></span> Live Q&A sessions with {data.instructor.name}</div> : null}
                    {data.course.inclusions.whatsapp_community ? <div className='my-1 flex'><span><Image src={chatIcon} alt='chat icon' className='size-6 pr-2'></Image></span> An active Whatsapp community</div> : null}
                </div>
            </div>
            <button className="btn mt-2 text-white text-center w-full rounded-full bg-[#603DB5] hover:bg-[#3A0FA1]">Register today</button>
        </div>
    )
}

export default FeeContainer

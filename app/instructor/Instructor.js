import React from 'react'
import Image from 'next/image'
import image from '@/app/assets/portrait.jpg'
import { data } from '../data';
import fb_logo from '@/app/assets/facebook.svg'
import twt_logo from '@/app/assets/twitter.svg'
import yt_logo from '@/app/assets/youtube.svg'
import ig_logo from '@/app/assets/instagram.svg'

const Instructor = () => {

    const createMarkup = (str) => ({ __html: str });

    return (
        <div className='mx-[128px]'>
            <h1 className='text-2xl font-bold'>About the instructor</h1>
            <div className='my-3 flex'>
                <div className='size-50'>
                    <Image src={image} alt='instructor image' className='rounded-full'></Image>
                </div>
                <div className='mx-4'>
                    <div dangerouslySetInnerHTML={createMarkup(data.about_instructor.html_content)} >

                    </div>
                    <div className='my-8 text-sm font-semibold flex place-items-start'>
                        {data.instructor.social_media.facebook ? <div className='w-1/4 flex items-center'>
                            <div className='size-6 mx-2'><Image src={fb_logo} alt='fb logo'></Image></div>
                            Facebook
                        </div> : null}
                        {data.instructor.social_media.twitter ? <div className='w-1/4 flex items-center'>
                            <div className='size-6 mx-2'><Image src={twt_logo} alt='twt logo'></Image></div>
                            Twitter</div> : null}
                        {data.instructor.social_media.youtube ? <div className='w-1/4 flex items-center'>
                            <div className='size-6 mx-2'><Image src={yt_logo} alt='yt logo'></Image></div>
                            Youtube</div> : null}
                        {data.instructor.social_media.instagram ? <div className='w-1/4 flex items-center'>
                            <div className='size-6 mx-2'><Image src={ig_logo} alt='ig logo'></Image></div>
                            Instagram</div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Instructor; 
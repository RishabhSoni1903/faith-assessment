import React from 'react'
import { data } from '../data';

const Course = () => {

    const createMarkup = (str) => ({ __html: str });

    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold'>About the course</h1>
                <div className='my-8' dangerouslySetInnerHTML={createMarkup(data.course.about.html_content)}></div>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>What to expect from the course</h1>
                <div className='my-8'
                    dangerouslySetInnerHTML={createMarkup(data.course.what_to_expect.html_content)}
                ></div>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Key topics covered</h1>
                <div className="my-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc lorem, ornare sed lacinia consectetur, dictum at libero. Aliquam nec maximus lacus. Vivamus facilisis, lorem non pharetra gravida, lacus nibh efficitur odio, non blandit magna risus id nunc. Etiam nunc metus, consectetur eu elit ut, dictum rutrum sapien. Maecenas ac maximus ante, in pulvinar magna. Suspendisse et mi cursus, facilisis dolor at, malesuada quam. Curabitur quis enim lectus. Sed sed felis a massa blandit pretium id a ipsum. Mauris interdum tortor et est scelerisque pharetra.
                </div>
                <div className='my-8'
                    dangerouslySetInnerHTML={createMarkup(data.course.key_topics.html_content)}
                ></div>
            </div>
        </div>
    )
}

export default Course

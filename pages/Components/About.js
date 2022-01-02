import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function About() {
    
    
    
    return (
        <>
            <div className=' h-full w-screen '>

                <div className='box-border mx-auto mt-28 flex flex-col  w-4/5 h-3/5 px-4   pb-24 m-auto p-0'>
                    <h2 className='text-5xl font-semibold pt-2 '>About</h2>
                    <div className="w-96 py-12 lg:text-6xl lg:mt-8 2xl:text-7xl indent-7  font-extrabold">

                        <h3 className=' uppercase' data-aos="zoom-in-down" data-aos-duration="1500">“always be eager for new technologies.
                            ”
                        </h3>

                    </div>

                    <div className="  self-end w-48 2xl:w-60" data-aos="fade-up-left" data-aos-duration="1500">
                        <Image className=' '
                            src="/circletext.f0059cc8.svg"
                            alt='roundanimation'
                            width={200}
                            height={200}
                        />

                    </div>

                    <div className=''>
                        <h3 className='text-3xl lg:text-4xl 2xl:text-4xl 2xl:w-72 font-medium'>TECHNOLOGY IS BEST WHEN IT BRINGS PEOPLE TOGETHER.</h3>
                    </div>
                    <div className='lg:mt-8 2xl:mt-8 whitespace-normal'>
                        <p className=' whitespace-normal text-2xl '>I'm a driven person who works hard to attain my goals.The ability to overcome <br/>
                        obstacles and follow things through to completion has always been a strong point of mine,<br/>
                         which is why I've thrived in all the workplaces I have had the pleasure of working in.
                        </p>
                    </div>


                    <div className='   relative  py-12 self-end' data-aos="fade-up-left" data-aos-duration="1500">
<div className=" absolute -bottom-3 -left-96">
    
                            <Image
    
                                src='/desk.jpg'
                                alt='citys'
                                width={550}
                                height={350}
    
    
                            />
</div> 

<div className=' '>
    
                            <Image
    
                                src='/desk2.jpg'
                                alt='citys'
                                width={500}
                                height={550}
    
    
                            />
</div>

                    </div>

                </div>

            </div>
        </>
    )
}

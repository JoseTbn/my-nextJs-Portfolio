import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  j from "../public/stacks/javascript.svg"
import  a from "../public/stacks/aws.svg"
import  c from "../public/stacks/css.svg"
import  f from "../public/stacks/figma.svg"
import  g from "../public/stacks/git.svg"
import  h from "../public/stacks/html.svg"
import  m from "../public/stacks/mongo.svg"
import  r from "../public/stacks/react.svg"
import  s from "../public/stacks/sass.svg"
import  n from "../public/stacks/node.svg"
import  t from "../public/stacks/tailwind.svg"

 

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
                        <h3 className='text-3xl lg:text-4xl 2xl:text-4xl 2xl:w-72 font-medium  uppercase text-gray-600 tracking-wider'>CREATING DIGITAL EXPERIENCES TO BRING PEOPLE TOGETHER.</h3>
                    </div>
                    <div className='lg:mt-8 2xl:mt-8 whitespace-normal'>
                        <p className=' text-base font-semibold uppercase text-gray-600 tracking-wider'>I'm a driven person who works hard to attain my goals.The ability to overcome <br />
                            obstacles and follow things through to completion has always been a strong point of mine,<br />
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
                    <div className=' pt-12  w-full  justify-around flex flex-col '>

                        <h2 className='text-5xl font-semibold pt-2 uppercase '>Skills</h2>

                        <div className=' self-end box-border mb-28 w-full'>


                            <div class="container  px-5 py-24 mx-auto lg:px-16">
                            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          My tech stacks & some tools I use in my work flow
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 ">
            <Image
              className="max-h-12"
              src={j}
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8  ">
            <Image className="max-h-12" src={a} alt="Mirage" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 ">
            <Image className="max-h-12" src={s} alt="Tuple" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 ">
            <Image className="max-h-12" src={m} alt="Laravel" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 ">
            <Image
              className="max-h-12"
              src={n}
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 ">
            <Image
              className="max-h-12"
              src={r}
              alt="Statamic"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 ">
            <Image
              className="max-h-12"
              src={g}
              alt="Statamic"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 ">
            <Image
              className="max-h-12"
              src={f}
              alt="Statamic"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 ">
            <Image
              className="max-h-12"
              src={c}
              alt="Statamic"
            />
            
          </div>
        </div>
      </div>
                            </div>


                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

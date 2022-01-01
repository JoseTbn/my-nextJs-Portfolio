import Head from 'next/head'
import Image from 'next/image'
import roundtxt from '../public/circletext.f0059cc8.svg'
import noise from '../public/noise.d095195e.png'
import Link from 'next/link'



import AOS from "aos";




import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Home() {

  const current = new Date();
  const date = `${current.getHours()}:${current.getUTCMinutes()}   ${current.getUTCDate()}/${current.getUTCMonth()+1}/${current.getFullYear()} `;


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>


      <section className='  h-screen ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}>
        {/* <Image

src={noise}
alt='roundanimation'
/> */}
        <header className=' container '>

          <nav className='box-border hidden justify-between m-0 px-0 py-8 lg:flex lg:justify-end lg:ml-auto'>
            <ul>
              <Link href='/Contact'><a className='lg:inline-block lg:text-xl lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline md:text-xs' href="">work</a>
              </Link >
              <a className='lg:inline-block lg:text-xs lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline' href="">about</a>
              <a className='lg:inline-block lg:text-xs lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline' href="">contact</a>
            </ul>
          </nav>




        </header>

        <div data-aos="fade-right" data-aos-duration="2500" className=' box-border  flex flex-col w-4/5 h-3/5 px-4  py-4 
  m-auto p-0'>
          <div className=''>

            <h1 className='box-border font-light m-0  pb-10 uppercase text-xl whitespace-nowrap'>Full Stack Web Developer -
             Front end Oriented -
             Logo Creator </h1>
          </div>


          <div data-aos="fade-down" data-aos-duration="3000" className=" w-full my-auto  lg:h-72 lg:mb-20 2xl:h-60 flex  justify-between ">


            <h1 className='  lg:text-9xl leading-4  lg:block lg:font-semibold  lg:mt-4 lg:tracking-tighter lg:w-3/5 2xl:mt-1 2xl:w-3/5 uppercase '>Jose Batumeni</h1>
            <Image className='  animate-spin-slow'
              src={roundtxt}
              alt='roundanimation'
            />
          </div>

          <div className='flex
 w-full justify-between'>
            <h1 className='text-xl'>{date}</h1>
            <a className=' text-xl   hover:underline' href="mailto:Btnjose@gmail.com">Btnjose@gmail.com</a>

          </div>

        </div>







        <div className=' uppercase my-20 text-4xl whitespace-nowrap overflow-hidden'>
          <p className=''>
            <span className='  w-full -translate-x-full animate-spin-slow box-border inline-block font-semibold text-2xl m-0 p-0 lg:text-4xl'>

              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -
              Out of the box -

            </span>
          </p>
          <p className=' relative py-6 '>
            <span className='-translate-x-full w-full absolute  animate-spin-slow  box-border inline-block font-semibold text-2xl m-0 p-0 lg:text-4xl  text-gray-300 stroke-black stroke-1' >OTF -
             OTF -
            OTF -
            OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
              OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
             OTF -
            </span>
          </p>
          
          
          <p className='pt-10'>

            <span className='   -translate-x-1/3 animate-spin-slow box-border inline-block font-semibold text-2xl m-0 p-0 lg:text-4xl '>
              Passion -
              Commitment -
              Respect -
              Motivation -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment1 -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Commitment -
              Inquisit -
              Passion -
              Commitment -
              Respect -
              Motivation -
            
            </span>
          </p>
        </div>






      </section>


      <section className='  h-screen ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}>

        <div className="box-border  flex flex-col w-4/5 h-3/5 px-4  py-4 
  m-auto p-0">

          <h2 className=' text-2xl pt-2'>Works</h2>


          <div className="  pt-40">

            <h2 className=' pb-6 uppercase' >
              <span className='  font-bold'> N01:</span> Anticip
            </h2>

            <div className="box-border m-0  lg:py-24 p-0 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between  lg:mx-auto">

              <div data-aos="zoom-in-up" data-aos-duration="1500" className='transition duration-500 ease-in-out transform  hover:scale-110 cursor-pointer'>
                <Image 
                  src="/anticip.png"
                  alt='anticip team staffing agency'
                  width={800}
                  height={450} />
              </div>


              <div data-aos="fade-down-right" data-aos-duration="1500" >
                <h2 className='2xl:text-5xl 2xl:mb-2  font-semibold'>
                  Anticip Team
                </h2>

                <h3>
                  Professional Work · 2021 · Development
                </h3>

                <a href="">
                  View more
                </a>

              </div>


            </div>

          </div>




        </div>
      </section>


    </>

  )
}

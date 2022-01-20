import React from 'react'
import Image from 'next/image'

import roundtxt from '../../public/circletext.f0059cc8.svg'



export default function Hero() {
    
  const current = new Date();
  const date = `${current.getHours()}:${current.getUTCMinutes()}   ${current.getUTCDate()}/${current.getUTCMonth()+1}/${current.getFullYear()} `;


  
  
  return (
       <>
        <section className=' scroll-smooth   h-screen w-screen ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}>
 

 <div data-aos="fade-right" data-aos-duration="2500" className=' box-border  flex flex-col w-4/5 h-4/5 px-4  py-4 md:pt-20 xs:pt-10 
m-auto   '>
   <div className=''>

     <h1 className='box-border  m-0  pb-10  text-xl whitespace-nowrap  sm:whitespace-normal   xs:whitespace-normal font-semibold uppercase text-gray-600 tracking-wider '>Full Stack Web Developer -
      Front end Oriented -
      Logo Creator </h1>
   </div>


   <div data-aos="fade-down" data-aos-duration="3000" className=" w-full my-auto  lg:h-72 lg:mb-20 2xl:h-60 flex  justify-between ">

  

     <h1 className=' 2xl:text-8xl  leading-4 mt-3 w-3/5 lg:text-7xl lg:block font-semibold lg:leading-4 lg:mt-4 lg:tracking-tighter lg:w-3/5 2xl:leading-4 2xl:mt-1 2xl:w-3/5  lg:transform-none md:transform-none xs:-rotate-90 xs:text-5xl uppercase '>Jose Batumeni</h1>
     <div className="w-48 2xl:w-60">
       <Image className='  animate-spin'
         src={roundtxt}
         alt='roundanimation'
       />
     </div>
   </div>

   <div className='flex
w-full justify-between '>
     <h1 className='text-xl'>{date}</h1>
     <a className=' text-xl   hover:underline' href="mailto:Btnjose@gmail.com">Btnjose@gmail.com</a>

   </div>

 </div>



</section>
       
       </>
    )
}

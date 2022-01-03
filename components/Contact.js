import React from 'react'

export default function Contact() {
    
    
    
    return (
        <section className='h-max w-full ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}>


            <div className="box-border mx-auto mt-28 flex flex-col  w-4/5 h-3/5 px-4  py-12  m-auto p-0">
                <h2 className=' text-3xl font-semibold  '>Contact</h2>
                
                <h2 className="text-8xl lg:mx-0 lg:mt-6 lg:mb-2.5 py-40 font-extrabold " data-aos="zoom-in-down" data-aos-duration="1500"> Get in touch</h2>

                <h3  className='box-border font-medium text-2xl mx-0 mb-8 mt-16 p-0  lg:mt-8'> Looking to join or work with an organization <br/> that will leverage my skills and facilitate my professional
development <br/> in frontend and backend development.</h3>

<p className=' mb-8 uppercase'>Brussels, Belgium</p>


<a href="">Btnjose@gmail.com</a>

<div className="box-border mx-0 mb-0 mt-12 p-0">
    <a className='bg-no-repeat box-border inline-block font-semibold text-xl mr-1 p-1 uppercase no-underline border-2 border-black   ' href=""><span>LInkedin</span></a>
    <a className='bg-no-repeat box-border inline-block font-semibold text-xl ml-1 p-1 uppercase no-underline border-2 border-black' href="">
        <span>
        Github
        </span>
    </a>
</div>


<div className='box-border flex items-center justify-between mx-0 mb-4 mt-16 p-0'>
<p className=" uppercase"> 2022 Jose batumeni</p>
<a href="text-right">Go to top</a>
</div>

            </div>
        </section>
    )
}

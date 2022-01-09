import React from 'react'
import Navbar from '../../components/Navbar'
import Link from 'next/link'


export default function index() {
    return (
        <>
        <section className='h-screen w-full flex flex-col  ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }} >
   <Navbar/>
   <div className=' mx-auto justify-center self-center'>
       <h1 className=' py-80 text-8xl' >   Nothing to see here...</h1>

   </div >
   <Link href='/'>
       <div className='mx-auto justify-center self-center'><button className='border-black border-2  p-3 hover:bg-black hover:text-white'>get back</button></div>
   </Link>
        </section>
        </>
    )
    
}

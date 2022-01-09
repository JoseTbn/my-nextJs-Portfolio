import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <>
            <header className=' container '>

<nav className='box-border hidden justify-between m-0 px-0 py-8 lg:flex lg:justify-end lg:ml-auto uppercase'>
  <ul>
    <Link href='/work'><a className='lg:inline-block lg:text-xl lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline md:text-xs font-semibold uppercase text-gray-600 tracking-wider' href="">work</a>
    </Link >
   
    <Link href='about'><a className='lg:inline-block lg:text-xl  lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline font-semibold uppercase text-gray-600 tracking-wider' href="">about</a></Link>
    
    <Link href='contact'><a className='lg:inline-block lg:text-xl  lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline font-semibold uppercase text-gray-600 tracking-wider' href="">contact</a></Link>
  </ul>
</nav>

<nav className=' lg:hidden 2xl:hidden  font-semibold flex w-screen mx-auto p-5 justify-between'>
<a href="">
Work
</a>

<button className=' border-black border-2 py-2 px-4'>Menu</button>
</nav>



</header>
            
            </>
        </div>
    )
}

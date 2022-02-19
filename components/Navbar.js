import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <>
            <header class=' container '>

<nav class='box-border hidden justify-between m-0 px-0 py-8 lg:flex lg:justify-end lg:ml-auto uppercase'>
  <ul>
    <Link href='/work'><a class='lg:inline-block lg:text-xl lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline md:text-xs font-semibold uppercase text-gray-600 tracking-wider' href="">work</a>
    </Link >
   
    <Link href='about'><a class='lg:inline-block lg:text-xl  lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline font-semibold uppercase text-gray-600 tracking-wider' href="">about</a></Link>
    
    <Link href='contact'><a class='lg:inline-block lg:text-xl  lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline font-semibold uppercase text-gray-600 tracking-wider' href="">contact</a></Link>
  </ul>
</nav>

<nav class=' lg:hidden 2xl:hidden  font-semibold flex w-screen mx-auto p-5 justify-between'>
<a href="">
Work
</a>

<button class=' border-black border-2 py-2 px-4'>Menu</button>
</nav>



</header>
            
            </>
        </div>
    )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import roundtxt from '../public/circletext.f0059cc8.svg'
import noise from '../public/noise.d095195e.png'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

import About from '../Components/About'
import Slidetext from '../Components/Slidetext'
import Works from '../Components/Works'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'



export default function Home() {

  const current = new Date();
  const date = `${current.getHours()}:${current.getUTCMinutes()}   ${current.getUTCDate()}/${current.getUTCMonth() + 1}/${current.getFullYear()} `;


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
        <title>Jojo Front End Adventures</title>
      </Head>
      <Hero />
      <Navbar />

      <Slidetext />
      <Works />
      <section className=' h-max w-screen pt-1' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}>
        <Slidetext />
        <About />
        <Slidetext />
        <Contact />
      </section>



    </>

  )
}

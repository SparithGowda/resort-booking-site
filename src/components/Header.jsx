import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"







const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden pt-20' style={{ backgroundImage: "url('/home.jpg')" }}  id='Header'>
        <Navbar/>
        <motion.div 
        
        initial={{opacity: 0,y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1,y:0}}
        viewport={{once: true}}
        
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>

            <h2 className='text-5xl sm:text-6xl md:text-[82pxl] inline-block max-w-3xl font-semibold'>"Discover Serenity at Coffee Grove Retreat – Where Your Dream Escape Begins. ☕🌿✨"</h2>
            <div className='space-x-6 mt-16'>
                <a href="#Projects" className='border border-white px-8 py-3 rounded'>AMENITIES</a>
                <a href="#Booking" className='bg-gradient-to-br from-[#202123] to-[#343541] px-8 py-3 rounded'>BOOK NOW</a>


            </div>


        </motion.div>
      
    </div>
  )
}

export default Header

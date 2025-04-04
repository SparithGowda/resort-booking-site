import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
import homestay from '../assets/homestay.jpg'

const About = () => {
  return (


    <motion.div

    
    initial={{opacity: 0,x:200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1,x:0}}
    viewport={{once: true}}



    
    
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'> Our Brand</span></h1>
        <p className='text-black-500 max-w-xl text-center mb-8'>Nestled in the heart of nature, <span className="bg-yellow-300 text-gray-900 px-2 py-1 rounded-md">
  Coffee Grove Retreat
</span> is a serene retreat designed for those seeking luxury, relaxation, and adventure. Surrounded by breathtaking landscapes, our resort offers a perfect blend of modern comforts and natural beauty, providing guests with an unforgettable experience.

Whether you're looking to unwind in our elegantly designed villas, indulge in world-class cuisine, or rejuvenate at our spa, every moment at <span className="bg-yellow-300 text-gray-900 px-2 py-1 rounded-md">
  Coffee Grove Retreat
</span> Retreat!!! is crafted for your ultimate comfort. Our resort features private pools, lush gardens, and exclusive beach or hillside views, ensuring a tranquil escape from the hustle and bustle of daily life.</p>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-20'>
                <img src={homestay} alt="" className='w-full sm:w-1/2 max-w-lg' />
                  <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-1o w-full 2xl pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-black-800'>10+</p>
                            <p >Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-black-800'>5000+</p>
                            <p >Customer visits.</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-black-800'>A++</p>
                            <p >Accredition from <strong>'Government of Karnataka'</strong></p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-black-800'>8+</p>
                            <p>Amenities</p>
                        </div>
                  </div>
                  
                    <button className='bg-gradient-to-br from-[#202123] to-[#343541] text-white px-8 py-2 rounded ml-16'> LEARN MORE </button>


                    
                    
                    
                  </div>          






        </div>

      
    </motion.div>
  )
}

export default About

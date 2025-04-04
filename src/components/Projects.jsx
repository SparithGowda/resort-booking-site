import React, {useEffect, useState} from 'react'
import { assets,projectsData } from '../assets/assets'
import {motion} from 'framer-motion'


const Projects = () => {

      const [currentIndex, setCurrentIndex] = useState(0);
      const [cardsToShow, setCardsToShow] = useState(1);


      useEffect(()=>{
      const updateCardsToShow = ()=>{
        if(window.innerWidth >=1024){
          setCardsToShow(projectsData.length);
        }
        else{
          setCardsToShow(1);
        }
      };

        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return ()=> window.removeEventListener('resize', updateCardsToShow);



      }
    ,[])


      const nextProject = ()=>{
              setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)

      }

      const prevProject = ()=>{
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)

}


  return (
    <motion.div
      initial={{opacity: 0,x:-200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1,x:0}}
      viewport={{once: true}}
    
    
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>


        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Amenities<span className='underline underline-offset-4 decoration-1 under font-light' ></span></h1>
        <p className='text-center text-black-300 font-bold mb-8 max-w-120 mx-auto'>Come, immerse yourself in the beauty of the Western Ghats, savor the finest local flavors, and create unforgettable memories. Your perfect escape begins here!!! </p>


        {/* slider buttons */}

        <div className='relative mb-8'>
  {/* Previous Button - Placed on the left of the first image */}
  <button 
    onClick={prevProject} 
    className='absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded z-10' 
    aria-label='Previous Project'>
    <img src={assets.left_arrow} alt="Previous" />
  </button>

  {/* project slider container */}
  <div className='overflow-hidden mx-12'> 
    <div className='flex gap-8 transition-transform duration-500 ease-in-out'
         style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
      {projectsData.map((project, index) => (
        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
          <img src={project.image} alt={project.title} className='w-full h-64 object-cover mb-14'  />
          
          <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {project.title}
            </h2>

            <p className='text-gray-500 text-sm mt-2 text-center'>
              {project.price} <span className='px-1'></span> {project.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Next Button - Placed on the right of the last image */}
  <button 
    onClick={nextProject} 
    className='absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded z-10' 
    aria-label='Next Project'>
    <img src={assets.right_arrow} alt="Next" />
  </button>
</div>


                
    </motion.div>
  )
}

export default Projects

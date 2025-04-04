import React from 'react'
import { testimonialsData, assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-16 w-full"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer <span className="underline font-light">Testimonials</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">
        What Our Guests Say
      </p>

      {/* Parent flex container that ensures all testimonials are displayed in a row */}
      <div className="flex flex-wrap justify-center items-stretch gap-x-8 px-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="w-[350px] border shadow-lg rounded-lg px-8 py-12 text-center flex flex-col items-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array(testimonial.rating)
                .fill()
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star" />
                ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials

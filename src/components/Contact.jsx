import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const accommodationDetails = {
  "Premium Cottage": { image: "premium-cottage.jpg", price: 5000 },
  "Family Space": { image: "family-space.jpg", price: 3000 },
  "Dormitory": { image: "dormitory.jpg", price: 1500 },
  "Glamping Tent": { image: "glamping-tent.jpg", price: 4000 }
};

const BookingForm = () => {
  const [result, setResult] = useState("");
  const [selectedAccommodation, setSelectedAccommodation] = useState("");
  const [price, setPrice] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
  
    if (!selectedAccommodation || !price) {
      toast.error("Please select an accommodation type.");
      return;
    }
  
    const formData = new FormData(event.target);
  
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // 🔁 Replace this with your real Razorpay key
      amount: price * 100, // Razorpay needs the amount in paise
      currency: "INR",
      name: "Resort Booking",
      description: selectedAccommodation,
      handler: async function (response) {
        // ✅ Payment success — now submit form to Web3Forms
        formData.append("access_key", "0c3dd69f-1900-4640-84ed-9e9ae4d5b051");
        formData.append("razorpay_payment_id", response.razorpay_payment_id);
  
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
  
        const data = await res.json();
        if (data.success) {
          toast.success("Booking & Payment successful!");
          event.target.reset();
          setSelectedAccommodation("");
          setPrice(null);
        } else {
          console.log("Web3Forms Error", data);
          toast.error("Booking failed after payment.");
        }
      },
      prefill: {
        name: formData.get("Name"),
        email: formData.get("Email"),
        contact: formData.get("Phone"),
      },
      theme: {
        color: "#1e3a8a",
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  


  const handleAccommodationChange = (e) => {
    const selectedType = e.target.value;
    setSelectedAccommodation(selectedType);
    setPrice(accommodationDetails[selectedType]?.price || null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Booking'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Book Your Stay<span className='underline underline-offset-4 decoration-1 font-light'> Now</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Plan your perfect getaway with us. Secure your reservation today!</p>

      <div className='flex flex-col lg:flex-row items-start gap-8'>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8 flex-1'>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
              Full Name
              <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Full Name' required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
              Email
              <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
            </div>
          </div>

          <div className='my-6 text-left'>
            Aadhar Card Number
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="tel" name='Aadhar' placeholder='Aadhar Number'  required />
          </div>

          <div className='my-6 text-left'>
            Phone Number
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="tel" name='Phone' placeholder='Phone Number' pattern="[0-9]{10}" required />
          </div>

          <div className='my-6 text-left'>
            Accommodation Type
            <select 
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2' 
              name='Accommodation' 
              required 
              onChange={handleAccommodationChange}>
              <option value="">Select Accommodation Type</option>
              {Object.keys(accommodationDetails).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {price && (
            <div className='my-4 text-left text-lg font-semibold text-gray-700'>
              Price per Night: ₹{price}
            </div>
          )}

          <button className='bg-blue-600 text-white px-12 py-2 mb-10 rounded'> {result ? result : "Book Now"} </button>
        </form>

        {selectedAccommodation && (
          <div className='w-full lg:w-1/3'>
            <h3 className='text-xl font-semibold mb-2'>Selected Accommodation</h3>
            <img 
              src={`/images/${accommodationDetails[selectedAccommodation].image}`} 
              alt={selectedAccommodation} 
              className='w-full rounded-lg shadow-lg' />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BookingForm;

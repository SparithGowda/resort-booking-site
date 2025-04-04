import React from "react";

const Directions = ({ onClose }) => {
    const resortLocation =
        "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAJk99cku47dsLxPv1hdXJmIhHV1MQyeFU&origin=Your+Current+Location&destination=28.6139,77.2090";

    return (
        <div className="bg-white text-black rounded-lg shadow-lg p-3 w-80 z-50 relative">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 rounded-full"
            >
                ✖
            </button>

            {/* Google Maps Embed */}
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83924041158!2d77.06889998302785!3d28.527280343195103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38dc57b1a79%3A0x47b1f51830e15c5d!2sNew+Delhi%2C+Delhi!5e0!3m2!1sen!2sin!4v1643962471821!5m2!1sen!2sin"
  className="w-full h-60 rounded-md"
  allowFullScreen=""
  loading="lazy"
/>

        </div>
    );
};

export default Directions;

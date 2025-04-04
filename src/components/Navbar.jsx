

import React, { useEffect, useState, useRef } from 'react';
import { assets } from '../assets/assets';
import loggo from '../assets/loggo.png';
import WeatherWidget from './WeatherWidget';
import Directions from './Directions';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDirections, setShowDirections] = useState(false); // NEW
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#202123] to-[#343541] shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img src={loggo} alt="" className="w-16 cursor-pointer" onClick={() => window.location.hash = "#Header"} />

                <ul className="hidden md:flex gap-7 text-white items-center">
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">HOME</a>
                    <a href="#About" className="cursor-pointer hover:text-gray-400">ABOUT</a>
                    <a href="#Projects" className="cursor-pointer hover:text-gray-400">AMENITIES</a>
                    <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">TESTIMONIALS</a>

                    {/* Contact Dropdown */}
                    <div className="relative" ref={dropdownRef}>
    {/* CONTACT Button */}
    <button 
        className="cursor-pointer hover:text-gray-400 focus:outline-none"
        onClick={() => setShowDropdown(!showDropdown)}
    >
        CONTACT
    </button>

    {/* Dropdown Content */}
    {showDropdown && (
        <div className="absolute bg-white text-black mt-2 rounded-md shadow-lg py-2 w-32">
            <a href="#Booking" className="block px-4 py-2 hover:bg-gray-200">Booking</a>
            <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                onClick={() => {
                    setShowDropdown(false);
                    setShowDirections(true);
                }}
            >
                Directions
            </button>
        </div>
    )}

    {/* Directions Popup Positioned Below CONTACT Button */}
    {showDirections && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-36 z-50">
            <Directions onClose={() => setShowDirections(false)} />
        </div>
    )}
</div>

                    
                </ul>

                <WeatherWidget />

                <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className="md:hidden w-7 cursor-pointer" alt="" />
            </div>

            {/* ----- Mobile Menu ----- */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className="flex justify-end p-6 cursor-pointer">
                    <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className="w-6" alt="" />
                </div>

                <ul className="flex flex-col items-center gap-2 px-5 text-lg font-medium">
                    <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2 rounded-full inline-block">Projects</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

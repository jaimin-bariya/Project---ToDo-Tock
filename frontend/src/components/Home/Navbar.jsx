import React from 'react';
import WebLogo from '../../assets/logos/weblogo.png'

import { useContext } from "react";
import {HomeContext} from '../../Conexts/Contexts'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {



    const navigate = useNavigate()
    

  const {openModal, openLoginModal} = useContext(HomeContext)



    return (
        <nav className="flex justify-between items-center py-5 px-8 border-b border-gray-300">
            {/* Logo */}
            <div className="flex items-center">
                <img src={WebLogo} alt="Todo Tock Logo" className="w-16 mr-3" />
                <span className="text-gray-700 text-xl font-medium">Quick, Reliable, and Built for You</span> 
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 border border-gray-300 rounded-lg py-2 px-4 -ml-36">
                <ul className='flex gap-4  hover:cursor-pointer'>

                    <li onClick={() => navigate('/')} className="text-gray-600 hover:text-orange-600 hover:font-semibold border-b-2 border-transparent hover:border-gray-900 transition">Home</li>
                    <li href="/todotock/product" onClick={() => navigate('/todotock/product')} className="text-gray-600 hover:text-orange-600 hover:font-semibold border-b-2 border-transparent hover:border-gray-900 transition">Product</li>
                    <li onClick={() => navigate('/todotock/contact')} className="text-gray-600 hover:text-orange-600 hover:font-semibold border-b-2 border-transparent hover:border-gray-900 transition">Contact</li>
                    <li onClick={() => navigate('/todotock/about')} className="text-gray-600 hover:text-orange-600 hover:font-semibold border-b-2 border-transparent hover:border-gray-900 transition">About</li>
                    <a href="https://github.com/jaimin-bariya/Project---ToDo-Tock" target='_blank' className="text-gray-600 hover:text-orange-600 hover:font-semibold border-b-2 border-transparent hover:border-gray-900 transition"> Github</a>

                </ul>
                

                
            </div>
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
            <button onClick={openLoginModal} className="border border-gray-300 py-2 px-4 rounded-lg bg-white text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 transition">
                    Log in
                </button>
                <button onClick={openModal} className="bg-gradient-to-r from-purple-500 to-teal-400 text-white py-2 px-4 rounded-lg border border-transparent hover:border-gray-300 transition">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

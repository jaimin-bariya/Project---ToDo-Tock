import Navbar from "./Navbar";

import {Hero, HomeContent, Login} from '../index'
import { useState, useEffect, useContext } from "react";
import SignUp from "./SignUp";
// import Login from "./Login";

import { AuthContext, HomeContext } from "../../Conexts/Contexts"; // Import the AuthContext
import { Outlet, useNavigate } from 'react-router-dom'; // Import useHistory for navigation



const HomePage = () => {


  const {user} = useContext(AuthContext)
  const {isLoginModalOpen, isModalOpen } = useContext(HomeContext)

  const navigate = useNavigate()


  useEffect(() => {
    if (user) {
      navigate('/{123}/Home') // Redirect to user home page if authenticated
    }
  }, [user, navigate]);



  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-center ">
        {/* Pass modal control functions to both Navbar and Hero */}
        <Navbar />


        <Outlet/>

        {/* Sign-Up Modal */}
        {isModalOpen && (
          <SignUp  />
        )}

        {/* Log In Modal */}

        {isLoginModalOpen && (
          <Login />
        )}


      </div>
    </>
  );
};

export default HomePage;

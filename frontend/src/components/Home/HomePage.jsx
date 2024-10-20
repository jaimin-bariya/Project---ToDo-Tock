import Navbar from "./Navbar";

import {Hero, Login} from '../index'
import { useState, useEffect, useContext } from "react";
import SignUp from "./SignUp";
// import Login from "./Login";

import { AuthContext } from "../../Conexts/Contexts"; // Import the AuthContext
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation



const HomePage = () => {
  // state to manage sign up modal  visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  // state to manage login modal visibility
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)


  const {user} = useContext(AuthContext)
  const navigate = useNavigate()


  useEffect(() => {
    if (user) {
      navigate('/{123}/Home') // Redirect to user home page if authenticated
    }
  }, [user, navigate]);


  const changeAuthOptions = () => {
    console.log("cliced");
    setIsLoginModalOpen(!isLoginModalOpen)
    setIsModalOpen(!isModalOpen)
    
  }


  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-center ">
        {/* Pass modal control functions to both Navbar and Hero */}
        <Navbar openModal={openModal} openSigninModal={openLoginModal} />
        <Hero openModal={openModal} />

        {/* Sign-Up Modal */}
        {isModalOpen && (
          <SignUp closeModal={closeModal} changeAuthOptions={changeAuthOptions} />
        )}

        {/* Log In Modal */}

        {isLoginModalOpen && (
          <Login closeLoginModal={closeLoginModal} changeAuthOptions={changeAuthOptions}/>
        )}


      </div>
    </>
  );
};

export default HomePage;

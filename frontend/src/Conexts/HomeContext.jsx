import axios from "axios";
import { Home } from "lucide-react";
import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const HomeContext = createContext()



export const MyHomeContext = ({children}) => {


    // state to manage sign up modal  visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    // state to manage login modal visibility
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const openLoginModal = () => setIsLoginModalOpen(true)
    const closeLoginModal = () => setIsLoginModalOpen(false)


    
    const changeAuthOptions = () => {
        console.log("cliced");
        setIsLoginModalOpen(!isLoginModalOpen)
        setIsModalOpen(!isModalOpen)
        
    }


    return (

        <HomeContext.Provider value={{
            isModalOpen, 
            setIsModalOpen, 
            openModal,
            closeModal,
            isLoginModalOpen,
            setIsLoginModalOpen,
            openLoginModal,
            closeLoginModal ,
            changeAuthOptions
            
            }}>

            {children}

        </HomeContext.Provider>
    )


}
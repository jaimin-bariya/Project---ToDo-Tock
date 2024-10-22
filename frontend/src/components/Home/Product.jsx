import { useContext } from "react";
import {HomeContext} from '../../Conexts/Contexts'
import { SignUp, Login } from "../index";


const Product = () => {


    const {openModal, isModalOpen, isLoginModalOpen} = useContext(HomeContext)

    return (
        <>
        <div className="mt-12 p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover the Power of ToDo Tock
        </h1>
        <p className="text-gray-600 text-lg mb-6">
            Simplify your task management with many features, 
            designed to boost your productivity and help you achieve more.
        </p>

        {/* Left and Right Section */}
        <div className="flex flex-col md:flex-row justify-center items-start mt-12">
            {/* Left Section - Screenshots */}
            <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Screenshots</h2>
            <div className="grid grid-cols-1 gap-4">
                <img
                src="screenshot1.png"
                alt="Screenshot 1"
                className="rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105"
                />
                <img
                src="screenshot2.png"
                alt="Screenshot 2"
                className="rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105"
                />
                <img
                src="screenshot3.png"
                alt="Screenshot 3"
                className="rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105"
                />
            </div>
            </div>

            {/* Right Section - Description */}
            <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Description</h2>
            <p className="text-gray-600 text-lg leading-7 mb-4">
                ToDo Tock provides you with the tools to organize your tasks efficiently, 
                enabling you to stay on top of your work with ease. Enjoy seamless task 
                management, team collaboration, and progress tracking all in one platform.
            </p>
            <p className="text-gray-600 text-lg leading-7">
                real-time collaboration, and secure file storage, 
                ToDo Tock is perfect for teams of all sizes to streamline their workflows 
                and boost productivity.
            </p>
            <button onClick={openModal} className="bg-gradient-to-r mt-8 from-orange-400 to-orange-600 text-white py-3 px-8 rounded-full text-lg">
                Learn More →
            </button>
            </div>
        </div>


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

export default Product;
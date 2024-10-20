// components/MainMenuBar.jsx
import React from 'react';
import { Profile, Setting, Code } from "../../assets/imgs";
import { IoLogOut } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

import { useContext } from 'react';
import {AuthContext} from '../../Conexts/Contexts'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const MainMenuBar = () => {


  const {logout} = useContext(AuthContext)


  const handleLogOut = () => {

    logout()

  }
  return (
    <TooltipProvider>

    <div className="flex flex-col  w-12 bg-gray-100 shadow-lg py-5">
      {/* Profile Icon */}

      {/* Profile Icon with Tooltip */}
      <Tooltip>
          <TooltipTrigger asChild>
            <div className="menu-item flex justify-center items-center mb-6 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
              <img src={Profile} alt="Profile" className="w-8 h-8" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Profile</p>
          </TooltipContent>
        </Tooltip>


      {/* Other Icons */}
      <Tooltip>
        <TooltipTrigger asChild>
      <div className="menu-item flex justify-center items-center mb-6 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
        <img src={Setting} alt="Tick" className="w-8 h-8" />
      </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Setting</p>
      </TooltipContent>
      </Tooltip>



      {/* Code Icon with Tooltip */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="menu-item flex justify-center items-center mb-6 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
              <img src={Code} alt="Code" className="w-8 h-8" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Code</p>
          </TooltipContent>
        </Tooltip>

        {/* Logout Icon with Tooltip */}



        <AlertDialog>
  <AlertDialogTrigger>
  <Tooltip>
          <TooltipTrigger asChild>
            <div className="menu-item flex justify-center items-center mb-6 p-2 rounded-full hover:bg-gray-300 cursor-pointer" >
              <IoLogOut className='w-8 h-8' />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Log Out</p>
          </TooltipContent>
        </Tooltip>

  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action will log you out from this website.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleLogOut}>Logout</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>



      
    </div>

    </TooltipProvider>
  );
};

export default MainMenuBar;

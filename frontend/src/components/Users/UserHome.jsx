
import { Outlet } from 'react-router-dom';
import {MainMenuBar} from '../index'

import {Sidebar} from '../index'
import { useContext } from "react";


const UserHome = () => {
  

  


  return (


      <div className="flex border border-gray-300 min-h-screen box-border h-screen overflow-hidden">


        <MainMenuBar />

          
        
        <Sidebar /> {/* Include the sidebar */}
        <div className="flex-1 bg-white">
          {/* This is where the nested routes will render */}
          <Outlet />

        </div>
      </div>


  );
};

export default UserHome;

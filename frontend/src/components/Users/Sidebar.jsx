// components/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaFileAlt, FaTachometerAlt, FaInbox, FaPlus, FaDotCircle, FaTasks, FaClock } from 'react-icons/fa';
import { GiTomato } from "react-icons/gi";
import { LuListTodo } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { AuthContext } from '../../Conexts/Contexts';
import { useContext } from 'react';


const Sidebar = () => {
  const location = useLocation(); // Get the current location

  const print = (location) => {
    console.log((location.pathname));
    
  }


  const {userId} = useContext(AuthContext)
  console.log(userId);
  

  return (
    <div className="w-64 h-screen p-5 bg-white shadow-lg border ">


      {/* User Info Header */}
      <div className="flex items-center mb-2">
        {/* <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold text-lg">
          J
        </div> */}
        <span className="ml-2 font-bold text-sm">Jaimin Bariya's Workspace</span>
      </div>

      <hr className=' w-full mb-4 ' />

      {/* Navigation Links */}
      <ul className="space-y-1">


        {/* Home  */}

        <li>
          <Link
            to={`/${userId}/home`}
            className={`flex items-center p-2 rounded transition-colors duration-300 ${
              location.pathname === `/${userId}/home` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
          >
            <FaHome className="mr-2" /> <span>Home</span>
          </Link>
        </li>

        

        {/* Inbox  */}
        <li>
          <Link
            to={`/${userId}/inbox`}
            className={`flex items-center p-2 rounded transition-colors duration-300 ${
              location.pathname.includes(`/inbox`) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
              
              
            }`}
            
          >
            <FaInbox className="mr-2" /> <span>Inbox</span>
          </Link>
        </li>


        {/* Docs  */}
        <li>
          <Link
            to={`/${userId}/docs`}
            className={`flex items-center p-2 rounded transition-colors duration-300 ${
              location.pathname === `/${userId}/docs` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
          >
            <FaFileAlt className="mr-2" /> <span>Docs</span>
          </Link>
        </li>


        {/* Dashboards  */}
        <li>
          <Link
            to={`/${userId}/dashboards`}
            className={`flex items-center p-2 rounded transition-colors duration-300 ${
              location.pathname === `/${userId}/dashboards` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
          >
            <FaTachometerAlt className="mr-2" /> <span>Dashboards</span>
          </Link>
        </li>


        {/* Goals  */}
        {/* <li>
          <Link
            to={`/${userId}/goals`}
            className={`flex items-center p-2 rounded transition-colors duration-300 ${
              location.pathname === `/${userId}/goals` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
          >
            <FaDotCircle className="mr-2" /> <span>Goals</span>
          </Link>
        </li> */}


        {/* Projects  */}
        {/* <li>
          <Link
            to={`/${userId}/projects`}
            className={`flex items-center p-2 rounded transition-colors duration-300 ${
              location.pathname === `/${userId}/projects` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
          >
            <GrProjects className="mr-2" /> <span>Projects</span>
          </Link>
        </li> */}


        {/* ToDos  */}
        <li>
          <Link
            to={`/${userId}/my-todos`}
            className={`flex items-center p-2 rounded transition-colors duration-300 ${
              location.pathname === `/${userId}/my-todos` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
          >
            <LuListTodo className="mr-2" /> <span>ToDos</span>
          </Link>
        </li>


        {/* Pomodoro  */}
        {/* <li>
          <Link
            to={`/${userId}/pomodoro`}
            className={`flex items-center p-2 rounded transition-colors duration-300 ${
              location.pathname === `/${userId}/pomodoro` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
          >
            <GiTomato className="mr-2" /> <span>Pomodoro</span>
          </Link>
        </li> */}

        {/* Teams  */}
        <li>
          <Link
            to={`/${userId}/teams`}
            className={`flex items-center p-2 rounded transition-colors duration-300 ${
              location.pathname === `/${userId}/teams` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
          >
            <RiTeamFill className="mr-2" /> <span>Teams</span>
          </Link>
        </li>

        {/* More  */}
        {/* <li>
          <Link
            to={`/${userId}/time-tracking`}
            className={`flex items-center p-2 rounded transition-colors duration-300 ${
              location.pathname === `/${userId}/time-tracking` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
            }`}
          >
            <FaClock className="mr-2" /> <span>Time Tracking</span>
          </Link>
        </li> */}

      </ul>



      {/* Additional Sections */}
      <div className="mt-5 border-t pt-4">
        <h3 className="text-sm font-semibold text-gray-600">Favorites</h3>
        <ul className="space-y-2">
          <li>
            <Link to={`/${userId}/everything`} className="flex items-center p-2 hover:bg-gray-200 rounded">
              <FaPlus className="mr-2" /> Everything
            </Link>
          </li>
        </ul>
        <h3 className="text-sm font-semibold text-gray-600 mt-3">Spaces</h3>
        <ul className="space-y-2">
          <li>
            <Link to={`/${userId}/team-space`} className="flex items-center p-2 hover:bg-gray-200 rounded">
              <FaPlus className="mr-2" /> Team Space
            </Link>
          </li>
          <li>
            <Link to={`/${userId}/projects`} className="flex items-center p-2 hover:bg-gray-200 rounded">
              <FaPlus className="mr-2" /> Projects
            </Link>
          </li>
          <li>
            <Link to={`/${userId}/view-all`} className="flex items-center p-2 hover:bg-gray-200 rounded">
              <FaPlus className="mr-2" /> View all Spaces
            </Link>
          </li>
          <li>
            <Link to={`/${userId}/create-space`} className="flex items-center p-2 hover:bg-gray-200 rounded">
              <FaPlus className="mr-2" /> Create Space
            </Link>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

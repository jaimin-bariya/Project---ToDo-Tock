import { Greeting, TopBarInbox, All, Starred, Important } from "../../index";
import { FiStar, FiTag, FiTrash, FiInbox } from "react-icons/fi";
import { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MyInboxContentProvider } from "../../../Conexts/InboxContext";

import {AuthContext} from '../../../Conexts/Contexts'


// components/Inbox.jsx
const Inbox = () => {



  const location = useLocation()


  const {userId} = useContext(AuthContext)


  return (

    <>
      <div className=" flex flex-col p-0">
        <TopBarInbox />

        {/* Scrollable Content */}
        {/* <div className="overflow-y-auto mt-0 h-[calc(100vh-150px)] p-4">
          <div className="grid grid-cols-2 gap-4 ">
            <Greeting />

            <div className="bg-white p-4 border row-span-2 h-fit min-h-64 rounded-lg">
              <All emails={emails} />
            </div>

            <div className="bg-white p-4 border min-h-64 h-fit  rounded-lg">
              <Important emails={emails}/>
            </div>

            <div className="bg-white p-4 border min-h-64 h-fit rounded-lg">
              <Starred emails={emails}/>
            </div>
        
        
        </div>



          

        </div> */}

        <div className="flex h-screen bg-gray-200">

          {/* Sidebar */}
          <div className="w-1/4 bg-white text-gray-800 p-4 shadow-md">
            <h2 className="text-xl font-bold mb-6">Inbox</h2>
            <ul>


              <li>
                <Link
                  to={`/${userId}/inbox`}
                  className={`flex items-center p-2 mb-1 rounded transition-colors duration-300 ${
                    location.pathname === `/${userId}/inbox` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
                  }`}
                >
                  <FiInbox className="mr-2" /> <span>All</span>
                </Link>
            </li>


            <li>
                <Link
                  to={`/${userId}/inbox/important`}
                  className={`flex items-center p-2 mb-1 rounded transition-colors duration-300 ${
                    location.pathname === `/${userId}/inbox/important` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
                  }`}
                >
                  <FiInbox className="mr-2" /> <span>Important</span>
                </Link>
            </li>

            <li>
                <Link
                  to={`/${userId}/inbox/starred`}
                  className={`flex items-center p-2 mb-1 rounded transition-colors duration-300 ${
                    location.pathname === `/${userId}/inbox/starred` ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'
                  }`}
                >
                  <FiInbox className="mr-2" /> <span>Starred</span>
                </Link>
            </li>

              
            </ul>
          </div>



          
          {/* Filtered Emails  */}

          



          {/* Email List */}
          <div className="flex-1 p-4 overflow-auto mb-10">
            {/* {filteredEmails().map((email) => (
              <div
                key={email.id}
                className="bg-white shadow-md rounded p-4 mb-4 flex items-start border-b border-gray-300"
              >
                <div className="flex flex-col justify-center items-center mr-4">
                  <button
                    className="text-gray-600 hover:text-yellow-500"
                    title="Star"
                  >
                    {email.isStarred ? "⭐" : "☆"}
                  </button>
                  <button
                    className="text-gray-600 hover:text-red-500 mt-2"
                    title="Delete"
                  >
                    🗑️
                  </button>
                  <button
                    className="text-gray-600 hover:text-blue-500 mt-2"
                    title="Mark as Important"
                  >
                    {email.isImportant ? "★" : "☆"}
                  </button>
                </div>
                <div className="flex-1">
                  <div className="font-bold">{email.sender}</div>
                  <div className="text-gray-600">{email.content}</div>
                </div>
              </div>
            ))} */}


              
                <Outlet  />
                
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;

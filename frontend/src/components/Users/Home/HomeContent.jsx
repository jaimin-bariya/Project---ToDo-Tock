import {AssignedTask, Greeting, TopBarHome} from '../../index'
import {RecentMsg, RecentDocs, ProjectUpdates, CurrentGoal, YourTodaysTask} from '../../index'
import { useContext, useEffect } from 'react';

import {TaskContext} from '../../../Conexts/Contexts'

const HomeContent = () => {



  const {getAllToDos, isTaskUpdated} = useContext(TaskContext)



    return (
      <>



      <div className=" flex flex-col p-0" >

        <TopBarHome />

        

        {/* Scrollable Content */}
        <div className="overflow-y-auto mt-0 h-[calc(100vh-150px)] p-4">
          
          <div className="grid grid-cols-2 gap-4 ">
            
            
            <Greeting   />

            
          


          <div className="bg-white p-4 border   rounded-lg">
            <RecentMsg />
            
          </div>
          
          <div className="bg-white  p-4 border rounded-lg">
            <YourTodaysTask />
          </div>
          
          <div className="bg-white p-4 border  rounded-lg">
            <RecentDocs />
          </div>
          
          <div className="bg-white p-4 border rounded-lg">
            <ProjectUpdates />
          </div>
          
          <div className="bg-white p-4 border rounded-lg">
            <AssignedTask />
          </div>
          
          <div className="bg-white p-4 border h-64 rounded-lg">
            <CurrentGoal />
          </div>
          
          {/* <div className="bg-white p-4 border h-64 rounded-lg">
            Item 1
          </div>
          
          <div className="bg-white p-4 border h-64 rounded-lg">
            Item 1
          </div> */}

        </div>


          
          
          
          {/* Recents Section */}
          {/* <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Recents</h3>
            <ul className="list-none">
              <li>Task 1 in Project 1</li>
              <li>Task 2 in Project 1</li>
              <li>Task 3</li>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
          </div> */}

          {/* Agenda Section */}
          {/* <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Agenda</h3>
            
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              + Add calendar integrations
            </button>
          </div> */}

          {/* My Work Section */}
          {/* <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">My Work</h3>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              + Add task or reminder
            </button>
          </div> */}

          {/* Assigned to me Section */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Assigned to me</h3>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              + Add task
            </button>
          </div> */}
        </div>


      </div>

      </>

    );
  };
  
  export default HomeContent;
  
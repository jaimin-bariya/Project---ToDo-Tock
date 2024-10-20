// src/App.js
import React, { useEffect, useRef } from 'react';
import TaskList from './TaskList';
import {AdderTask, YourTodaysTask, YourPast7DaysTask, YourTomorrowsTask} from '../../index'
import { useState, useContext } from 'react';
import {TaskContext, AuthContext} from '../../../Conexts/Contexts'
import { FaCheck, FaTrash, FaFlag } from 'react-icons/fa';

// from shadcn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



function ToDos() {


  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)


  const {getAllToDos, isTaskUpdated} = useContext(TaskContext)
  const {userId} = useContext(AuthContext)



  const togglePriority = () => {
    setIsOpen(!isOpen)
  }


  // close the popup if clicked outside
  useEffect (() => {

    try {
      console.log("useid", userId);
      
      const res = getAllToDos(userId)

    } catch (error) {
      console.log("not effect getAllToDos");
      
    }

 
  }, [isTaskUpdated])



  return (
    <div className="App">

      <div className='p-4'>

        <AdderTask />
      
      </div>

      <div className='p-4 grid  grid-cols-3 gap-8 overflow-y-auto mt-0 h-[calc(100vh-150px)] '>
        <div className='w-full p-6 border rounded-lg max-h-96 min-h-96 overflow-y-auto col-span-2  '>
          <Tabs defaultValue="0" >
            <TabsList className='w-full flex gap-2 flex-row'>
            <TabsTrigger value="0"> <FaFlag className="text-grey-500 mr-2" /> No Priority</TabsTrigger>
              <TabsTrigger value="1"> <FaFlag className="text-red-500 mr-2" /> High</TabsTrigger>
              <TabsTrigger value="2"> <FaFlag className="text-green-500 mr-2" /> Medium</TabsTrigger>
              <TabsTrigger value="3"> <FaFlag className="text-blue-500 mr-2" /> Low</TabsTrigger>
              
            </TabsList>
            <TabsContent value="0" className="w-full"><TaskList value={0}  /></TabsContent>
            <TabsContent value="1" className="w-full"><TaskList value={1}  /></TabsContent>
            <TabsContent value="2" className="w-full"><TaskList value={2}  /></TabsContent>
            <TabsContent value="3" className="w-full"><TaskList value={3}  /></TabsContent>
          </Tabs>
        </div>

        <div className="bg-white  p-4 border rounded-lg max-h-96 min-h-96 ">
            <YourTodaysTask />
        </div>

        <div className="bg-white  col-span-2 p-4 border rounded-lg max-h-96 min-h-96 ">
            <YourPast7DaysTask />
        </div>

        <div className="bg-white  p-4 border rounded-lg max-h-96 min-h-96 ">
            <YourTomorrowsTask />
        </div>


      </div>





    </div>
  );
}

export default ToDos;

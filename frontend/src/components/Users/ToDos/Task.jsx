// src/components/Task.js

import { FaCheck, FaTrash, FaFlag } from 'react-icons/fa';


import { useState, useContext } from "react";
import {TaskContext, AuthContext} from '../../../Conexts/Contexts'
import axios from 'axios';


const Task = ({ task }) => {
  const [completed, setCompleted] = useState(false);


  
  const {updateToDo, setIsTaskUpdated, deleteToDo} = useContext(TaskContext)
  const {userId} = useContext(AuthContext)



  const handleDelete = async () => {
    try {

      const res = await deleteToDo(task.id)

    } catch (error) {
      console.log("while delete funciton sending req", error);
      
    }

    setIsTaskUpdated(prev => !prev)

  };


  const handleUpdateStatus = async (event) => {

    console.log(event.target.checked);
    
    const status = event.target.checked

    console.log("my id", task.id);
    

    try {

      const res = await updateToDo(task.id, status)

      
      
    } catch (error) {
      
    }
    

    setIsTaskUpdated(prev => !prev)
    

  }

  return (
    <div className={`flex items-center justify-between p-2 ${task.status ? 'line-through' : ''} font-sans hover:text-grey-600 hover:font-semibold`}>
      <div className="flex items-center">
        <input type="checkbox" defaultChecked={task.status} onClick={handleUpdateStatus}  className="mr-2" />
        <span>{task.title}</span>
      </div>
      <div className="flex items-center">
        {/* <FaFlag className="text-red-500 mr-2" /> */}
        <FaTrash className="cursor-pointer hover:text-red-500" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Task;

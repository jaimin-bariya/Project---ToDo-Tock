import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import {TaskContext, AuthContext} from '../../../Conexts/Contexts'

import {Task} from '../../index'



const AssignedTask = () => {


  const {allTasks, getAllToDos, isTaskUpdated} = useContext(TaskContext)
  const {userId} = useContext(AuthContext)


  useEffect (() => {

    try {
      console.log("useid", userId);
      
      const res = getAllToDos(userId)

    } catch (error) {
      console.log("not effect getAllToDos");
      
    }

 
  }, [isTaskUpdated])



  console.log("ass", allTasks);
  


  return (
    <>
        <p className="mb-2">Assigned Tasks - <Link className=" font-sans hover:text-orange-600 hover:font-semibold" to='/123/dashboards' >All</Link> </p>
        <hr />
        <div className="" >

      <div className="max-h-80 min-h-64 overflow-y-auto ">
        {allTasks
        .filter((task) => task.assignee_id != null)
        .map((task) => (
          <Task
            key={task.id}
            task={task}
            // onDelete={deleteTask}
            // onToggle={toggleTask}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default AssignedTask;
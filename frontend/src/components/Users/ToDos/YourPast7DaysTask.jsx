import { Link } from "react-router-dom";


import {Task} from '../../index'

import { useState, useContext } from "react";
import {TaskContext, AuthContext} from '../../../Conexts/Contexts'




const YourPast7DaysTask = () => {

  const {allTasks} = useContext(TaskContext)
  const {userId} = useContext(AuthContext)



  



  return (
    <>
    <p className="mb-2">Your Past 7 days Personal Tasks - <Link className=" font-sans hover:text-orange-600 hover:font-semibold" to='/123/dashboards' >All</Link> </p>
    <hr />


    <div className="" >

      <div className="max-h-80 min-h-64 overflow-y-auto ">
        {allTasks
        // .filter((task) => task.priority === parseInt(value))
        .filter((task) => new Date(task.due_date).getDate() < new Date().getDate())
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

export default YourPast7DaysTask;
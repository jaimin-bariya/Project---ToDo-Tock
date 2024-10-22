
import Task from "./Task";
import { useState, useContext } from "react";
import {TaskContext, AuthContext} from '../../../Conexts/Contexts'


const TaskList = ({value}) => {


  const {allTasks} = useContext(TaskContext)
  const {userId} = useContext(AuthContext)


    console.log("haha", allTasks);
    



  return (
    <div className="" >

      <div>
        {allTasks
        
        .filter((task) => task.priority === parseInt(value) && task.assignee_id === null )
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
  );
};

export default TaskList;

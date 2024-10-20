
import Task from "./Task";
import { useState, useContext } from "react";
import {TaskContext, AuthContext} from '../../../Conexts/Contexts'


const TaskList = ({value}) => {


  const {allTasks} = useContext(TaskContext)
  const {userId} = useContext(AuthContext)


  


  return (
    <div className="" >

      <div>
        {allTasks
        .filter((task) => task.priority === parseInt(value))
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

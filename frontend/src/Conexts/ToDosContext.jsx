import axios from "axios";
import { isThisHour } from "date-fns";
import { createContext, useState } from "react";

export const tasks = [
    {
      id: 1,
      title: "Finish React tutorial",
      description: "Complete the full React crash course.",
      type: "personal",
      project_id: null,
      assignee_id: null,
      status: "in progress",
      priority: "High",
      due_date: "2024-10-10T00:00:00Z",
      created_at: "2024-10-01T09:30:00Z",
      updated_at: "2024-10-03T11:15:00Z"
    },
    {
      id: 2,
      title: "Implement login feature",
      description: "Develop the login component for the app.",
      type: "project",
      project_id: 101,
      assignee_id: 12,
      status: "pending",
      priority: "High",
      due_date: "2024-10-07T00:00:00Z",
      created_at: "2024-10-01T12:00:00Z",
      updated_at: "2024-10-01T12:00:00Z"
    },
    {
      id: 3,
      title: "Database optimization",
      description: "Optimize the database for better performance.",
      type: "project",
      project_id: 102,
      assignee_id: 13,
      status: "completed",
      priority: "Medium",
      due_date: "2024-09-30T00:00:00Z",
      created_at: "2024-09-15T08:45:00Z",
      updated_at: "2024-10-01T13:00:00Z"
    },
    {
      id: 4,
      title: "Prepare presentation slides",
      description: "Create slides for the upcoming project meeting.",
      type: "personal",
      project_id: null,
      assignee_id: null,
      status: "in progress",
      priority: "Low",
      due_date: "2024-10-12T00:00:00Z",
      created_at: "2024-10-01T10:30:00Z",
      updated_at: "2024-10-03T09:00:00Z"
    },
    {
      id: 5,
      title: "Code review for team",
      description: "Review the code for the team's new feature.",
      type: "project",
      project_id: 103,
      assignee_id: 14,
      status: "in progress",
      priority: "High",
      due_date: "2024-10-06T00:00:00Z",
      created_at: "2024-10-01T14:00:00Z",
      updated_at: "2024-10-03T10:00:00Z"
    },
    {
      id: 6,
      title: "Update API documentation",
      description: "Document the new endpoints for the API.",
      type: "project",
      project_id: 101,
      assignee_id: 15,
      status: "pending",
      priority: "Medium",
      due_date: "2024-10-09T00:00:00Z",
      created_at: "2024-10-01T16:00:00Z",
      updated_at: "2024-10-01T16:00:00Z"
    },
    {
      id: 7,
      title: "Organize desk",
      description: "Clear the workspace and organize documents.",
      type: "personal",
      project_id: null,
      assignee_id: null,
      status: "completed",
      priority: "Low",
      due_date: "2024-10-01T00:00:00Z",
      created_at: "2024-09-30T09:30:00Z",
      updated_at: "2024-10-01T09:30:00Z"
    },
    {
      id: 8,
      title: "Deploy staging environment",
      description: "Set up and deploy the app to the staging environment.",
      type: "project",
      project_id: 104,
      assignee_id: 16,
      status: "in progress",
      priority: "High",
      due_date: "2024-10-05T00:00:00Z",
      created_at: "2024-10-01T18:30:00Z",
      updated_at: "2024-10-02T11:30:00Z"
    },
    {
      id: 9,
      title: "Design new app logo",
      description: "Create a new logo design for the mobile app.",
      type: "personal",
      project_id: null,
      assignee_id: null,
      status: "pending",
      priority: "Medium",
      due_date: "2024-10-15T00:00:00Z",
      created_at: "2024-10-03T10:15:00Z",
      updated_at: "2024-10-03T10:15:00Z"
    },
    {
      id: 10,
      title: "Fix bugs in the search feature",
      description: "Resolve all known issues with the search function.",
      type: "project",
      project_id: 102,
      assignee_id: 17,
      status: "in progress",
      priority: "High",
      due_date: "2024-10-08T00:00:00Z",
      created_at: "2024-10-02T14:00:00Z",
      updated_at: "2024-10-02T16:00:00Z"
    }
  ];
  

export const TaskContext = createContext()

export const MyTaskContextProvider = ({children}) => {


  
  // Base URL for your Django API
  const API_URL = 'http://127.0.0.1:5000/api/';


  const [allTasks, setAllTasks] = useState([])
  const [isTaskUpdated, setIsTaskUpdated] = useState(false)








  // to send todo create req
  const createNewToDo = async (user_id, title, due_date, priority, is_type_project, assignee_id) => {


    console.log("inside the context", due_date);
    

    try {
      const res = await axios.post(`${API_URL}todo/create-todo`, {
        user_id, title, due_date, priority, is_type_project, assignee_id
      })

      if (res){
        return 1;
      }
    } catch (error) {
      
      return "error"
    }


  }


  const getAllToDos = async (user_id) => {

    try {

      const response = await axios.post(`${API_URL}todo/getAll`, {user_id})

      console.log("all task");

      const tasks = response.data

      console.log(tasks);
      

      setAllTasks(response.data)


    } catch (error) {
      console.log("not fetched all tasks", error);
      
    }

  }


    const updateToDo = async (taskId, status) => {

      try {
        const res = await axios.put(`${API_URL}todo/update`, {taskId, status})

        if (res){
          return 1
        }

      } catch (error) {
        return 0
      }


    }


    const deleteToDo = async (taskId) => {

      try {

        const res = axios.delete(`${API_URL}todo/delete/${taskId}`)


        if (res){
          return 1
        }

      } catch (error) {
        console.log("delete error ", error);
        return 0;
      }

    }



    const num = 0

    return (

        <TaskContext.Provider value={{
        num, 
        createNewToDo,
        getAllToDos,
        allTasks,
        isTaskUpdated,
        setIsTaskUpdated,
        updateToDo,
        deleteToDo,



        
        
        }}>

            {children}

        </TaskContext.Provider>
    );
}



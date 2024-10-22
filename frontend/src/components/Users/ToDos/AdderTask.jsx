"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState, useContext, useEffect } from "react";
import { TaskContext, AuthContext } from '../../../Conexts/Contexts';

const AdderTask = ({assignedId}) => {
  let [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState(0);
  const [date, setDate] = useState(new Date());
  const [isTypeProject, setIsTypeProject] = useState(false);

  const [assignee_id, setAssignee_id] = useState(null)

  const { createNewToDo, setIsTaskUpdated } = useContext(TaskContext);
  const { userId } = useContext(AuthContext);


  useEffect(() => {
    if (assignedId) {
      console.log(assignedId);
      
      setAssignee_id(assignedId)
      setIsTypeProject(true)
    }
  
  })

  const addTask = async () => {

    let isoDate;

    try {
      console.log("inininin", date);
      
      isoDate = date instanceof Date ? date.toLocaleString() : new Date(date).toLocaleString();

    } catch (error) {
      isoDate = new Date().toLocaleString()
    }

    if (taskText === "") {
      taskText = 'untitled';
    }


    try {
      const res = await createNewToDo(userId, taskText, isoDate, priority, isTypeProject, assignee_id);
      setIsTaskUpdated(prev => !prev);

      if (res) {
        console.log("done done done done");
      }
    } catch (error) {
      console.log("task creation req failed", error);
    }

    setTaskText("");
    // setPriority(0);
    setDate(new Date()); // Reset to current date
    setIsTypeProject(false);
  };

  const handlePriorityChange = (value) => {
    console.log("value", parseInt(value));
    
    console.log(priority);
    setPriority(parseInt(value)); // Convert string to number
    console.log(priority);
    console.log(typeof(priority));
  }


  // const handlePriorityChange = (value) => {
  //   const priorityValue = parseInt(value); // Convert string to number
  //   setPriority(priorityValue);
  //   console.log("Selected Priority:", priorityValue); // Log the selected priority
  // }


  const handleDateChange = (selectedDate) => {
    setDate(selectedDate)
  }


  return (
    <>
      <div className="flex items-center mb-4 gap-2">

        
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="+ Add task to 'Inbox'"
          className="border p-2 rounded-md flex-grow h-9"
        />

        <div >
        <Select onValueChange={handlePriorityChange} >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">High</SelectItem>
            <SelectItem value="2">Medium</SelectItem>
            <SelectItem value="3">Low</SelectItem>
          </SelectContent>
        </Select>
        </div>

        <div>
        <Popover className='my-4'>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        </div>


        <div>
        <button onClick={addTask} className="ml-2 w-20 bg-white rounded-md h-9 border text-black hover:bg-green-300 hover:border-black hover:font-semibold">
          Add
        </button>
        </div>
      </div>
    </>
  );
};

export default AdderTask;

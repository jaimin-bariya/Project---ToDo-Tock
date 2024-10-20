import { Button } from "@/components/ui/button";
import { FiChevronDown } from "react-icons/fi"; // Importing the dropdown icon from react-icons
import { useState } from "react";
import DialogCreateTeam from './DialogCreateTeam'; // Import the dialog component


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TopBarTeams = () => {


  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);


  const handleCreate = () => {
    console.log("creat");
    
  }


  

  return (
    <>
      <div className="border-b h-12 border w-full flex-col justify-between text-center items-center p-2 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Teams</h1>

          <Button onClick={openDialog} className='hover:bg-orange-400 border-black' variant="outline">Create Team</Button>



          {/* Pass the dialog open state and close function as props */}
          <DialogCreateTeam isOpen={isDialogOpen} onClose={closeDialog} />

 
        </div>

        <div></div>
      </div>
    </>
  );
};

export default TopBarTeams;

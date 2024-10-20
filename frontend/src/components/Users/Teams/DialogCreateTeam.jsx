// DialogComponent.jsx
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useContext } from 'react';
import ImageTeam from '../../../assets/icons/User/team.jpg'
import {TeamContext, AuthContext} from '../../../Conexts/Contexts'


const DialogCreateTeam = ({ isOpen, onClose }) => {
  const [newTeamName, setNewTeamName] = useState('untitled')
  const [newTeamSize, setNewTeamSize] = useState('2')
  const [newTeamDesc, setNewTeamDesc] = useState('')


  
  const {userId} = useContext(AuthContext)
  const {allTeams, isTeamUpdated, SetTeamUpdated, getAllTeams, createNewTeam} =  useContext(TeamContext)



  const handleCreate = () => {
    console.log("Team Name:", newTeamName);
    console.log("desc:", newTeamDesc);
    console.log("size:", newTeamSize);

    try {

      console.log("u id", userId);
      console.log("u id", userId);
      console.log("u id", userId);
      
      const res = createNewTeam(userId, newTeamName, newTeamDesc)

      SetTeamUpdated(prev => !prev)

    } catch (error) {
      onsole.log("error while creating new team");
    }



    onClose(); // Close the dialog after creation
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">

        <div className="w-full h-full flex justify-center  items-center">
            <img  width={300} height={300} src={ImageTeam} alt="" />
        </div>

        <DialogHeader>
          <DialogTitle>Create a new team</DialogTitle>
          <DialogDescription>Click create when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="teamname" className="text-right">
              Team Name
            </Label>
            <Input
              id="teamname"
              className="col-span-3"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Approx Team Size
            </Label>
            <Input
              id="username"
              className="col-span-3"
              value={newTeamSize}
              onChange={(e) => setNewTeamSize(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="description" className="text-right">
    Short Description
  </Label>
  <textarea
    id="description"
    className="col-span-3 p-2 border rounded-md"
    value={newTeamDesc}
    onChange={(e) => setNewTeamDesc(e.target.value)}
    rows={5} // Adjust the size
  />
</div>
        </div>
        <DialogFooter>
          <Button onClick={handleCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>

    </Dialog>
  );
};

export default DialogCreateTeam;

// DialogComponent.jsx
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useContext } from 'react';
import ImageTeam from '../../../assets/icons/User/team.jpg'
import {TeamContext, AuthContext} from '../../../Conexts/Contexts'

import { Link, Outlet, useLocation, useParams } from "react-router-dom";




const AddTeamMember = ({ isOpen, onClose }) => {
  const [userUserName, setUserUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')



  
  const {userId} = useContext(AuthContext)
  const {allTeams, isTeamUpdated, SetTeamUpdated, getAllTeams, createNewTeam, addMember, isTeamChanged, setTeamChanged} =  useContext(TeamContext)

  const {teamId, teamTitle} = useParams()


  



  const handleCreate = () => {


    try {

      const res = addMember(teamId, userUserName, userEmail)

      SetTeamUpdated(prev => !prev)
      setTeamChanged(prev => !prev)

    } catch (error) {
      console.log("error while creating new team");
    }



    onClose(); // Close the dialog after creation
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">

        {/* <div className="w-full h-full flex justify-center  items-center">
            <img  width={300} height={300} src={ImageTeam} alt="" />
        </div> */}

        <DialogHeader>
          <DialogTitle>Add new Member to this team</DialogTitle>
          <DialogDescription>Enter correct username and email of memebr to add in your team.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="teamname" className="text-right">
              Username
            </Label>
            <Input
              id="teamname"
              type='username'
              className="col-span-3"
              value={userUserName}
              onChange={(e) => setUserUserName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="username"
              className="col-span-3"
              type='email'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>


        </div>
        <DialogFooter>
          <Button onClick={handleCreate}>Add</Button>
        </DialogFooter>
      </DialogContent>

    </Dialog>
  );
};

export default AddTeamMember;

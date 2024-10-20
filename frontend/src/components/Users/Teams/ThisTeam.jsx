import { useLocation, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { TeamContext, AuthContext } from "../../../Conexts/Contexts";

import { AllTeamMember, AddTeamMember } from "../../index";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

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

const ThisTeam = () => {
  const { teamId } = useParams();

  const location = useLocation();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const { userId } = useContext(AuthContext);
  const { allTeams, isTeamChanged, setTeamChanged, currentTeam } = useContext(TeamContext);

  // useEffect(() => {
  //   // Check if allTeams is available before trying to find the team
  //   if (allTeams.length > 0) {
  //     console.log(teamId);
      
  //     const wantedTeam = allTeams.find((t) => t.id === parseInt(teamId)); // Make sure to parse the ID
  //     console.log("Wanted team:", wantedTeam);
  //     setCurrentTeam(wantedTeam);
  //     console.log("CT", currentTeam);
      
      
  //   } else {
  //     console.log("allTeams is empty or not yet fetched.");
  //   }
  // }, [allTeams, teamId, isTeamChanged]); // Depend on both allTeams and teamId


  // useEffect(() => {
  //   if (currentTeam) {
  //     // Fetch or update team members based on currentTeam
  //     console.log("Updating team members for:", currentTeam.name);
      
  //   }
  // }, [currentTeam]);
  


  return (
    <>
      {currentTeam ? ( // Check if currentTeam is defined
        <div className="w-full grid grid-cols-2 p-4 bg-white border ">
          <div className="col-span-2 w-full">
            <h2 className="text-xl font-semibold text-gray-800">
              Team Name: {currentTeam.name}
            </h2>
            <h3 className="text-lg text-gray-600"></h3>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Team Description</AccordionTrigger>
                <AccordionContent>{currentTeam.desc}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Team's Documentation</AccordionTrigger>
                <AccordionContent>None</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="col-span-2">

            <div className="flex  justify-between ">
              <h1 className="font-semibold text-xl">Team Members</h1>

              <Button
                onClick={openDialog}
                className="hover:bg-orange-400 border-black mr-4"
                variant="outline"
              >
                Add Team Member
              </Button>

              {/* Pass the dialog open state and close function as props */}
              <AddTeamMember isOpen={isDialogOpen} onClose={closeDialog} />

            </div>

            <AllTeamMember />
          </div>
        </div>
      ) : (
        <h1>
          
        </h1> // Display loading message
      )}
    </>
  );
};

export default ThisTeam;

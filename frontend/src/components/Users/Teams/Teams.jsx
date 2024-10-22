import { useEffect, useContext } from "react";
import { TopBarTeams, ThisTeam } from "../../index";
import { FiStar, FiTag, FiTrash, FiInbox } from "react-icons/fi";

import { TeamContext, AuthContext } from "../../../Conexts/Contexts";

import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { all } from "axios";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// components/Inbox.jsx
const Teams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { userId } = useContext(AuthContext);
  const {
    allTeams,
    isTeamUpdated,
    SetTeamUpdated,
    getAllTeams,
    isTeamChanged,
    setTeamChanged,
    currentTeam,
    setCurrentTeam,
    giveMeTeamMembers,
  } = useContext(TeamContext);

  const { teamId, teamTitle } = useParams();

  console.log("current id", teamId);
  console.log("current id", teamTitle);

  useEffect(() => {
    try {
      console.log("useid", userId);
      console.log("useid", userId);
      console.log("useid", userId);
      console.log("useid", userId);

      const res = getAllTeams(userId);
    } catch (error) {
      console.log("not effect getallteams");
    }
  }, [isTeamUpdated]);

  const handleSelecteTeam = async (team) => {
    navigate(`/${userId}/teams/${team.id}/${team.name}`);
    // alert(`team is ${team.id}`);
    console.log("mmmm", team.id);

    await giveMeTeamMembers(team.id);

    setTeamChanged((prev) => !prev);

    // alert("hi")
  };



  const handleRemoveTeam = (team) => {

    alert(`delete team id ${team.id}`)

  }


  return (
    <>
      <div className=" flex flex-col p-0">
        <TopBarTeams />

        <div className="flex h-screen bg-gray-200">
          {/* Sidebar */}
          <div className="w-1/4 bg-white text-gray-800 p-4 shadow-md ">
            <h2 className="text-xl font-bold mb-6">All Teams</h2>

            {/* I Team Leader  */}

            <div className="border w-full  overflow-auto h-64 p-6 mb-6">
              <h3 className="text-xl font-bold mb-2 "> In which I'm TL </h3>
              <hr />

              <ul>
                {allTeams.map((team) => (
                  // <li className="`flex items-center p-2 mb-1 rounded transition-colors duration-300 w-full">
                  //   <FiInbox className="mr-2 " /> <span className="whitespace-nowrap">{team.name}</span>
                  // </li>

                  <ContextMenu key={team.id}>
                    <ContextMenuTrigger>
                      {" "}
                      <li
                        key={team.id}
                        onClick={() => handleSelecteTeam(team)}
                        className={`flex items-center p-2 mb-1 rounded transition-colors duration-300 hover:cursor-pointer ${
                          location.pathname === `/${userId}/inbox`
                            ? "bg-blue-100 text-blue-600"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        <FiInbox className="mr-2" /> <span>{team.name}</span>
                      </li>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem onClick={() => navigator.clipboard.writeText(team.name)}>Copy team name</ContextMenuItem>
                      <ContextMenuItem>Status</ContextMenuItem>

                      
                      
                        <AlertDialog>
                          <AlertDialogTrigger className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100 w-full">Remove</AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your team and remove your
                                data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleRemoveTeam(team)}>Remove</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      
                      {/* <ContextMenuItem></ContextMenuItem> */}
                    </ContextMenuContent>
                  </ContextMenu>
                ))}
              </ul>
            </div>

            <hr />
            <div className="border w-full  overflow-auto h-64 p-6 mb-6 rounded-md">
              <h3 className="text-xl font-bold mb-2 "> In which I'm TM </h3>
              <hr />

              <ul></ul>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="border p-2 justify-center items-center  rounded-lg">
                TL - {allTeams.length}
              </div>

              <div className="border p-2 justify-center items-center  rounded-lg ">
                TM - {0}
              </div>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Teams;

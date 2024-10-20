import { columns } from "./columns"
import { DataTable } from "./data-table"
import React from "react";
import { TeamContext, AuthContext } from '../../../../Conexts/Contexts';
import { useEffect, useContext } from "react";

async function getData() {
  



  return [
    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },

    {
      id: "728ed52f",
      name: 100,
      username: "pending",
      email: "m@example.com",
    },
    // Add more data here as needed...
  ]
}

const DemoPage = () => {
  const [data, setData] = React.useState([]);

  
  const { userId } = useContext(AuthContext);
  const { allTeams, isTeamUpdated, SetTeamUpdated, getAllTeams, isTeamChanged, setTeamChanged, currentTeam, setCurrentTeam} = useContext(TeamContext);



  console.log("lo", currentTeam);
  


  React.useEffect(() => {
    async function fetchData() {
      const fetchedMembersData = currentTeam.members
      console.log("fetchied data", fetchedMembersData);
      
      setData(fetchedMembersData);
    }
    fetchData();
  }, [currentTeam, SetTeamUpdated]);

  return (
    <div className="container mx-auto ">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default DemoPage

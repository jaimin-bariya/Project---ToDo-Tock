import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';
import { AlarmSmoke } from 'lucide-react';



export const TeamContext = createContext()


export const TeamContextProvider = ({children}) => {


    // const [newTeamName, setNewTeamName] = useState('untitled')
    // const [newTeamSize, setNewTeamSize] = useState('2')
    const [isTeamUpdated, SetTeamUpdated] = useState(false)
    const [isTeamChanged, setTeamChanged] = useState(false)



    const [allTeams, setAllTeams] = useState([])

    const [currentTeam, setCurrentTeam] = useState(null); // Initialize as null



    // Base URL for your Django API
    const API_URL = 'http://127.0.0.1:5000/api/';



    const getAllTeams = async (userId) => {

        
        try {
            
            const res = await axios.post(`${API_URL}teams/getallteams`, {userId})

            console.log(res.data);

            setAllTeams(res.data)
            console.log("all team");
            
            console.log(allTeams);
            
            
        } catch (error) {
            console.log("error while fetching all teams");
            
        }

    }

    // useEffect(() => {

    //     console.log("inside effect", allTeams);
        

    // }, [allTeams])


    const createNewTeam = async (userId, newTeamName, newTeamDesc) => {

        try {
            
            const res = await axios.post(`${API_URL}teams/create-team`, {userId, newTeamName, newTeamDesc})

            console.log(res);
            

        } catch (error) {
            console.log("error while fetching all teams");
        }

    }

    const giveMeThisTeam = (teamId) => {

        console.log("all", allTeams);
        
        console.log("team ka id", teamId);
        
        

        const wantedTeam = allTeams.find(t => t.id === parseInt(teamId))
        
        

        console.log("i am here to give team details");
        
        return wantedTeam

    }


    


    const addMember = async (teamId, userUserName, userEmail) => {

        try {

            
            const res = await axios.post(`${API_URL}teams/team/addmember`, {teamId, userUserName, userEmail })




        } catch (error) {


            
        }

        

    }


    const giveMeTeamMembers = (teamId) => {

        if (allTeams.length > 0) {
            console.log("this is taht team id", teamId);
            
            
            const wantedTeam = allTeams.find((t) => t.id === parseInt(teamId)); // Make sure to parse the ID
            // console.log("Wanted team:", wantedTeam);
            setCurrentTeam(wantedTeam);
            console.log("dekh le bhai team ", currentTeam);
            
            // console.log("CT", currentTeam);

            
            
            
          } else {
            console.log("allTeams is empty or not yet fetched.");
          }

    }




    return(
        <TeamContext.Provider value={ {isTeamUpdated, allTeams, SetTeamUpdated, getAllTeams, createNewTeam, giveMeThisTeam, addMember, isTeamChanged, setTeamChanged, giveMeTeamMembers, currentTeam, setCurrentTeam}} >

            {children}


        </TeamContext.Provider>
        
    )


}

import { useContext, useEffect } from 'react';
import {FavoritesDocs, PerosnalDocs, ProjectDocs, TopBarDocs, AllDocs} from '../../index'
import {RecentDocs} from '../../index'
import {DocsContext, AuthContext} from '../../../Conexts/Contexts'
import { Outlet } from 'react-router-dom';


const Docs = () => {
  

  

  const {docs, openDoc, closeDoc, handleContentChange, selectedDoc, editableContent, saveDoc, openDocFully, getAllDocs, docsUpdated, setDocsUpdated} = useContext(DocsContext)
  const {userId} = useContext(AuthContext)


  useEffect( () => {

    const res = getAllDocs(userId)
    
    console.log(", use id ", userId);
    

    // console.log(res);
    
    

  }, [docsUpdated])



    return (

      <>

        

        <TopBarDocs />


        <div className="overflow-y-auto mt-0 h-[calc(100vh-150px)] p-4">

        <Outlet />

        </div>


                        {/* Scrollable Content */}
                        <div className="overflow-y-auto mt-0 h-[calc(100vh-150px)] p-4">
          


          
          
          
          {/* Recents Section */}
          {/* <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Recents</h3>
            <ul className="list-none">
              <li>Task 1 in Project 1</li>
              <li>Task 2 in Project 1</li>
              <li>Task 3</li>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
          </div> */}

          {/* Agenda Section */}
          {/* <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Agenda</h3>
            
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              + Add calendar integrations
            </button>
          </div> */}

          {/* My Work Section */}
          {/* <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">My Work</h3>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              + Add task or reminder
            </button>
          </div> */}

          {/* Assigned to me Section */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Assigned to me</h3>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              + Add task
            </button>
          </div> */}
        </div>


      </>

    )
    
  };
  
  export default Docs;
  
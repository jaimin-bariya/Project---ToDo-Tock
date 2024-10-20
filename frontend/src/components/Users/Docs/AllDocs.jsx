
import { useLocation } from 'react-router-dom';
import {FavoritesDocs, PerosnalDocs, ProjectDocs, TopBarDocs} from '../../index'
import {RecentDocs} from '../../index'
import { useEffect } from 'react';


const AllDocs = () => {


  const location = useLocation() 

  useEffect(() => {

    const t = localStorage.getItem('token')
    console.log(t);
    
  }, [location])
  

  return (
    <>
            <div className="grid grid-cols-2 gap-4 overflow-y-auto ">

          
            <div className="bg-white p-4 border  rounded-lg">
              <RecentDocs />
            </div>
  
            <div className="bg-white p-4 border rounded-lg">
              <FavoritesDocs />
            </div>
  
            <div className="bg-white p-4 border col-span-2 rounded-lg">
              <ProjectDocs />
            </div>
  
            <div className="bg-white p-4 border  col-span-2 rounded-lg">
              <PerosnalDocs />
            </div>


  
          </div>
  
    </>
  );
};

export default AllDocs;
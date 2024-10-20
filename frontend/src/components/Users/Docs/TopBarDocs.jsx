import { FiChevronDown } from 'react-icons/fi'; // Importing the dropdown icon from react-icons
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Conexts/AuthContext';
import { useContext } from 'react';

const TopBarDocs = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const {userId} = useContext(AuthContext)


  const handleCreateDoc = () => {
    navigate(`/${userId}/docs/create-doc`)
  }

  

  return (
    <>
      <div className="border-b h-12 border w-full flex-col justify-between text-center items-center p-2 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Docs</h1>

          <div className='flex gap-4'>


            {location.pathname !== `/${userId}/docs/create-doc` && (
            <button onClick={handleCreateDoc} className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-1 px-4 rounded-full inline-flex items-center shadow-md">
              <span>Create Doc</span>
              
            </button>
            )}



            {location.pathname === `/${userId}/docs/create-doc` && (
            <button onClick={() => navigate(`/${userId}/docs`)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded-full inline-flex items-center shadow-md">
              <span>Cancel</span>
              
            </button>
            )}

          </div>

          
        </div>
      </div>  
    </>


  );
};

export default TopBarDocs;

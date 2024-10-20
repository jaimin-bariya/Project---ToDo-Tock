import { FiChevronDown } from 'react-icons/fi'; // Importing the dropdown icon from react-icons


const TopBarDashboards = () => {
  return (
    <>
      <div className="border-b h-12 border w-full flex-col justify-between text-center items-center p-2 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">My Dashboard</h1>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-1 px-2 rounded-full inline-flex items-center shadow-md">
            <span>Create Doc</span>
            <FiChevronDown className="ml-2" /> {/* Dropdown icon */}
          </button>
        </div>
      </div>  
    </>


  );
};

export default TopBarDashboards;

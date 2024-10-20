const TopBarHome = () => {
  return (
    <>
      {/* <div className="flex-1 ml-[250px] bg-white shadow-md p-4 z-10 fixed top-0 right-0 left-[250px]">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Home</h1>
            <button className="text-blue-500 hover:underline">Manage cards</button>
          </div>
        </div> */}

      <div className="border-b h-12 border w-full flex-col justify-between text-center items-center p-2 px-6">

          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Home</h1>
            <button className="text-blue-500 hover:underline">Manage cards</button>
          </div>
        
      </div>
    </> 
  );
};

export default TopBarHome;

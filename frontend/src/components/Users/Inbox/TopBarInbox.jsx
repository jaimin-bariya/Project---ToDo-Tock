const TopBarInbox = () => {
  return (
    <>
      <div className="border-b h-12 border w-full flex-col justify-between text-center items-center p-2 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Inbox</h1>
          <button className="text-blue-500 hover:underline">
            Manage cards
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBarInbox;

import {
  FavoritesDocs,
  ProjectDocs,
  TopBarDashboards,
  TopBarDocs,
  TotalNumberDashboard,
} from "../../index";
import { useContext } from "react";
import { DocsContext, InboxContext } from "../../../Conexts/Contexts";


const Dashboards = () => {

  const {totalDocs, totalPersonalDocs, totalProjectDocs} = useContext(DocsContext)
  const {totalNumberofEmails, totalFavoritesEmails, totalImportantEmails} = useContext(InboxContext)

  return (
    <>
      <TopBarDashboards />

      {/* Scrollable Content */}
      <div className="overflow-y-auto mt-0 h-[calc(100vh-150px)] p-4">
        <div className="grid grid-cols-4 gap-4 ">



          <div className="bg-white p-4 border   rounded-lg">
            <TotalNumberDashboard title={'Total Docs'} totalNumber={totalDocs} />
          </div>

          <div className="bg-white p-4 border  rounded-lg">
            <TotalNumberDashboard title={'Total Personal Docs'} totalNumber={totalPersonalDocs} />
          </div>
  
          <div className="bg-white p-4 border rounded-lg">
            <TotalNumberDashboard title={'Total Project Docs'} totalNumber={totalProjectDocs} />
          </div>

          <div className="bg-white p-4 border   rounded-lg">
            <TotalNumberDashboard title={'Total Shared Docs'} totalNumber={0} />
          </div>

          <div className="bg-white p-4 border  rounded-lg">
            <TotalNumberDashboard title={'Total Inbox Alert'} totalNumber={totalNumberofEmails} />
          </div>
  
          <div className="bg-white p-4 border rounded-lg">
            <TotalNumberDashboard title={'Total Important Email'} totalNumber={totalImportantEmails} />
          </div>

          <div className="bg-white p-4 border rounded-lg">
            <TotalNumberDashboard title={'Total Favorites Email'} totalNumber={totalFavoritesEmails} />
          </div>

          <div className="bg-white p-4 border rounded-lg">
            <TotalNumberDashboard title={'Total Comments on your Project'} totalNumber={0} />
          </div>
  


        </div>
      </div>
    </>
  );
};

export default Dashboards;

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { InboxContext } from "../../../Conexts/InboxContext";



const RecentMsg = () => {

  // get emails from InboxContext using useContext
  const {Emails} = useContext(InboxContext)



  return (
    <>
      <div >
        <p className="mb-2">Recent Message - <Link className=" font-sans hover:text-orange-600 hover:font-semibold" to='/123/inbox' >Inbox</Link> </p>
        <hr />

        <div className=" max-h-80 min-h-64 overflow-y-auto  ">

          <ul>
        {
        Emails.slice(-4)
          // .filter(email => email.)
          .map(email => (
            <li
                key={email.id}
                className="bg-white shadow-md rounded p-4 mb-4 flex items-center border-b border-gray-300 hover:bg-blue-100 hover:cursor-pointer"
              >
                <div className="flex flex-col justify-center items-center mr-4">


                </div>
                <div className="flex-1">
                  <div className="font-bold">{email.sender}</div>
                  <div className="text-gray-600">{email.content}</div>
                </div>
              </li>
          ))        
        }
        </ul>
        </div>

      </div>
    </>
  );
};

export default RecentMsg;
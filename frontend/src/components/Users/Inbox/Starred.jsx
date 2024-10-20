import { Link } from "react-router-dom";
import { useContext } from "react";
import { InboxContext } from "../../../Conexts/InboxContext";


const Starred = ({emails}) => {

    // get emails from InboxContext using useContext
    const {Emails} = useContext(InboxContext)


  return (
    <>
            {
        Emails
          .filter(email => email.isStarred)
          .map(email => (
            <div
                key={email.id}
                className="bg-white shadow-md rounded p-4 mb-4 flex items-start border-b border-gray-300"
              >
                <div className="flex flex-col justify-center items-center mr-4">
                  <button
                    className="text-gray-600 hover:text-yellow-500"
                    title="Star"
                  >
                    {email.isStarred ? "⭐" : "☆"}
                  </button>
                  <button
                    className="text-gray-600 hover:text-red-500 mt-2"
                    title="Delete"
                  >
                    🗑️
                  </button>
                  <button
                    className="text-gray-600 hover:text-blue-500 mt-2"
                    title="Mark as Important"
                  >
                    {email.isImportant ? "★" : "☆"}
                  </button>
                </div>
                <div className="flex-1">
                  <div className="font-bold">{email.sender}</div>
                  <div className="text-gray-600">{email.content}</div>
                </div>
              </div>
          ))
      }
    
    </>
  );
};

export default Starred;
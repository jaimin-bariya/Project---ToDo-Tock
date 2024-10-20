

import { FiStar, FiChevronRight } from "react-icons/fi";
import { useContext } from "react";

import { DocsContext, AuthContext } from "../../../Conexts/Contexts";


// Sample Docs Data



const RecentDocs = () => {

  let {docs, openDoc, closeDoc, handleContentChange, selectedDoc, editableContent, saveDoc, openDocFully} = useContext(DocsContext)
  const {userId} = useContext(AuthContext)


  docs = docs.slice(-8)

  
  





  return (
    <>
      <div className="  ">
      <p className="mb-2">Recent Docs</p>
      <hr />

      <div className="p-6 max-h-96 min-h-64 overflow-y-auto">
        {/* Docs List */}
        <ul className="space-y-2">
          {docs.map((doc) => (
            <li
              key={doc.id}
              className="bg-white p-4 rounded-lg shadow-md hover:bg-indigo-100 hover:cursor-pointer flex items-center justify-between transition duration-200 ease-in-out"
              onClick={() => openDocFully(doc, userId)}
            >
              <div className="flex items-center">
                {doc.isFavorite && <FiStar className="text-yellow-500 mr-3" />}
                <span className="font-bold text-lg mr-4">{doc.title}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-4">
                  {doc.createdAt}
                </span>
                <FiChevronRight />
              </div>
            </li>
          ))}
        </ul>

        {/* Modal */}
        {selectedDoc && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
              <h2 className="text-2xl font-bold mb-4">{selectedDoc.title}</h2>
              <textarea
                className="w-full h-96 p-2 border rounded-md mb-4"
                value={editableContent}
                onChange={handleContentChange}
              ></textarea>
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-full mr-4"
                  onClick={closeDoc}
                >
                  Cancel
                </button>
                <button
                  className="bg-indigo-500 text-white px-4 py-2 rounded-full"
                  onClick={saveDoc}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      </div>
    </>
  );
};

export default RecentDocs;

import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const DocsContext = createContext();

export const MyDocsContextProvider = ({ children }) => {


  // Base URL for your Django API
  const API_URL = 'http://127.0.0.1:5000/api/';


  const navigate = useNavigate()


  const [docs, setDocs] = useState([])
  const [docsUpdated, setDocsUpdated] = useState(false)

  const [selectedDoc, setSelectedDoc] = useState(null); 
  const [editableContent, setEditableContent] = useState("");

  const totalDocs = docs.length;
  const totalPersonalDocs = docs.filter((doc) => doc.is_type_project === false).length;
  const totalProjectDocs = docs.filter((doc) => doc.is_type_project === true).length;

  const openDoc = (doc) => {

    
    setSelectedDoc(doc);
    setEditableContent(doc.content); // Set the content for editing
  };

  const closeDoc = () => {
    setSelectedDoc(null);
  };

  // Function to handle content change
  const handleContentChange = (e) => {
    setEditableContent(e.target.value);
  };





  const getAllDocs = async (userId) => {
    try {
      const response = await axios.post(`${API_URL}docs`, {userId})

      setDocs(response.data)

      console.log(docs);

    } catch (error) {
      console.error(error, "while getting docs");
      
    }

  }


  const addNewDocToDB = async (title, content, userId) => {

    try {
      const response = await axios.post(`${API_URL}doc/create-doc`, {
        title, content, userId
      })

     


      return 1

    } catch (error) {
      console.error("Add doc", error);
      
    }
    
    

    
    
  }

    // Function to save the changes
    const saveDoc = async (oldId, newTitle, newContent, isFavorite) => {
    
      try {


        console.log("mama -> ", oldId, newTitle, newContent, isFavorite);
        


        const response = await axios.put(`${API_URL}doc/update`, {
          oldId, newTitle, newContent, isFavorite
        })

        return 1

      } catch (error) {
        // console.error("Error saving the document:", error);
      }
    };


    const giveMeThisDoc = (docId) => {

      try {
        console.log(docId);

        const thisDocId = docId

        
        
        
        const wantedDoc = docs.filter(d => d['id'] === docId)
        console.log('my wanted dof', wantedDoc);
        

        
        

        return wantedDoc[0]
        
        
      } catch {
        console.log("Someproblem");
        
      }

    }



    const openDocFully = (doc, userId) => {

      
      
      navigate(`/${userId}/docs/${doc.id}/${doc.title}`, {state: {docContent: doc.content}})
      
    }

    const DeleteDoc = async (docId) => {
      try {

        
        

        const req = await axios.delete(`${API_URL}doc/delete/${docId}`)

        return 1

      } catch (error) {
        
      }
    } 
    
    
    const makeDocFavorites = async (docId, isFavorite) => {


      try {
        const res = await axios.put(`${API_URL}doc/update/star`, {docId, isFavorite})

        return res

      } catch (error) {
        
      }

    }



  return (
    <DocsContext.Provider
      value={{
        docs,
        openDoc,
        closeDoc,
        selectedDoc,
        editableContent,
        handleContentChange,
        saveDoc,
        totalDocs,
        totalPersonalDocs,
        totalProjectDocs,
        getAllDocs,
        addNewDocToDB,
        giveMeThisDoc,
        openDocFully,
        docsUpdated, 
        setDocsUpdated,
        DeleteDoc,
        makeDocFavorites
      }}
    >
      {children}
    </DocsContext.Provider>
  );
};

// Function to open the modal

// Function to close the modal

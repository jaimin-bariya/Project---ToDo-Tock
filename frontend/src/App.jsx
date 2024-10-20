import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './components/Home/HomePage';
import UserHome from './components/Users/UserHome';
import { HomeContent, Docs, Dashboards, Sidebar, Inbox, All, Important, Starred, Teams, Todos, FavoritesDocs, AllDocs, CreateNewDoc, ThisTeam, AllTeamMember } from './components';
import { MyDocsContextProvider, MyInboxContentProvider, AuthContext, AuthProvider, TeamContext, TeamContextProvider } from './Conexts/Contexts';
import { MyTaskContextProvider } from './Conexts/ToDosContext';
import ProtectedRoute from './components/Home/ProtectedRoute';
import ToDos from './components/Users/ToDos/ToDos';



function App() {


  


  return (

    <>
      <Router>
      <AuthProvider >
      <MyInboxContentProvider>
        <MyDocsContextProvider>
          <MyTaskContextProvider>
            <TeamContextProvider>



        <div className='App'>

          <Routes>
            
            {/* Default Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Dynamic Route for user-specific Home Page */}
            <Route path="/:userId/*" element={ <ProtectedRoute>  <UserHome /> </ProtectedRoute>} >

              {/* Nested Routes for User Home */}

              <Route path="home" element={<HomeContent />} />
              <Route path="docs/*" element={<Docs />} > 

                <Route path='' element={<AllDocs />} />
                <Route path='create-doc' element={<CreateNewDoc />} />
                <Route path=':docId/:docTitle?' element={<CreateNewDoc />} />


              </Route>
              <Route path="dashboards" element={<Dashboards />} />
              <Route path="inbox/*" element={<Inbox />} > 
              
                {/* Nested Routes for Inbox  */}
                <Route path='' element={<All /> } />
                <Route path='important' element={<Important /> } />
                <Route path='starred' element={<Starred /> } />

              </Route>

              <Route path='teams/' element={<Teams />} >


                  <Route path=':teamId/:teamName' element={<ThisTeam />} />

              </Route>

              <Route path='my-todos' element={<Todos/>} />
              <Route path='time-tracking' element={<AllTeamMember/>} />

            </Route>

            {/* Add more routes here for other components */}
          </Routes>

        </div>

      
        </TeamContextProvider>
        </MyTaskContextProvider>
      </MyDocsContextProvider>
      </MyInboxContentProvider>
      </AuthProvider>

      </Router>
    </>

  );


  // return (

  //   <>


  //     <div className='App'>

  //       <HomePage />
        
  //     </div>


  //   </>
  // )
}

export default App

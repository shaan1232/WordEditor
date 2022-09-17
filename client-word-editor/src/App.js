import WordEditor from "./WordEditor";
import JoinRoomVerification from "./JoinRoomVerification";
import React from "react";
import { v4 as uuidV4 } from "uuid";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// Switch > Routes
//Redirect > Navigate

function App() {

  return (
    <Router>
      <div class = 'buttoncontainer'>
      <Routes>
        <Route
          path="/"
          //element={<a href={`/documents/${uuidV4()}`}>create document</a>}
          element={<a href={`/documents/${uuidV4()}`}><button class="button green">Create Document</button></a>}/>
        <Route path="/documents/:id" element={<WordEditor />} />
      </Routes>
      </div>
  
      <div class = 'buttoncontainer'>   
      <button id = "joinRoomButton" class="button red">Join Room By ID</button>
          
      </div> 
    </Router>
    
  );
}

export default App;

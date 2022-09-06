import WordEditor from "./WordEditor";
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
      <Routes>
        <Route
          path="/"
          element={<a href={`/documents/${uuidV4()}`}>create document</a>}
        />
        <Route path="/documents/:id" element={<WordEditor />} />
      </Routes>
    </Router>
  );
}

export default App;

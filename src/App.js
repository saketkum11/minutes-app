import "./App.css";
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import {
  Trash,
  Profile,
  Archieve,
  Label,
  Home,
  Signup,
  Login,
  Notes,
} from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/label" element={<Label />}>
          Labels
        </Route>
        <Route path="/archieve" element={<Archieve />}>
          Archieve
        </Route>
        <Route path="/trash" element={<Trash />}>
          Trash
        </Route>
        <Route path="/profile" element={<Profile />}>
          Profile
        </Route>
        <Route path="/signup" element={<Signup />}>
          Profile
        </Route>
        <Route path="/login" element={<Login />}>
          Profile
        </Route>
        <Route path="/notes" element={<Notes />}>
          Notes
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import Trash from "./Pages/Trash/Trash";
import Profile from "./Pages/Profile/Profile";
import Archieve from "./Pages/Archieve/Archieve";
import Label from "./Pages/Labels/Labels";
import Home from "./Pages/Home/Home";

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
      </Routes>
    </div>
  );
}

export default App;

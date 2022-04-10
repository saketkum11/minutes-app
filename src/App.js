import "./App.css";
import logo from "./logo.png";
import { Routes, Route, NavLink } from "react-router-dom";
import Trash from "./Pages/Trash/Trash";
import Profile from "./Pages/Profile/Profile";
import Archieve from "./Pages/Archieve/Archieve";
import Label from "./Pages/Labels/Labels";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import Notes from "./Pages/Notes/Notes";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      ||
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/label"
      >
        Label
      </NavLink>
      ||
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/archieve"
      >
        Archieve
      </NavLink>
      ||
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/trash"
      >
        Trash
      </NavLink>
      ||
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/profile"
      >
        Profile
      </NavLink>
      ||
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/signup"
      >
        Signup
      </NavLink>
      ||
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/login"
      >
        Login
      </NavLink>
      ||
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/notes"
      >
        Create Notes
      </NavLink>
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
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;

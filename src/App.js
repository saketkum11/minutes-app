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
import RequierAuth from "./Context/RequireAuth/RequireAuth";
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
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/label"
          element={
            <RequierAuth>
              {" "}
              <Label />
            </RequierAuth>
          }
        />
        <Route
          path="/archieve"
          element={
            <RequierAuth>
              {" "}
              <Archieve />
            </RequierAuth>
          }
        ></Route>
        <Route
          path="/trash"
          element={
            <RequierAuth>
              {" "}
              <Trash />
            </RequierAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequierAuth>
              {" "}
              <Profile />
            </RequierAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <RequierAuth>
              {" "}
              <Signup />
            </RequierAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RequierAuth>
              {" "}
              <Login />
            </RequierAuth>
          }
        />
        <Route
          path="/notes"
          element={
            <RequierAuth>
              {" "}
              <Notes />
            </RequierAuth>
          }
        ></Route>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;

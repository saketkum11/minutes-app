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
import RequireAuth from "./Context/RequireAuth/RequireAuth";
import { useAuth } from "./Context/Auth/Auth-Context";
import Landing from "./Pages/Landing/Landing";
function App() {
  const { isLoggedIn, loginTextHandler } = useAuth();
  return (
    <div className="App">
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/home"
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
      ||
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/"
      >
        {" "}
        Landing
      </NavLink>
      <button onClick={loginTextHandler}>
        {isLoggedIn ? "logout" : "login"}
      </button>
      <Routes>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/label"
          element={
            <RequireAuth>
              {" "}
              <Label />
            </RequireAuth>
          }
        />

        <Route
          path="archieve"
          element={
            <RequireAuth>
              <Archieve />
            </RequireAuth>
          }
        />
        <Route
          path="notes"
          element={
            <RequireAuth>
              <Notes />
            </RequireAuth>
          }
        />
        <Route
          path="trash"
          element={
            <RequireAuth>
              <Trash />
            </RequireAuth>
          }
        />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />

        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;

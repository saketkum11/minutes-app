import { NavLink } from "react-router-dom";
import React from "react";
import { useAuth } from "../../Context/Auth-Context/Auth-Context";

function Navbar() {
  const { isLoggedIn, loginTextHandler } = useAuth();
  return (
    <div className=" bg-black-0 ">
      <div className=" flex flex-column wt-100 pd-x-11 pd-y-5">
        <section className="flex flex-column items-start text-color-9  pd-y-5">
          <img src="./assests/Minutes.jpg" alt="" />
          <span className="text-m">Minutes-App</span>
        </section>

        <section className="flex flex-column wt-100 ">
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "purple" : "",
              };
            }}
            to="/home"
            className="text-color-5 pd-y-5 bg-purple-6  rounded-L text-dec text-s"
          >
            {" "}
            <i class="fa-solid fa-house-user"></i>
            <span className="pd-x-5">Home</span>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "purple" : "",
              };
            }}
            to="/label"
            className="text-color-5 pd-y-5 text-dec text-s"
          >
            {" "}
            <i class="fa-solid fa-tag"></i>
            <span className="pd-x-5">Label</span>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "purple" : "",
              };
            }}
            to="/archieve"
            className="text-color-5 pd-y-5 text-dec text-s"
          >
            {" "}
            <i class="fa-solid fa-box-archive"></i>
            <span className="pd-x-5">Archieve</span>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "purple" : "",
              };
            }}
            to="/trash"
            className="text-color-5  pd-y-5 text-dec text-s "
          >
            {" "}
            <i class="fas fa-envelope "></i>
            <span className="pd-x-5">Trash</span>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "purple" : "",
              };
            }}
            to="/notes"
            className="text-color-5  pd-y-5 text-dec text-s  "
          >
            {" "}
            <i class="fa-solid fa-note-sticky"></i>
            <span className="pd-x-5">Notes</span>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "purple" : "",
              };
            }}
            to="/profile"
            className="text-color-5  pd-y-5 text-dec text-s  "
          >
            {" "}
            <i class="fa-solid fa-user"></i>
            <span className="pd-x-5">Profile</span>
          </NavLink>
        </section>
        <footer>
          <button className="pd-2 outline-none" onClick={loginTextHandler}>
            {isLoggedIn ? "logout" : "login"}
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Navbar;

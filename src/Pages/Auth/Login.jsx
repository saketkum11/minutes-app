import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/Auth-Context/Auth-Context";

function Login() {
  const { auth, loginTextHandler, loginHandler } = useAuth();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <div className=" m-auto wt-30 flex flex-column justify-even">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler(userCredentials);
          }}
          action=""
          className="bg-black-1 text-color-9 justify-even flex flex-column  m-t-9 pd-11"
        >
          <label
            htmlFor="email"
            className="flex items-start pd-y-5 pd-x-3 text-xm text-sm text-light"
          >
            Email
          </label>
          <input
            onChange={(e) => {
              setUserCredentials({ ...userCredentials, email: e.target.value });
            }}
            id="email"
            type="email"
            className=" pd-4   text-s rounded-xs "
            placeholder="Email Id"
          />

          <label
            htmlFor="password"
            className="flex items-start text-xm pd-y-5 pd-x-3 text-sm text-light"
          >
            Password{" "}
          </label>

          <input
            onChange={(e) => {
              setUserCredentials({
                ...userCredentials,
                password: e.target.value,
              });
            }}
            type="password"
            id="password"
            className="pd-4 text-s rounded-xs outline-none "
            placeholder="Password"
          />
          <button
            type="submit"
            onClick={loginTextHandler}
            className="bg-purple-7 m-y-8 rounded-xs border-none outline-none text-s cursor text-color-0 pd-3 text-light"
          >
            Login
          </button>

          <button
            onClick={(e) => {
              loginHandler("adarshbalika@gmail.com", "adarshBalika123");
            }}
            className="bg-black-0 rounded-xs outline-none pd-2 cursor"
          >
            Login as Guest{" "}
          </button>
        </form>
        <footer className="bg-black-4 ">
          <NavLink
            to="/signup"
            className="text-dec rounded-xs text-color-0  pd-x-3 pd-y-2"
          >
            Create account
          </NavLink>
        </footer>
      </div>
    </>
  );
}

export default Login;

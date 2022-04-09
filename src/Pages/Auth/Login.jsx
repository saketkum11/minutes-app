import React from "react";
import { useAuth } from "../../Context/Auth/Auth";

function Login() {
  const { auth } = useAuth();
  return (
    <>
      <div className=" m-auto wt-30 flex flex-column justify-even">
        <form
          action=""
          className="bg-black-1 text-color-9 justify-even flex flex-column  m-t-9 pd-11"
        >
          <label
            htmlFor=""
            className="flex items-start pd-y-5 pd-x-3 text-xm text-sm text-light"
          >
            Email
          </label>
          <input
            type="email"
            class=" pd-4   text-s rounded-xs "
            placeholder="Email Id"
          />

          <label
            htmlFor=""
            className="flex items-start text-xm pd-y-5 pd-x-3 text-sm text-light"
          >
            Password{" "}
          </label>

          <input
            type="password"
            class="pd-4 text-s rounded-xs outline-none "
            placeholder="Password"
          />
          <button class="bg-purple-7 m-y-8 rounded-xs border-none outline-none text-s cursor text-color-0 pd-3 text-light">
            Login
          </button>

          <button class="bg-black-0 rounded-xs outline-none pd-2 cursor">
            Login as Guest{" "}
          </button>
        </form>
        <footer className="bg-black-4 ">
          <a href="" class="text-dec rounded-xs text-color-0  pd-x-3 pd-y-2">
            Create account
          </a>
        </footer>
      </div>
    </>
  );
}

export default Login;

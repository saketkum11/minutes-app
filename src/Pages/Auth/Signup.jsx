import React, { useState } from "react";
import { useAuth } from "../../Context/Auth/Auth-Context";

function Signup() {
  const { signupHandler } = useAuth();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div className=" m-auto wt-30 flex flex-column justify-even">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signupHandler(data);
            console.log(data);
          }}
          action=""
          className="bg-black-1 text-color-9 justify-even flex flex-column  m-t-9 pd-11"
        >
          <label
            htmlFor=""
            className="flex items-start pd-y-5 pd-x-3 text-xm text-sm text-light"
          >
            FirstName
          </label>
          <input
            type="text"
            class=" pd-4 text-s rounded-xs "
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
            placeholder="eg: saket"
          />
          <label
            htmlFor=""
            className="flex items-start text-xm pd-y-5 pd-x-3 text-sm text-light"
          >
            LastName
          </label>
          <input
            type="text"
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
            class="pd-4 text-s rounded-xs outline-none "
            placeholder="eg: kumar"
          />
          <label
            htmlFor=""
            className="flex items-start text-xm pd-y-5 pd-x-3 text-sm  text-light"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            class="pd-4 text-s rounded-xs outline-none "
            placeholder="eg: kumarsaket@gmail.com"
          />
          <label
            htmlFor=""
            className="flex items-start text-xm pd-y-5 pd-x-3 text-sm  text-light"
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            class="pd-4 text-s rounded-xs outline-none "
            placeholder="eg: asjh$dhdf12"
          />
          <button
            type="submit"
            class="bg-purple-7 m-y-8 rounded-xs border-none outline-none text-s cursor text-color-0 pd-3 text-light"
          >
            Sign Up
          </button>
          <a
            href="#"
            class="text-dec rounded-s text-color-9 bg-black-2 pd-x-3 pd-y-2"
          >
            Already have account
          </a>
        </form>
      </div>
    </>
  );
}

export default Signup;

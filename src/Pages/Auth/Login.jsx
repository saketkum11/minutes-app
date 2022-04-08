import React from "react";
import { useAuth } from "../../Context/Auth/Auth";

function Login() {
  const { auth } = useAuth();
  return (
    <>
      <div className="wt-30 m-auto ">
        <form action="" className="bg-purple-8 flex flex-column">
          <label htmlFor="">Email</label>
          <input
            type="email"
            class=" pd-3  m-t-1 text-s rounded-xs "
            placeholder="Email Id"
          />

          <label htmlFor="">Password </label>
          <input
            type="email"
            class="pd-4  m-t-1 text-s rounded-xs "
            placeholder="Email Id"
          />
        </form>
      </div>
    </>
  );
}

export default Login;

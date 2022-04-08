import React from "react";
import { useAuth } from "../../Context/Auth/Auth";

function Login() {
  const { auth } = useAuth();
  return (
    <>
      <div className=" m-auto wt-30">
        <form action="" className="bg-purple-8 flex flex-column m-t-9">
          <label htmlFor="">Email</label>
          <input
            type="email"
            class=" pd-4  m-t-1 text-s rounded-s "
            placeholder="Email Id"
          />

          <label htmlFor="">Password </label>
          <input
            type="email"
            class="pd-4  m-t-1 text-s rounded-s "
            placeholder="Email Id"
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;

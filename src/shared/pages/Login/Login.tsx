import { useState } from "react";

import { Link } from "react-router-dom";

import Input from "../../components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-list-bg p-5 px-10 rounded-lg shadow-lg m-1">
        <h1 className="font-semibold text-xl md:text-2xl mt-2 mb-5">
          Login on <span className="text-secondary-color">your</span> account
        </h1>
        <div className="flex flex-col gap-5">
          <Input
            id="email"
            label="Email"
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Insert your email"
            value={email}
            type="email"
          />
          <Input
            id="password"
            label="Password"
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Insert your password"
            value={password}
            type="password"
          />
        </div>
        <button className="bg-secondary-color px-6 py-2 mt-5 rounded-md hover:bg-secondary-color-2 hover:pr-20 transition-all">
          Login
        </button>
        <p className="mt-2 text-sm md:text-base">
          Don't have an account?
          <Link to="/register" className="text-secondary-color-2 ml-2">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

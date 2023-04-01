import { useState } from "react";

import { Link } from "react-router-dom";

import { Input } from "../../components";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <form className="bg-list-bg p-5 px-5 md:px-10 rounded-lg shadow-lg m-1 max-w-xs md:max-w-md animeLeft">
        <h1 className="font-semibold text-xl md:text-2xl mt-2 mb-5">
          Register <span className="text-secondary-color">your new</span>{" "}
          account
        </h1>
        <p className="mb-3 max-w-sm text-gray-300 text-sm">
          Register your new account to be able to manage your finances
        </p>
        <div className="flex flex-col gap-5">
          <Input
            id="username"
            label="Username"
            onChange={({ target }) => setName(target.value)}
            placeholder="Joao Vitor"
            value={name}
            type="text"
          />
          <Input
            id="email"
            label="Email"
            onChange={({ target }) => setEmail(target.value)}
            placeholder="example@email.com"
            value={email}
            type="email"
          />
          <Input
            id="password"
            label="Password"
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Insert a strond password"
            value={password}
            type="password"
          />
        </div>
        <button
          type="button"
          className="flex gap-2 justify-center items-center mt-3 bg-white p-2 w-full rounded-md text-black font-semibold"
        >
          <img src="/assets/img/google.svg" className="w-5" />
          Register with Google
        </button>
        <button className="bg-secondary-color px-6 py-2 mt-5 rounded-md hover:bg-secondary-color-2 hover:pr-20 transition-all">
          Register
        </button>
        <p className="mt-2 text-sm md:text-base">
          Have an account?
          <Link to="/login" className="text-secondary-color-2 ml-2">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

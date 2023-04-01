import { Link } from "react-router-dom";

import { UnloggedHead } from "../../components";

export function Presentation() {
  return (
    <div>
      <UnloggedHead />
      <section className="text-center mt-10 md:mt-32 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Welcome to <span className="text-secondary-color">inControl</span>
        </h1>
        <p className="font-medium md:mt-3 md:text-3xl">
          But what does <span className="text-secondary-color">inControl</span>{" "}
          do?
        </p>
        <p className="font-medium mt-3 md:mt-5 md:text-2xl max-w-[350px] p-2">
          Is an app that makes your life{" "}
          <span className="text-secondary-color">easier</span> to{" "}
          <span className="text-secondary-color">control</span> your spending
          and cash inflows
        </p>
      </section>
      <section className="bg-list-bg text-center mt-10 md:mt-32 flex flex-col items-center pb-20 md:pb-24">
        <h1 className="text-3xl md:text-5xl font-semibold mt-10">
          Create an <span className="text-secondary-color">Account</span>
        </h1>
        <p className="font-medium md:mt-3 md:text-3xl max-w-[600px]">
          Don't waste time and start getting better financially organized right
          now
        </p>
        <div className="flex gap-2 md:gap-10 mt-5">
          <Link
            to="/register"
            className="w-24 h-7 md:w-40 md:h-10 bg-secondary-color flex justify-center items-center rounded-2xl hover:scale-105 transition-transform"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="w-24 h-7 md:w-40 md:h-10 bg-secondary-color flex justify-center items-center rounded-2xl hover:scale-105 transition-transform"
          >
            Login
          </Link>
        </div>
      </section>
    </div>
  );
}

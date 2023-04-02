import { Link } from "react-router-dom";

export function Presentation() {
  return (
    <div>
      <section className="text-center mt-10 md:mt-32 flex flex-col items-center px-4">
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
      <section className="bg-list-bg text-center mt-10 md:mt-32 flex flex-col items-center pb-10 pt-10 md:pb-24 md:pt-24 px-4">
        <h1 className="text-3xl md:text-5xl font-semibold ">
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
      <section className="text-center mt-7 md:mt-20 pb-32 flex flex-col items-center px-4">
        <h1 className="text-3xl md:text-5xl font-semibold mt-10">
          Why use <span className="text-secondary-color">inControl</span>?
        </h1>
        <p className="font-medium md:mt-3 md:text-3xl max-w-[600px]">
          Perhaps you are wondering why to use InControl, so here are some
          advantages:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
          <div className="bg-secondary-color h-72 flex flex-col items-center justify-center p-10 md:max-w-lg hover:scale-105 cursor-pointer transition-transform">
            <img src="/assets/img/filter.svg" className="w-28" />
            <p className="font-semibold text-sm">Filter by order or by month</p>
          </div>
          <div className="bg-secondary-color-2 h-72 flex flex-col items-center justify-center p-10 md:max-w-lg hover:scale-105 cursor-pointer transition-transform">
            <img src="/assets/img/graph.svg" className="w-28" />
            <p className="font-semibold text-sm">
              See the money flowing in and out seamlessly
            </p>
          </div>
          <div className="bg-secondary-color h-72 flex flex-col items-center justify-center p-10 md:max-w-lg hover:scale-105 cursor-pointer transition-transform">
            <img src="/assets/img/pig.svg" className="w-28" />
            <p className="font-semibold text-sm">
              Separate money from the rest in the form of a piggy bank
            </p>
          </div>
          <div className="bg-secondary-color-2 h-72 flex flex-col items-center justify-center p-10 md:max-w-lg hover:scale-105 cursor-pointer transition-transform">
            <img src="/assets/img/money.svg" className="w-28" />
            <p className="font-semibold text-sm">
              See how much of your monthly money is left without boring
              calculations
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

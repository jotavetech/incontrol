import { Link } from "react-router-dom";

export function UnloggedHead() {
  return (
    <header className="w-full bg-list-bg h-16 md:h-20 flex items-center">
      <nav className="flex items-center justify-between w-full md:w-[1200px] p-5 md:p-20 mx-auto">
        <Link to="/" className="text-xl md:text-3xl font-semibold">
          in<span className="text-secondary-color">Control</span>
        </Link>
        <div className="flex gap-3">
          <Link
            to="/login"
            className="bg-secondary-color text-sm md:text-base w-20 h-7 md:w-24 flex justify-center items-center rounded-2xl hover:bg-secondary-color-2 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-item-bg text-sm md:text-base w-20 h-7  md:w-24 flex justify-center items-center rounded-2xl hover:bg-gray-900 transition-colors"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

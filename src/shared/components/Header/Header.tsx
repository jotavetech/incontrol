import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";

import { auth } from "../../firebase";

import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { BiExit } from "react-icons/bi";
import { SwitchThemeButton } from "../SwitchThemeButton/SwitchThemeButton";

export function Header() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const handleExit = async () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <header className="w-full bg-list-bg h-16 md:h-20 flex items-center fixed top-0 z-50 shadow-md dark:bg-zinc-100 transition-colors">
        <nav className="flex items-center justify-between w-full md:w-[1200px] p-5 md:p-20 mx-auto">
          <Link to="/" className="text-base md:text-3xl font-semibold">
            in<span className="text-secondary-color">Control</span>
          </Link>
          <div className="flex items-center gap-3">
            <SwitchThemeButton />
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="bg-secondary-color text-sm md:text-base w-20 h-7 md:w-24 flex justify-center items-center rounded-2xl hover:bg-secondary-color-2 transition-colors dark:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-item-bg text-sm md:text-base w-20 h-7  md:w-24 flex justify-center items-center rounded-2xl hover:bg-gray-900 transition-colors dark:text-white"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <h2 className="text-sm md:text-base">
                  Hello,{" "}
                  {user.displayName
                    ? user.displayName
                    : user.email
                    ? user.email.split("@")[0]
                    : "User"}
                </h2>
                <button
                  onClick={handleExit}
                  className="bg-secondary-color text-sm md:text-base w-20 h-7 md:w-24 flex justify-center items-center rounded-2xl hover:bg-secondary-color-2 transition-colors dark:text-white"
                >
                  Exit
                  <BiExit className="ml-2" />
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

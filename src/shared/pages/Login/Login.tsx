import { useState } from "react";

import { Link } from "react-router-dom";

import { Input } from "../../components";

import { validateEmail, validatePassword } from "../../utils/loginValidation";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth, provider } from "../../firebase";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [authFail, setAuthFail] = useState("");

  const validateFields = () => {
    let hasErrors = false;

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email" }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (!validatePassword(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password too short",
      }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }

    return !hasErrors;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setAuthFail("");

    if (validateFields()) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => console.log(userCredentials))
        .catch((error) => setAuthFail(error.message))
        .finally(() => setLoading(false));
    }
  };

  const handleGoogleLogin = () => {
    setAuthFail("");

    signInWithPopup(auth, provider)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => {
        setAuthFail(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden pt-14 md:pt-24">
      <form
        onSubmit={handleLogin}
        className={`bg-list-bg p-5 px-4 md:px-10 rounded-lg shadow-lg m-1 max-w-[300px] md:max-w-md animeRight mt-16 md:mt-36 mb-16 ${
          errors.email || errors.password || authFail ? "shake" : ""
        }`}
      >
        <h1 className="font-semibold text-xl md:text-2xl mt-1 mb-3 md:mb-5">
          Login on <span className="text-secondary-color">your</span> account
        </h1>
        <p className="mb-1 md:mb-3 max-w-sm text-gray-300 text-sm">
          Login to your account to be able to manage your finances
        </p>
        <div className="flex flex-col gap-2 md:gap-5">
          <Input
            id="email"
            label="Email"
            onChange={({ target }) => setEmail(target.value)}
            placeholder="example@email.com"
            value={email}
            type="email"
            error={errors.email}
            disabled={loading}
          />
          <Input
            id="password"
            label="Password"
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Insert your strong password"
            value={password}
            type="password"
            error={errors.password}
            disabled={loading}
          />
        </div>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex gap-2 justify-center items-center mt-3 bg-white p-1 md:p-2 w-full rounded-md text-black font-semibold text-sm"
        >
          <img src="/assets/img/google.svg" className="w-5" />
          Login or Register with Google
        </button>
        <button
          disabled={!email || !password || loading}
          className="bg-secondary-color px-4 py-2 text-sm mt-2 md:px-6 md:py-2 md:mt-5 md:text-base rounded-md hover:bg-secondary-color-2 hover:pr-20 transition-all disabled:opacity-60 disabled:cursor-default disabled:hover:pr-4 md:disabled:hover:pr-6 disabled:hover:bg-secondary-color"
        >
          Login
        </button>
        <p className="mt-2 text-sm md:text-base">
          Don't have an account?
          <Link to="/register" className="text-secondary-color-2 ml-2">
            Register here
          </Link>
        </p>
        {authFail && <p className="text-red-500 text-sm mt-2">{authFail}</p>}
      </form>
    </div>
  );
}

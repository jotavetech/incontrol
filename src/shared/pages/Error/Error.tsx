import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className="h-screen flex items-center justify-center border-2 border-red-300">
      <div className="text-center">
        <h1 className="text-3xl mb-2">Erro :(</h1>
        <p className="text-secondary-color text-xl">Page not found</p>
        <Link
          to="/home"
          className="mt-2 p-1 bg-secondary-color flex justify-center items-center rounded-2xl hover:scale-105 transition-transform"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Register } from "./shared/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Main</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="App bg-main-bg text-white w-full min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

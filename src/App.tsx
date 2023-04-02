import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Login, Register, Presentation } from "./shared/pages";

import { Footer, UnloggedHead } from "./shared/components";

function Layout() {
  return (
    <div>
      <UnloggedHead />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Presentation />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
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

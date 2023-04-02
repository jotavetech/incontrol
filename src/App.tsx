import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Login, Register, Presentation } from "./shared/pages";

import { Footer, Header } from "./shared/components";

import { ProtectedRoute } from "./ProtectedRoute";

function Layout() {
  return (
    <div>
      <Header />
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
        element: (
          <ProtectedRoute>
            <Presentation />
          </ProtectedRoute>
        ),
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

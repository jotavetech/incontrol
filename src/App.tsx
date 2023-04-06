import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Login, Register, Presentation, Home, Error } from "./shared/pages";

import { Footer, Header } from "./shared/components";

import { ProtectedRoute, UnloggedRoute } from "./ProtectedRoute";

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
          <UnloggedRoute>
            <Presentation />
          </UnloggedRoute>
        ),
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <UnloggedRoute>
            <Login />
          </UnloggedRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <UnloggedRoute>
            <Register />
          </UnloggedRoute>
        ),
      },
      {
        path: "*",
        element: <Error />,
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

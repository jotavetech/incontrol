import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import {
  Login,
  Register,
  Presentation,
  Home,
  Error,
  Entries,
  Spents,
} from "./shared/pages";

import { Footer, Header, Menu } from "./shared/components";

import { ProtectedRoute, UnloggedRoute } from "./ProtectedRoute";
import { ItemsProvider } from "./shared/context/itemsContext";

function Layout() {
  return (
    <div>
      <Header />
      <Menu />
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
        path: "/entries",
        element: (
          <ProtectedRoute>
            <Entries />
          </ProtectedRoute>
        ),
      },
      {
        path: "/spents",
        element: (
          <ProtectedRoute>
            <Spents />
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
      <ItemsProvider>
        <RouterProvider router={router} />
      </ItemsProvider>
    </div>
  );
}

export default App;

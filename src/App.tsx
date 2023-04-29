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

import { useEffect } from "react";

import { analytics } from "./shared/firebase";
import { logEvent } from "firebase/analytics";

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
  useEffect(() => {
    logEvent(analytics, "render_app", { name: "using app" });
  }, []);

  return (
    <div className="App bg-main-bg dark:bg-zinc-300 text-white w-full min-h-screen dark:text-black">
      <ItemsProvider>
        <RouterProvider router={router} />
      </ItemsProvider>
    </div>
  );
}

export default App;

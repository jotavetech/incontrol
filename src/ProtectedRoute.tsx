import { useAuthState } from "react-firebase-hooks/auth";

import { Navigate } from "react-router-dom";

import { auth } from "./shared/firebase";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [user] = useAuthState(auth);

  if (user) return children;
  return <Navigate to="/login" />;
}

export function UnloggedRoute({ children }: { children: JSX.Element }) {
  const [user] = useAuthState(auth);

  if (!user) return children;
  return <Navigate to="/home" />;
}

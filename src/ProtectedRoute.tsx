import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = true;

  if (auth) return children;
  return <Navigate to="login" />;
}

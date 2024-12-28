import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

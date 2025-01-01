// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { SimpleLayout } from "./components/Layout/SimpleLayout";

const router = createBrowserRouter([
  {
    element: <Layout />, // Default layout with Navbar and Footer
    children: [
      {
        path: "/", // Home page
        element: <Home />,
      },
      // Add other routes requiring Navbar/Footer here
    ],
  },
  {
    element: <SimpleLayout />, // Simple layout without Navbar and Footer
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      // Add other routes without Navbar/Footer here
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

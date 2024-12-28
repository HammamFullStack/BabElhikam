import { Login } from "./pages/Login/Login"
import { SignUp } from "./pages/SignUp/SignUp"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

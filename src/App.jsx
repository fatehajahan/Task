import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import ResendPasword from "./pages/ResendPassword/ResendPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resendPassword" element={<ResendPasword />} />
    </>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

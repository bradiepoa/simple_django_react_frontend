import react from "react"
import { BrowserRouter, Routes,Route,Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import protectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigate to="/Login" />
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <protectedRoute>
          <Home />
        </protectedRoute>
      } 
      />
      <Route path="/login" element={<Login /> } />
      <Route path="/register" element={<RegisterAndLogout /> } />
      <Route path="*" element={<NotFound /> } />
    </Routes>
    </BrowserRouter>
     
   
  )
}
export default App

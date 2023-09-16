import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import LoginForm from "./user/Login"
import Register from "./user/Register"
import Cart from "./Cart/Cart"
import PrivateRoute from "./P-route/PrivateRoute"
import ProdfrNavbar from "./ProdfrNavbar/ProdfrNavbar"
import About from "./About/About"



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
      <Route path="/product" element={<ProdfrNavbar/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  )
}
export default App
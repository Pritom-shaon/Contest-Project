import { Link } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";

const Navbar = () => {
  const userEmail = JSON.parse(localStorage.getItem("user"))
  const cartItem =JSON.parse(localStorage.getItem("Productitem"))||[]

  const handlelogout = () => {
    const auth = getAuth(app);

    signOut(auth).then(() => {
      localStorage.removeItem("user")
      window.location.href = "/"

    }).catch((error) => {
      console.log(error)
    });

  }
  return (
    <div className="we">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><b style={{color:"orange"}}>Shop.com</b></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page" href="#"><b><a href="">Home</a></b></Link>
              </li>
              {
                userEmail ? <li class="nav-item">
                  <button onClick={handlelogout} className="btn btn-info er" href="#"><b>Logout</b></button>
                </li> : <li class="nav-item">
                  <Link to="/login" class="nav-link" href="#"><b><a href="">Login</a></b></Link>
                </li>
              }
              <li class="nav-item">
                <Link to="/product" class="nav-link" href="#"><b><a href="">Product</a></b></Link>
              </li>
              <li class="nav-item">
                <Link to="/register" class="nav-link" href="#"><b><a href="">Register</a></b></Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link" href="#"><b><a href="">About</a></b></Link>
              </li>
              <li class="nav-item">
                <Link to="/cart">
                  <div class="position-relative mt-2">
                    <i class="fas fa-shopping-cart fa-2x cv"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill vb">
                      <b>{cartItem.length}</b>
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
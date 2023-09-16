import Carosol from "../Carosol/Carosol"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Product from "../Product/Product"

const Home=()=>{
    return(
  <div>
          <div>
        <Navbar></Navbar>
        <Carosol></Carosol>
        <Product></Product>
        
      </div>
      <div className="jk"><Footer></Footer></div>
  </div> 
    )
}
export default Home
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const ProdfrNavbar = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bn">
                <h2>Our Shop.com (Online-shop) provides you the best electronic products at reasonable prices. We take it as it's our
                    humble duty to ensure the quality products for you. In our shop, you can get the following products : </h2>
            </div><br />
            <div className="nm">
                <ul type="bullet">
                    <li><h4><b>Smartphones</b></h4></li>
                    <li><h3><b>Laptop</b></h3></li>
                    <li><h3><b>Headphones</b></h3></li>
                    <li><h3><b>Fitness Tracker</b></h3></li>
                    <li><h3><b>Coffee Maker</b></h3></li>
                    <li><h3><b>Wireless Mouse</b></h3></li>
                    <li><h3><b>Smart TV</b></h3></li>
                    <li><h3><b>Gaming Console</b></h3></li>
                    <li><h3><b>Bluetooth Speaker</b></h3></li>
                    <li><h3><b>Digital Camera</b></h3></li>
                    <li><h3><b>Wireless Earbuds</b></h3></li>
                    <li><h3><b>Tablet</b></h3></li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default ProdfrNavbar
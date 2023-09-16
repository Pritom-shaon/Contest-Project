import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Cart = () => {

    const cartItem = JSON.parse(localStorage.getItem("Productitem")) || []
    const total = (cartItem.reduce((accumulator, currentValue) => accumulator - currentValue.price, 0))
    const removehandle = (id) => {

        const newcart = cartItem.filter((Item) => Item.id != id)
        localStorage.setItem("Productitem", JSON.stringify(newcart))
        alert("Removed 1 item")

    }
    return (
<div>
    <Navbar></Navbar>
    <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    {
                        cartItem.map((Item) => (
                            <div className="card p-3">
                                <div className="cartDetailes">
                                    <div>
                                        <img style={{ height: "100px", width: "150px" }} src={Item.img_url} />
                                    </div>
                                    <div>
                                        <h2>Title: {Item.title}</h2>
                                        <h4>Price: {Item.price}Tk.</h4>
                                    </div>
                                    <div>
                                        <button onClick={() => removehandle(Item.id)} className="btn btn-danger"><b>Remove</b></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="col-md-4">
                    <div className="card p-4">
                        <h5>Total Price:{total}</h5><br/>
                        <button type="submit" className="btn btn-danger"><b> Pay Now!</b></button>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
</div>
    )
}
export default Cart
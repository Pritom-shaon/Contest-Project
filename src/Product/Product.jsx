import data from "../data.json"
const Product = () => {

  const handlecart=(Product)=>{
    const cartItem=JSON.parse(localStorage.getItem("Productitem"))||[]
    cartItem.push(Product)
    localStorage.setItem("Productitem", JSON.stringify(cartItem))
    alert("Added 1 Product")
  }

  return (
    <div className="rt">
      <div className="container pr">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {
                data.Products.map((Product) => (
                  <div className="col-md-4">
                    <div className="card cr">
                      <img src={Product.img_url} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title"><b><h3>Title :{Product.title}</h3></b></h5>
                        <b><h5>Price = {Product.price}Tk.</h5></b>
                        <b><h5>Rating : {Product.rating}</h5></b>
                        <p className="card-text"><b><h4><u>Info :</u></h4>{Product.description}</b></p>
                        <a onClick={()=>handlecart(Product)} className="btn btn-primary qw"><b>Add to Cart!</b></a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product
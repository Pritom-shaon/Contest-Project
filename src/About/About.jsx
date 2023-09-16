import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const About=()=>{
    return(
        <div>
            <Navbar></Navbar>
            <div style={{marginTop:"10px"}}>
            <img src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/341463666_1266189084310780_7991193167621031669_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFujDvtpvns6-OcwNaflLG2KKa89ZvtBUsoprz1m-0FSyE2wbMN4kpPQmg7XO4zcZMWl7JBusZStZxispImAVDq&_nc_ohc=C87v2jgOnGEAX8ZSlwo&_nc_ht=scontent.fdac31-1.fna&oh=00_AfCVPhtulfWtAVh0EE7MAE7Fur3aTlW1ryn-gmMAhLJkPg&oe=650B2664" 
            style={{height:"550px", width:"450px", position:"absolute", left:"500px"}}/></div>
            <div style={{position:"absolute",top:"625px", left:"550px"}}>
                <h3>Pritom Mohajon (CSTE-16)</h3>
                <h4> Founder and CEO of "<b style={{color:"orange"}}>Shop.com</b>"</h4>
            </div>
            <div style={{position:"absolute", top:"700px", padding:"5px"}}>
             <h5>
             Ladies and gentlemen, I am thrilled to introduce you to  <b style={{color:"orange"}}>Shop.com</b> (Online business platform), your go-to destination for electronic products. At shop.com, we are driven by a clear motto:  "<b style={{color:"green"}}>Connecting Innovation with You.</b>" This motto encapsulates our core belief that technology should be accessible and enrich the lives of every individual.
            <br/><br/><b style={{color:"blue"}}>Our mission is simple yet profound:</b> to provide high-quality electronic products that empower and enhance your daily life. We understand the importance of technology in today's world, and we strive to make it accessible to everyone, ensuring that no one is left behind in the digital age.
           <br/><br/><b style={{color:"blue"}}>Our Vision</b> is to become a trusted partner in your tech journey. We aim to be at the forefront of innovation, offering the latest and greatest electronic products while providing top-notch customer service and support. We envision a future where technology seamlessly integrates into your life, making it more convenient and enjoyable.
             </h5>
            </div>
            <div style={{position:"absolute",top:"960px", left:"6px"}}><Footer></Footer></div>
          </div>
    )
}
export default About


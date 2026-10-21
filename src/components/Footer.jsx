
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa"

function Footer(){
    return(
        <div>
               <footer>
                <div className="footer-cont">
                <div className="about-drip">
                    <h2>ABOUT DRIP BY G</h2>
                    <p>Drip by G is a modern fashion Brand offering sneakers,streetwears, and accessories. We combined comfort,class and creativity to give you the perfect look.</p>
                </div>
                <div className="about-drip">
                     <h2>CONTACT INFO</h2>
                     <p>Phone: +234 567 890 0000</p>
                     <p>Email: example@gmail.com</p>
                     <p>Address: Lagos, Nigeria</p>
                </div>
                 <div className="about-drip">
                    <h2>FOLLOW US</h2>
                    <div className="icons">
                    <p><FaFacebook className="fcb" /></p>
                    <p><FaInstagram className="fcb"/> </p>
                    <p><FaTwitter className="fcb"/> </p>
                    </div>
                </div>
                </div>
                <hr />
                <p>@2026 Drip by G. All right reserve. Design with love by Debug</p>
            </footer>
            </div>
    )
}

export default Footer
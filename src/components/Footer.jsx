
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

function Footer(){
    return(
        <footer className="site-footer">
            <div className="footer-cont">
                <section className="footer-column footer-brand">
                    <p className="footer-brand-name">Drip by G</p>
                    <p>Everyday sneakers and streetwear, selected to make your next look an easy one.</p>
                </section>
                <section className="footer-column">
                    <h2>Contact</h2>
                    <p>Phone: +234 567 890 0000</p>
                    <p>Email: example@gmail.com</p>
                    <p>Lagos, Nigeria</p>
                </section>
                <section className="footer-column">
                    <h2>Follow along</h2>
                    <div className="footer-socials" aria-label="Social media">
                        <span className="footer-social-icon" aria-label="Facebook"><FaFacebook aria-hidden="true" /></span>
                        <span className="footer-social-icon" aria-label="Instagram"><FaInstagram aria-hidden="true" /></span>
                        <span className="footer-social-icon" aria-label="Twitter"><FaTwitter aria-hidden="true" /></span>
                    </div>
                </section>
            </div>
            <div className="footer-bottom">
                <p>© 2026 Drip by G. All rights reserved.</p>
                <p>Made for everyday moves.</p>
            </div>
        </footer>
    )
}

export default Footer
import Footer from "/src/components/Footer"
import Navbar from "/src/components/Navbar" 
import "/src/App.css"
function Contact(){
    return(
      <div>
      <div className="input-section">
        <h2>Contact Us</h2>
        <p>Have question or feedback? We'd love to hear from you!</p>
        <form>
          <div className="name-div">
            <label htmlFor="fullname">Full Name</label>
            <input placeholder="Enter your name..." id="fullname"/>
          </div>
           <div className="email">
            <label htmlFor="email">Email</label>
            <input placeholder="Enter your email..." id="email"/>
          </div>
          <div className="text-angle">
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
          </div>
          <div>
            <button className="message-btn">Send Message</button>
          </div>

        </form>
       
       </div>
       <Footer />
      </div>
      
       
    )
}

export default Contact
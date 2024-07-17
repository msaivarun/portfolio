import "../css/Contact.css"
import Leetcode from "../images/Leetcode.png"
import Codeforces from "../images/Codeforces.png"
import Codechef from "../images/Codechef.png"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

const Contact = () => {
    return ( 
        <div>
            
        <div className="main contact" id="contact">
            <h2 className="contact-h2">Competitive programming platforms</h2>
            <br></br>
            <div className="underline"></div>
            <div className="social-media">
                <a href="https://leetcode.com/u/saivarunani/" target="_blank"><img src={Leetcode} width={50}/></a>
                <a href="https://codeforces.com/profile/Saivarun_mada" target="_blank"><img src={Codeforces} width={70}/></a>
                <a href="https://www.codechef.com/users/m_saivarun12" target="_blank"><img src={Codechef} width={55}/></a>

            </div>
        </div>
        <div className="main contact " id="contact">
            <h2 className="contact2">Contact me</h2>
            <br></br>
            <div className="underline"></div>
            <div className="social-media">
                <a href="https://www.instagram.com/m_saivarun/" target="_blank"><img src={instagram}/></a>
                <a href="https://www.linkedin.com/in/sai-varun-mada-969994227/" target="_blank"><img src={linkedin}/></a>
                <a href="https://github.com/msaivarun" target="_blank"><img src={github}/></a>

            </div>
        </div>
        </div>
     );
}
 
export default Contact;
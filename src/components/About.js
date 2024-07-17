import "../css/About.css";
import design from "../images/design.svg";
import html from "../images/html.svg";
import react from "../images/react.svg";
import photo from "../images/Profile2.png";
const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <h2>About me</h2>

        <div className="line"></div>
      </div>

      <div className="main">
        {/* section1 */}
        <div className="about-me">
          <img src={photo}/>
          <div className="about-right">
            <h1>Mada Sai Varun</h1>
            <p>
            Hola! 👋 I'm Sai Varun, a Software Development and Machine Learning Enthusiast with a strong affinity for problem-solving and innovation. My background in data structures and algorithms (DSA) has equipped me with the skills to tackle complex challenges and develop efficient solutions.
            </p>{" "}
            <br></br>
            <p>
              {" "}
              Python and SKlearn are my playgrounds for exploring machine learning concepts and building intelligent systems. I'm proficient in C++, Java, and Python, and have experience in developing scalable software applications.
            </p>{" "}
            <br></br>
            <p>
            I'm committed to clean code, algorithmic efficiency, and optimal performance. In a dynamic field, I'm dedicated to ongoing learning. As a student, I am open to roles as a Software Development Engineer (SDE). Let's collaborate to bring your ideas to life through cutting-edge technology and seamless solutions.
            </p>
          </div>
        </div>
{/* section2 */}
        <div className="cards">
          <div className="card ">
            <img src={design} />
            <div className="line"></div>
            <div className="card-content">
              <h6>Software Development and ML</h6>
              <p>Algorithms, coding, ML models.</p>
            </div>
          </div>
          <div className="card ">
            <img src={html} />
            <div className="line"></div>
            <div className="card-content">
              <h6>HTML & CSS</h6>
              <p>Responsive websites with fast loading.</p>
            </div>
          </div>
          <div className="card ">
            <img src={react} />
            <div className="line"></div>
            <div className="card-content">
              <h6>React.js</h6>
              <p>Build your system with react and node.js</p>
            </div>
          </div>
        </div>
{/* section3 */}
        <div className="boxes">
          <div className="box">
            <div className="line2"></div>
            <div className="study-text">
              <h6>I work and study about</h6>
              <p>Studying DSA</p>
              <p>Studying Node.js basics</p>
              <p>Studying API RESTful</p>
              <p>Coding React.js</p>
              <p>Coding Javascript</p>
              <p>Coding Bootstrap</p>
            </div>
          </div>
          <div className="box">
            <div className="line2"></div>
            <div className="study-text">
              <h6>I've had experiences with</h6>
              <p>MySQL Database</p>
              <p>Neural Networks</p>
              <p>Coding Python</p>
              <p>Coding Java</p>
              <p>GIT, GitHub</p>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

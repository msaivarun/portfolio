import "../css/About.css";
import design from "../images/design.svg";
import html from "../images/html.svg";
import react from "../images/react.svg";
import photo from "../images/image1.jpg";
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
          <img src={photo} />
          <div className="about-right">
            <h1>Adepu Loukya</h1>
            <p>
              Hola!👋 I'm Loukya, a Frontend Developer and Designer with a
              strong affinity for React. My design background has instilled in
              me a passion for creating visually striking, user-centered web
              experiences.
            </p>{" "}
            <br></br>
            <p>
              {" "}
              React is my playground for turning design concepts into
              interactive reality, and I'm proficient in HTML, CSS, JavaScript,
              Tailwind, bootstrap.
            </p>{" "}
            <br></br>
            <p>
              I'm committed to clean code, responsive design, and optimal
              performance. In a dynamic field, I'm dedicated to ongoing
              learning. Let's collaborate to bring your ideas to life through
              seamless web solutions.
            </p>
          </div>
        </div>
{/* section2 */}
        <div className="cards">
          <div className="card ">
            <img src={design} />
            <div className="line"></div>
            <div className="card-content">
              <h6>Interface & design</h6>
              <p>Briefing, wireframe, UX, UI and branding.</p>
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
              <p>Coding React.js</p>
              <p>Coding Javascript</p>
              <p>Coding Tailwind</p>
              <p>Studying Node.js basics</p>
              <p>Studying API RESTful</p>
              <p>Studying User Experience</p>
            </div>
          </div>
          <div className="box">
            <div className="line2"></div>
            <div className="study-text">
              <h6>I've had experiences with</h6>
              <p>MySQL Database</p>
              <p>Coding PHP</p>
              <p>Coding Tailwind</p>
              <p>Coding Java</p>
              <p>GIT, GitHub</p>
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

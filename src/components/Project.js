import "../css/Project.css";
import TrafficManagement from "../images/TrafficManagement.png";
import Bachelors from "../images/Bachelors.png";
import Foodproject from "../images/FoodProject.png";
import { useState } from "react";

const Project = () => {
  const [project, setProject] = useState([
    {
      id: 1,
      image: TrafficManagement,
      lang1: "Python",
      lang2: "YOLO",
      title: "Smart Traffic Management",
      description:
        "Smart traffic management project is build using yolo algorithm which is a real time object detection algorithm.",
      github: "https://github.com/msaivarun/traffic_managment",
      project: "*",
    },
    {
      id: 2,
      image: Bachelors,
      lang1: "React",
      lang2: "CSS",
      title: "Bachelors",
      description:
        "The project aims to alleviate common challenges faced by bachelors relocating to new cities.",
      github: "https://github.com/msaivarun/bachelor-s/tree/master/myapp",
      project: "https://bachelor-s1.vercel.app/",
    },
    {
      id: 3,
      image: Foodproject,
      lang1: "JavaScript",
      lang2: "Bootstrap",
      title: "Restaurant Website",
      description:
        "The project is essentially a frontend application utilizing HTML, CSS, JavaScript, jQuery, and Bootstrap to advertise a restaurant, showcasing its location and highlighting customer satisfaction with its services.",
      github: "https://github.com/msaivarun/foodproject.github.io",
      project: "https://msaivarun.github.io/foodproject.github.io/",
    },
  ]);

  return (
    <div className="project" id="project">
      <h2 className="heading">Personal Projects</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="underline"></div>
      <div className="main">
        {/* projects */}
        <div className="projects">
          {project.map((details, index) => (
            <div className="project-box" key={details.id}>
              <div className="project-details">

                <div className="projects-left">
                  <img src={details.image} width="250px" alt={details.title}/>
                  <div className="languages">
                    <p>{details.lang1}</p>
                    <p>{details.lang2}</p>
                  </div>
                </div>

                <div className="projects-right">
                  <h3>{details.title}</h3>
                  <p>{details.description}</p>
                </div>

              </div>
              <div className="project-links">
                <a href={details.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {index !== 0 && (
                  <a href={details.project} target="_blank" rel="noopener noreferrer">
                    See project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

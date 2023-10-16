import "../css/Project.css";
import WeatherDashboard from "../images/weather-dashboard.png";
import TrainingWebsite from "../images/training website.png";
import Finguard from "../images/Finguard.png";
import { useState } from "react";
const Project = () => {
  const [project, setProject] = useState([
    {
      id: 1,
      image: Finguard,
      lang1: "React",
      lang2: "CSS",
      title: "Finguard",
      description:
        "The project showcases a dashboard where user can search any of the city then the temperature along with all the climate conditions and also longitude, latitude of that location will be diplayed",
      github: "https://github.com/A-Loukya/FinGuard",
      project: "https://a-loukya.github.io/FinGuard/",
    },
    {
      id: 2,
      image: TrainingWebsite,
      lang1: "React",
      lang2: "CSS",
      title: "Training Website",
      description:
        "The project showcases different training approches and services of a company and displays internship opportunities provided by the company",
      github: "https://github.com/A-Loukya/TrainingWebsite",
      project: "https://a-loukya.github.io/TrainingWebsite/",
    },
    {
      id: 3,
      image: WeatherDashboard,
      lang1: "React",
      lang2: "Tailwind",
      title: "Weather Dashboard",
      description:
        "The project showcases a dashboard where user can search any of the city then the temperature along with all the climate conditions and also longitude, latitude of that location will be diplayed",
      github: "https://github.com/A-Loukya/weather-dashboard",
      project: "*",
    },
  ]);
  return (
    <div className="project" id="project">
      <h2>Personal Projects</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="underline"></div>
      <div className="main ">
{/* projects */}
        <div className="projects">
          {project.map((details) => (
            <div className="project-box" key={details.id}>
              <div className="project-details">

                <div className="projects-left">
                  <img src={details.image} width="250px" />
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
                <a href={details.github} target="_blank">
                  GitHub
                </a>
                <a href={details.project} target="_blank">
                  See project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

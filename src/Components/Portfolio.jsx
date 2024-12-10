import React from "react";
import image from "../images/Laptop_image_with_quote.jpg";
const imageAltText = "Desk with coding setup including monitors, keyboard, and laptop";

const projectList = [
  {
    title: "Payment Management System",
    description:
      "A full-stack Payment Management System built using Node.js, React.js, MySQL, and Express.js, allowing users to manage their accounts and process payments.",
    url: "https://github.com/Naivedya-Baranwal/payment-management-system",
  },
  {
    title: "Netflix Frontend Replica",
    description:
      "A responsive replica of Netflix's frontend created using HTML, CSS, and JavaScript, designed to improve UI/UX skills and media queries implementation.",
    url: "https://github.com/Naivedya-Baranwal/netflix-frontend-replica",
  },
  {
    title: "Aim Trainer Game",
    description:
      "Enhancing Reaction Time and Accuracy: Developing an AimTrainer Game in Python with Pygame.",
    url: "https://github.com/Naivedya-Baranwal/Aim Trainer Game",
  },
  {
    title: "Personal Resume Website",
    description:
      "My personal resume website created to showcase my skills, projects, and achievements. Built using Html and Css.",
    url: "https://naivedya-baranwal.github.io/Resume/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container" style={{ marginLeft: "2rem" }}>
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ marginBottom: "2rem" }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

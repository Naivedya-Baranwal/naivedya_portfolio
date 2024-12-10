import React from "react";

import image from "../images/Table.jpg";

const imageAltText = "A table with electronics items";

const description =
  "I'm a passionate software engineer with a solid foundation in Data Structures and Algorithms (DSA) and expertise in full-stack web development. I love solving complex problems and contributing innovative solutions.";

const skillsList = [
  "Full-stack web development",
  "React.js and Node.js",
  "MySQL and database management",
  "Data Structures and Algorithms",
  "HTML, CSS, and JavaScript",
  "Building scalable applications",
];

const detailOrQuote =
  "I strive to create seamless, user-friendly applications by combining my technical expertise and continuous learning. I am driven by the goal of delivering impactful solutions through innovation and collaboration.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

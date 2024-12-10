import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/Laptop_image.jpg";

const imageAltText = "Desk with a laptop and books.";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative" }}>
      <img className="background" src={image} alt={imageAltText} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "0" }}>{name}</h1>
        <h2 style={{ fontSize: "2rem", fontWeight: "300" }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Scroll down indicator" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Naivedya Baranwal",
  title: "Passionate Software Engineer",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;

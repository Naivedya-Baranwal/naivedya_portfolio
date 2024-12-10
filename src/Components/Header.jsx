import React from "react";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        background: "rgb(192 192 192 / 85%)",
        padding: "1rem 2rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <a href="#home" style={navLinkStyle}>
        Home
      </a>
      <a href="#about" style={navLinkStyle}>
        About
      </a>
      <a href="#portfolio" style={navLinkStyle}>
        Portfolio
      </a>
      <a href="#footer" style={navLinkStyle}>
        Contact
      </a>
    </header>
  );
};

const navLinkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
  fontSize: "1rem",
  transition: "color 0.3s",
};

export default Header;

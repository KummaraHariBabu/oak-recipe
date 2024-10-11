import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h3>
          {"<OAK/>"}
          <span>Recipe</span>
        </h3>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>APIs</h4>
          <a href="/nutrition-analysis">Nutrition Analysis API</a>
          <a href="/food-database">Food Database API</a>
          <a href="/recipe-search">Recipe Search API</a>
          <a href="/faq">FAQ</a>
        </div>

        <div className="footer-section">
          <h4>Try Products</h4>
          <a href="/nutrition-wizard">Nutrition Wizard</a>
          <a href="/recipe-search">Recipe Search</a>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pinterest
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 OAK Recipe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

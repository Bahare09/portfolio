import React from "react";
import "./Style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Bahare. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/bahare-bahreinian-002843246/"
            target="_blank" // Add target="_blank" to open link in a new tab
          >
            <i className="fab fa-linkedin"></i> {/* Use the LinkedIn icon */}
          </a>
          <a
            href="https://twitter.com/your_twitter_profile"
            target="_blank" // Add target="_blank" to open link in a new tab
            rel="noopener noreferrer" // Add rel="noopener noreferrer" for security
          >
            <i className="fab fa-twitter"></i> {/* Use the Twitter icon */}
          </a>
          <a
            href="https://github.com/your_github_username"
            target="_blank" // Add target="_blank" to open link in a new tab
            rel="noopener noreferrer" // Add rel="noopener noreferrer" for security
          >
            <i className="fab fa-github"></i> {/* Use the GitHub icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

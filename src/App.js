import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe/>
        <Projects/>
            <p> {new Date().getFullYear()} </p>

        <ContactForm/>
            </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Bahare Bahreinian</p>
      </footer>
    </div>
  );
}

export default App;

import HeaderImage from "../../assets/dp.jpg";
import { HiDownload } from "react-icons/hi";
import CV from "../../assets/MyResume.pdf";
import Typewriter from "typewriter-effect";
import data from "./data";
import { useEffect } from "react";
import "./header.css";
import AOS from "aos"; // this is the package which gives us some loading style
import "aos/dist/aos.css"; // this is the css package which gives us more style
const Header = () => {
  useEffect(() => {
    // we have use the style in this because once our page loads or mount then our useeffect will run
    AOS.init({ duration: 2000 });
  });
  // this function will gives us a typewritter effect in name
  const Typewrittereffect = () => {
    // Return the Typewriter component here
    return (
      <Typewriter
        options={{
          strings: ["Harish Prajapat", "ReactJs Developer", "Problem Solver"],
          autoStart: true,
          loop: true,
        }}
      />
    );
  };

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile first" data-aos="fade-up">
          <img className="image" src={HeaderImage} alt="Header Portait" />
          <div className="overlay">
            <a href={CV} download className="">
              Download CV <HiDownload />
            </a>
          </div>
        </div>

        <h3
          style={{ fontFamily: "sans-serif", color: "White" }}
          data-aos="fade-up"
        >
          {Typewrittereffect()}
        </h3>
        <p data-aos="fade-up">
          Passionate about coding how to code efficiently with excellent problem
          solving skills and learning new skills ability to perform well with a
          team. Developing Website Complete Mern Stack developer.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        {/* <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div> */}
      </div>
    </header>
  );
};

export default Header;

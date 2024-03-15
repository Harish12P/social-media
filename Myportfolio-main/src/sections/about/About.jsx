import AboutImage from "../../assets/aboutpic.jpg";
import Cerficates from "../../assets/certificate.png";
import Cerficatepdf from "../../assets/pdf.pdf";
import CV from "../../assets/MyResume.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data"; // this is the data importing
import Card from "../../components/Card";
import "./about.css"; // this is style for this components only
import AOS from "aos"; // this is the package which gives us some loading style
import "aos/dist/aos.css"; // this is the css package which gives us more style
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // we have use the style in this because once our page loads or mount then our useeffect will run
    AOS.init({ duration: 2000 });
  });
  return (
    <section id="about" data-aos="fade-up">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={Cerficates} alt="About Image" />
          </div>
          <div className="ok">
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1YbWPns-cfTpnMkJ0_drwmcyXNPeJwviA/view?usp=drive_link"
                ); //here is cerificate link
              }}
              download
              className="button-87"
            >
              View Certificate
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1YbWPns-cfTpnMkJ0_drwmcyXNPeJwviA/view?usp=drive_link",
                  "_blank"
                ); //here also
              }}
              download
              className="button-87"
            >
              Show Certificates
            </button>
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p style={{ fontWeight: "bold" }}>
            Enthusiastic and results-driven ReactJs Developer with a strong
            foundation in web development and a passion for creating efficient,
            scalable, and visually appealing applications. Proficient in
            building dynamic and responsive web solutions using MongoDB, React
            Hooks, and Redux Eager to leverage my technical skills and
            creativity to contribute to innovative projects and collaborate with
            cross-functional teams
          </p>
          <p style={{ fontWeight: "bold" }}>
            Hi, my name is Harish kumar Prajapat from India. I'm a ReactJs web
            developer with a Bachelors degree in Science.Built and deployed
            responsive and user-friendly websites for small businesses using the
            ReactJs, resulting in increased online visibility and customer
            engagement. Implemented data storage and retrieval functionalities
            using MongoDB, ensuring smooth data .
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

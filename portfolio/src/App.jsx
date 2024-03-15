import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;

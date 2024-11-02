import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Person from "./components/person/Person";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
// import Test from "./Test";
const App = () => {
  return (
    <>
      <section id="Home">
        <Navbar />
        <Hero/>
      </section>
      <section id='Services'><Parallax type='services'/></section>
      <section><Services/></section>
      <section id="Portfolio"><Parallax type='portfolio'/></section>
      <Portfolio/>
      <Person/>
      <section id="Contact"><Contact/></section>
    </>
  );
};

export default App;

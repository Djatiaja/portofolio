import Navbar from "./navbar/navbar";
import style from './App.module.css';
import Hero from "./hero/Hero";
import Skill from "./Skill/Skill";
import Footer from "./footer/footer";
import Project from "./project/project";
import Contact from "./contact/contact";
function App(){
  return (
    <div className={style.App}>
      <Navbar/>
      <Hero/>
      <Skill/> 
      <Project/>
      <Contact /> 
      <Footer/>
    </div>
    );
}

export default App;
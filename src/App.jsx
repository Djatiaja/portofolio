import Navbar from "./navbar/navbar";
import style from './App.module.css';
import Hero from "./hero/Hero";
import Skill from "./Skill/Skill";
import Footer from "./footer/footer";
import Project from "./project/project";
function App(){
  return (
    <div className={style.App}>
      <Navbar/>
      <Hero/>
      <Skill/> 
      <Project/>
      <Footer /> 
    </div>
    );
}

export default App;
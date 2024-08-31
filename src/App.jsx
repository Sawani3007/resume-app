import './App.css';
import Homepage from './components/Homepage/Homepage';
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Project/Projects";
import TechStack from './components/TechStack/TechStack';

function App() {
  //1.Navbar
  //2.Homepage
  //3.Tech Stack
  //4.Experience
  //5.Projects
  return(
    <div className="app">
      <Navbar></Navbar>
      <Homepage></Homepage>
      <TechStack></TechStack>
      <Projects></Projects>
    </div>
  )
}

export default App;

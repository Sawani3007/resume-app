import C from "../../assets/C.png";
import Cpp from "../../assets/Cpp.png";
import excel from "../../assets/excel.png";
import java from "../../assets/java.png";
import javascript from "../../assets/javascript.png";
import python from "../../assets/python.png";
import r_programming from "../../assets/r_programming.png";
import './TechStack.css';
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";

function TechStack() {
  const techstackRowOne = [
    {
      iconName: "C",
      iconImage: C,
      iconAltProperty: "cImage",
    },
    {
      iconName: "javaScript",
      iconImage: javascript,
      iconAltProperty: "jsImage",
    },
    {
      iconName: "Cpp",
      iconImage: Cpp,
      iconAltProperty: "cImage",
    },
    {
      iconName: "java",
      iconImage: java,
      iconAltProperty: "jsImage",
    },
    {
      iconName: "excel",
      iconImage: excel,
      iconAltProperty: "cImage",
    },
    {
      iconName: "r_programming",
      iconImage: r_programming,
      iconAltProperty: "cImage",
    },
    {
      iconName: "python",
      iconImage: python,
      iconAltProperty: "jsImage",
    },
  ];

  
  return (
    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_icon_container">
        {techstackRowOne.map(function (element, index) {
          return (
            <TechStackIconContainer
              key={index}
              title={element.iconName}
              altProperty={element.iconAltProperty}
              image={element.iconImage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;

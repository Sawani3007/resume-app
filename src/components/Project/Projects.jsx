import ProjectBox from "./ProjectBox/ProjectBox";
import "./project.css";

export default function Projects(){
  const projectData = [
    {
      image: 'https://i.pinimg.com/564x/52/34/f5/5234f55d05cae72d4abbf557a0d5a46a.jpg',
      title:'Webpage of Resume',
      sentence: [
        "Real-time visibility into resume."
      ],
      link: "https://drive.google.com/drive/folders/1uUD4_iBPVOb0rabfhn3De6sFwK3hPg3w",
      Outcome : 'React , Html , Css , Javascript'
    },
    {
      image: 'https://i.pinimg.com/564x/0b/da/e7/0bdae7e1eaa843a589e87af6be4d000d.jpg',
      title:'Coffee Sales Dashboard',
      sentence: [
        "Real-time visibility into sales performance, including total sales, revenue trends, and sales by product categories.",
        "Track key performance indicators such as average transaction value, sales per customer, total footfall, and sales growth over time to evaluate the effectiveness of sales strategies."
      ],
      link: "https://drive.google.com/drive/folders/1uUD4_iBPVOb0rabfhn3De6sFwK3hPg3w",
      Outcome : 'Excel , Data Analysis , Data Mining'
    },
    {
      image: 'https://i.pinimg.com/564x/7b/09/b4/7b09b44cc6c5fab80670e7b98ec52835.jpg',
      title: ' Store Sales DASHBOARD',
      sentence: [
        " Real-time visibility into sales performance, including total sales, revenue trends, and sales by product categories , channels.",
        "Analyze sales data to identify top-selling products, popular menu items, and trends in customer preferences."
      ],
      link: "https://drive.google.com/drive/folders/1uUD4_iBPVOb0rabfhn3De6sFwK3hPg3w",
      Outcome : 'Excel , Data Analysis , Data Mining'
    },
    {
      image: 'https://i.pinimg.com/736x/0e/4f/6d/0e4f6d8d6e361d98761c6873442a7cef.jpg',
      title: ' Pizza Sales Analysis',
      sentence: [
        " Real-time visibility into sales performance, including total sales, revenue trends, and sales by product categories ",
        "nalyze sales data to identify top-selling products, popular menu items, and trends in customer preferences."
      ],
      link: "https://drive.google.com/drive/folders/1uUD4_iBPVOb0rabfhn3De6sFwK3hPg3w",
      Outcome : 'MySQL , Data Analysis , Data Mining'
    }
  ];
return(
  <div>
    <p className="project_title">Projects</p>
    <div className="projects_box_container">
      {projectData.map((project,index)=> (
        <ProjectBox 
          key={project.title}
          title={project.title}
          image={project.image}
          sentences={project.sentence}
          link={project.link}
/>
      ))}
    </div>
  </div>
)

}
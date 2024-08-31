import { motion } from 'framer-motion';
import linkedon from '../../assets/linkedin.png';
import './Homepage.css';
const buttonVariant = {
  hover:{
    scale:[1,1.2,1,1.2,1,1.2,1,1.2],
    textShadow: "0px 4px 8px rgb(255,255,255)",
    boxShadow: "0px 8px 8px rgb(255,255,255)"
  }
}
function Homepage(){

  return(
    <div className='homepage_container'
     
    >
      <div className='homepage_left'>
        <p className="homepage_left_h1">
          <span className="red_colorr">Hi,</span> My Name is 
        </p>
        <p className="homepage_left_h2">
        Sawani Saxena
        </p>
        <p className="homepage_left_h3">
        Student at <span className = "red_color"> Lovely Proffessional University</span>
        </p>
        <p className="homepage_left_description">
        A dedicated programmer committed to crafting impactful user experiences, leveraging keen observational
skills and a meticulous eye for detail to analyze data that drives insightful decision-making and optimization.
Passionate about data science and problem-solving, I strive to create intuitive and efficient data models and
visualizations that uncover meaningful patterns and trends, ensuring high standards of accuracy and usability.

        </p>
        <br></br>
      <div>
        <a href="https://www.linkedin.com/in/sawani-saxena3007/">
        <img src={linkedon}
         alt="LinkedonImg" 
         className='homepage_logo'/>
        </a>
<br></br>
        <a href="mailto:sawanisaxena@gmail.com">
          <motion.button 
          className='Button'
          variants={buttonVariant}
          whileHover="hover"
          >Get in touch</motion.button>
        </a>
        
      </div>

      </div>
      <motion.div className='homepage_right'
initial={{opacity: 0}}
animate={{opacity:1}}
transition={{delay:0.2 , duration: 2.5}}
      >
      <img src='https://edvancer.in/wp-content/uploads/2022/10/What-is-data-analytics-How-it-can-help-your-career.jpg'
      alt="image not found"/>
      </motion.div>
    </div>
  )
}
export default Homepage;
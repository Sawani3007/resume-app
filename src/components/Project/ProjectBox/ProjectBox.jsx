import { motion } from 'framer-motion';
import './ProjectBox.css';



export default function ProjectBox(
  {
    image,title,sentences,link
  }){
  return (
    <div className="project_box_container">
    <div className="project_box_image_container">
    <img src={image} alt={title} />
    </div>
    <div className="project_box_description_container">
    <div className="project_box_title">{title}</div>
    <div className="project_box_sentences_container">
      <br></br>
    {sentences.map((sentence,index)=> (
      <p key={sentence}>{sentence}</p>
    ))}
    </div>
    <br></br>
    <p className="project_box_link">
      <span>Link: </span>
      <motion.div
      whileHover={{scale:1.04}}
      transition={{type:'spring',stiffness:800}}
      >
      <a href={link} target="_blank">
        {link}
      </a>
      <br></br>
      </motion.div>
    </p>
    <br /> 
    </div>
    </div>
  )
}

import './TechStackIconContainer.css';

import { motion } from 'framer-motion';


export default function TechStackIconContainer(props){

  return(
    <div className="techstack_icons"
    >
    <img src={props.image} alt={props.altProperty} />
    <br></br>
    <p>{props.title}</p>
  </div>
  )
}

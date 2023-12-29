import React from "react";
import './Intro.css'
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import ThumbUp from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import GlassEmoji from '../../img/glassesimoji.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Intro = () => {
  const transition = {duration : 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white': ''}}>Hy! It's Me,</span>
          <span>Sachin Singh</span>
          <span>I'm an Entry level Front End Developer, Learning Front End specially React. I am commited to do everything it takes to prove my worth in the field.</span>
        </div>
        <button className="i-button button">Hire Me!</button>
        <div className="i-icon">
          <a href="https://github.com/Itssachinsingh">
          <img  src={Github} alt="" />
          </a>
          <img  src={LinkedIn} alt="" />
          <img  src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
      <a href="https://github.com/Itssachinsingh">
          <img  src={Vector1} alt="" />
          </a>
          <img  src={Vector2} alt="" />
          <img  src={Boy} alt="" />
          <motion.img
            initial={{left:'-36%'}}
            whileInView= {{left: '-24%'}}
            transition={transition}
          src={GlassEmoji} alt="" />

        <motion.div 
            initial= {{top: "-4%", left: "74%"}}
            whileInView={{left: "68%"}}
            transition={transition} 
            
        style={{top:'-4%', left:'68%'}}
        className="floating-div">
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>

        </motion.div>

        <motion.div 
          initial ={{left:'9rem', top: '18rem'}}
          whileInView={{left: '0rem'}}
          transition={transition}

        style={{top:'18rem', left:'0rem'}}
        className="floating-div">
          <FloatingDiv image={ThumbUp} txt1='Best Design' txt2='Award' />
        </motion.div>
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{background: "#C1F5FF", top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
        
       </div> 

    </div>
  )
}
export default Intro;
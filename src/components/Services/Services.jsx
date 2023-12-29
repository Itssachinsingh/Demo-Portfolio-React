import React from "react";
import './Services.css'
import Cards from '../Cards/Cards'
  
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './Questions.txt'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Serives = () => {
    const transition = {duration : 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id="Services">
            {/* Left Side */}
            <div className="awesome">
                <span style={{color:darkMode? 'white':''}}>My Awesome</span>
                <span>Serviecs</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Dolor voluptatibus enim dolorem incidunt tempore.</span>
                    <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* Right Side */}
            <div className="cards">
                <motion.div 
                whileInView={{left: '23rem'}}
                initial={{left:'35rem'}}
                transition={transition}

                style={{ left: '20rem' }}>
                    <Cards
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, PhotoShop, Adobe, Adobe xd"}
                    />
                </motion.div>
                {/* second card */}
                <motion.div 
                   whileInView={{left: '4rem'}}
                   initial={{left:'35rem'}}
                   transition={transition}
                style={{ top: "12rem", left: "4rem" }}>
                    <Cards
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"HTML, CSS, JavaScript, React, Angular,PHP, Node Js "}
                    />
                </motion.div>
                 {/* third card */}
                 <motion.div 
                      whileInView={{left: '23rem'}}
                      initial={{left:'25%'}}
                      transition={transition}
                 style={{ top: "19rem", left: "23rem" }}>
                    <Cards
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, sit!"}
                        
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background: ""}}></div>
            </div>

        </div>
    )
}
export default Serives;
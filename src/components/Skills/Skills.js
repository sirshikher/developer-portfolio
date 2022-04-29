import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";
import {connect} from 'react-redux';

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsImage } from '../../utils/skillsImage'

const Skills = (props) => {
const {skills} = props;
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div id ="skills"className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skills.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        skills: state.skills
    }
}
export default connect(mapStateToProps)(Skills);

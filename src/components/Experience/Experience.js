import React,{useContext} from 'react';
import { connect } from 'react-redux';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';


import ExperienceCard from './ExperienceCard';

const Experience = (props) => {

    const {experience} = props;
    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 <div className="experience-image">
                     <img src={theme.expimg} alt="" />
                 </div>
                 <div className="experience-description">
                    <h1 style={{color:theme.primary}}>Experience</h1>
                    {experience.map(exp =>(
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}/>
                    ))}
                 </div>
             </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        experience: state.experience
    }
}
export default connect(mapStateToProps)(Experience);

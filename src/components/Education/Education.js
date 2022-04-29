import React, { useContext } from 'react';
import {connect} from 'react-redux';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

const Education = (props) => {

    const {education} = props;
   const  {id,startyear,endyear,course,institution} = education;

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={id}
                            id={id}
                            institution={institution}
                            course={course}
                            startYear={startyear}
                            endYear={endyear}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    const {education} = state;
    return {
        education
    }
}
export default connect(mapStateToProps)(Education);

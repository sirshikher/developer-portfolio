import React, { useContext } from 'react';
import { connect } from 'react-redux';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';



const About = (props) => {
    const { theme } = useContext(ThemeContext);
    const {about} = props;
    const {title, description1,description2,image} = about;
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{title}</h2>
                    <p style={{color:theme.tertiary80}}>{description1}<br/><br/>{description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={image === 2 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
    about: state.about
    }
}

export default connect(mapStateToProps)(About);

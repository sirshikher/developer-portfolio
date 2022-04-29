import React, { useContext} from 'react';
import { connect } from 'react-redux';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';

const Achievement = (props) => {
    const {achivement} = props;
const {bio,achievements} = achivement;
    const { theme } = useContext(ThemeContext);
    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{backgroundColor: theme.secondary}}>
                <div className="achievement-body">
                    <h1 style={{color: theme.primary}}>Achievements</h1>
                    <h4 style={{color:theme.tertiary}}>{bio}</h4>
                </div>
                <div className="achievement-cards">
                    {achievements.map(achieve => ( 
                        <AchievementCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        field={achieve.field}
                        image={achieve.image}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        achivement: state.achivement
    }
}
export default connect(mapStateToProps)(Achievement);


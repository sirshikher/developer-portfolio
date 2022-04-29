import { configureStore } from '@reduxjs/toolkit'
import {aboutReducer} from './components/About/AboutReducer'
import {achivementReducer} from './components/Achievement/AchieveReducer'
import {educationReducer} from './components/Education/EducationReducer'
import {experienceReducer} from './components/Experience/ExperienceReducer'
import {blogReducer} from './components/Blog/BlogReducer'
import {skillsReducer} from './components/Skills/SkilsReducer'
import {landingReducer} from './components/Landing/LandingReducer'

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    achivement: achivementReducer,
    education: educationReducer,
    experience:experienceReducer,
    blog: blogReducer,
    skills: skillsReducer,
    landing: landingReducer,
  }
})
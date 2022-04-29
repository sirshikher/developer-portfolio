import { skillsData } from '../../data/skillsData';

export const skillsReducer = function (state=skillsData, action) {
    switch (action.type) {
        case "SKILLS":
        return {
            ...state,
            skills: action.payload
      }
      default:
        return state;
    }
  };
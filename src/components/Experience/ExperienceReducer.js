import { experienceData } from '../../data/experienceData';

export const experienceReducer = function (state=experienceData, action) {
    switch (action.type) {
        case "EXPERIENCE":
        return {
            ...state,
            experience: action.payload
      }
      default:
        return state;
    }
  };
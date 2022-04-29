import { educationData } from '../../data/educationData';

export const educationReducer = function (state=educationData, action) {
    switch (action.type) {
      case "ID":
        return {
            ...state,
            id : action.payload
      }
      case "INSITUTION":
        return {
            ...state,
            intitution: action.payload
        }
      case "COURSE":
        return {
            ...state,
            course: action.payload
        }
      case "STARTYEAR":
        return {
            ...state,
            startyear: action.payload
        }
      case "ENDYEAR":
        return {
            ...state,
            endyear: action.payload
        }     
      default:
        return state;
    }
  };
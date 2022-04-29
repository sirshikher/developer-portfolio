import { achievementData } from '../../data/achievementData';

export const achivementReducer = function (state=achievementData, action) {
    switch (action.type) {
      case "BIO":
        return {
            ...state,
            bio: action.payload
        }
        case "ACHIVEMENTS":
        return {
            ...state,
            achievements: action.payload
      }
      case "ACHIVEMENTID":
        return {
            ...state,
            achivementId: action.payload
      }
      case "ACHIVEMENTTITLE":
        return {
            ...state,
            achivementtile: action.payload
        }
      case "ACHIVEMENTDETAILS":
        return {
            ...state,
            achivementdetails: action.payload
        }
      case "ACHIVEMENTDATE":
        return {
            ...state,
            achivementdate: action.payload
        }
      case "ACHIVEMENTFIELD":
        return {
            ...state,
            achivementfield: action.payload
        }  
      case "ACHIVEMENTIMAGE":
        return {
            ...state,
            achivementimage: action.payload
        }     
      default:
        return state;
    }
  };
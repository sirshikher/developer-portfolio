import { headerData } from '../../data/headerData';

export const landingReducer = function (state=headerData, action) {
    switch (action.type) {
        case "NAME":
        return {
            ...state,
            name: action.payload
       } 
        case "TITLE":
            return {
                ...state,
                title: action.payload
        }
        case "DESCRIPTION":
            return {
                ...state,
                desciption: action.payload
        }
        case "IMAGE":
            return {
                ...state,
                image: action.payload
        }
        case "RESUME":
            return {
                ...state,
                resumepdf: action.payload
        }
      default:
        return state;
    }
  };
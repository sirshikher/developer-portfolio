import { aboutData } from '../../data/aboutData';

export const aboutReducer = function (state=aboutData, action) {
    switch (action.type) {
      case "TITLE":
        return {
            ...state,
            title: action.payload
        }
      case "DISCRIPTION1":
        return {
            ...state,
            description1: action.payload
        }
      case "DISCRIPTION2":
        return {
            ...state,
            description2: action.payload
        }
      case "IMAGE":
        return {
            ...state,
            image: action.payload
        }
      default:
        return state;
    }
  };
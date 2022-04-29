import { blogData } from '../../data/blogData';

export const blogReducer = function (state=blogData, action) {
    switch (action.type) {
        case "BLOG":
        return {
            ...state,
            blog: action.payload
      }
      default:
        return state;
    }
  };
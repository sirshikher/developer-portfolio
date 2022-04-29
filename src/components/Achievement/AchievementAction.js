export const aboutTitleAction = (payload) => {
    return {
        type: "bio",
        payload
    }
}
export const achievementsIdAction = (payload) => {
    return {
        type: "id",
        payload: payload.achievements
    }   
}
export const achievementsTitleAction = (payload) => {
    return {
        type: "title",
        payload: payload.achievements
    }    
}
export const achievementsDetailsAction = (payload) => {
    return {
        type: "details",
        payload: payload.achievements
    }    
}
export const achievementsDateAction = (payload) => {
    return {
        type: "date",
        payload: payload.achievements
    }    
}
export const achievementsFieldAction = (payload) => {
    return {
        type: "field",
        payload: payload.achievements
    }    
}
export const achievementsImageAction = (payload) => {
    return {
        type: "image",
        payload: payload.achievements
    }    
}
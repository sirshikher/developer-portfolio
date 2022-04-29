export const landingNameAction = (payload) => {
        return {
            type: "NAME",
            payload: payload.name
        }   
    }
export const landingTitleAction = (payload) => {
        return {
            type: "TITLE",
            payload: payload.title
        }   
}    
export const landingDescriptionAction = (payload) => {
    return {
        type: "DESCRIPTION",
        payload: payload.description
    }   
}    
export const landingImageAction = (payload) => {
    return {
        type: "IMAGE",
        payload: payload.image
    }   
}  
export const landingResumeAction = (payload) => {
    return {
        type: "RESUME",
        payload: payload.resumepdf
    }   
}  
export const EducationIdAction = (payload) => {
    return {
        type: "ID",
        payload: payload.id
    }   
}
export const EducationInstitutionAction = (payload) => {
    return {
        type: "INSITUTION",
        payload: payload.institute
    }    
}
export const EducationCourseAction = (payload) => {
    return {
        type: "COURSE",
        payload: payload.course
    }    
}
export const EducationStartYearAction = (payload) => {
    return {
        type: "STARTYEAR",
        payload: payload.startyear
    }    
}
export const EducationEndYearAction = (payload) => {
    return {
        type: "ENDYEAR",
        payload: payload.endyear
    }    
}
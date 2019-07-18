export function addTag(tagInput, studentId) {
return (dispatch)=>{
    dispatch({
        type:'ADD_TAG',
        payload: {studentId,tagInput}
    })
}
}


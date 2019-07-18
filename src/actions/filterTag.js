export function filterTag(tagInput) {

    return (dispatch, getState) => {

        const tagsArrs = getState().studentTags.studentTags
        const {students} = getState().studentData;
        const filteredStudentId = filterStudentId(tagInput, tagsArrs);
        const filteredStudentsByTag=filteredStudents(filteredStudentId, students);
        const filteredStuArrByTag =[]
       for(let i=0; i<filteredStudentsByTag.length; i++){
            filteredStuArrByTag.push(filteredStudentsByTag[i][0])
        }

        dispatch({
            type: 'FILTER_TAG',
            payload: {tagInput,  filteredStuArrByTag}
        });
    };
}

function filterStudentId(tagInput, tagsArrs) {

    if (tagInput === '') {
        return tagsArrs;
    }
    tagInput = tagInput.toUpperCase();

    const filteredStudentId = tagsArrs.filter(function (tagsArr) {
        return tagsArr.tagInput.toUpperCase().indexOf(tagInput) !== -1

    });

    return filteredStudentId;
}


function filteredStudents(filteredStudentId, students) {

    return filteredStudentId.map(studentTag => {
        const id = parseInt(studentTag.studentId);
        const filteredStudentsArrByTag = students.filter(function (student) {

            return student.id == id
        });
        return filteredStudentsArrByTag
    })

}

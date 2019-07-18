
export function filterName(filterInput) {
    return (dispatch,getState) => {
        const {students} = getState().studentData;
        const filteredStudentsByName={students:filter(filterInput, students)};

        dispatch({
            type: 'FILTER_STUDENTS',
            payload:{
                filterInput,
                filteredStudentsByName
            }
        });
    };
}

function filter(filterInput, students) {

    if(filterInput===''){
        return students;
    }
    filterInput = filterInput.toUpperCase();

    const newArray=students.filter(function (student) {
        return student.firstName.toUpperCase().indexOf(filterInput)!==-1
            || student.lastName.toUpperCase().indexOf(filterInput)!==-1
    });

    return newArray;
}

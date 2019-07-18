const INITIAL_STATE = {
    nameInput: '',
    students: []
};

const nameFilterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case "FILTER_STUDENTS":
            return {
                nameInput: action.filterInput,
                students: action.payload.filteredStudentsByName.students
            };
        case 'FILTER_TAG':
            return {
                nameInput: action.payload.tagInput,
                students: action.payload.filteredStuArrByTag
            };
        default:
            return state
    }
};


export default nameFilterReducer;

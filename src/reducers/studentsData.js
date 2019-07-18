const INITIAL_STATE = {
    students: []
};


const studentDataReducer =(state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'GET_INFO_SUCCESS' :
            return action.payload;
        default:
            return state;
    }
};

export default studentDataReducer;

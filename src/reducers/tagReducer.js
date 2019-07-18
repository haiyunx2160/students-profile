const initialState = {
    studentTags: [
        {
            studentId: 1,
            tagInput: 'aa'
        },
        {
            studentId: 2,
            tagInput: 'bb'
        },
        {
            studentId: 1,
            tagInput: 'cc'
        },
        {
            studentId: 5,
            tagInput: 'cc'
        },
        {
            studentId: 7,
            tagInput: 'cc'
        },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TAG':
            return {studentTags: [...state.studentTags, action.payload]};
        default:
            return state;
    }
}

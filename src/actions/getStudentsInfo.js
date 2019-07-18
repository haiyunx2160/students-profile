import axios from 'axios';



export function getStudentsInfo() {
    return function action(dispatch) {
        dispatch({type:'GET_STUDENTS_INFO'});

        const request =  axios.get('https://www.hatchways.io/api/assessment/students');
return request.then(
    response => dispatch(fetchInfoSuccess(response.data)),
    err => dispatch(fetchInfoError(err))
)


    }
}


export function fetchInfoSuccess(info) {
    return {
        type: 'GET_INFO_SUCCESS',
        payload: info
    };
}

export function fetchInfoError(error) {
    return {
        type: 'GET_INFO_FAILURE',
        payload: error
    };
}

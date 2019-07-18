import {combineReducers} from "redux";
import nameFilterReducer from './nameFilterReducer';
import studentTags from './tagReducer';

import studentDataReducer from './studentsData';


export default combineReducers({
    studentTags:studentTags,
    studentsFilterByName: nameFilterReducer,
    studentData:studentDataReducer
});

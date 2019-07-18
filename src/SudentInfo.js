import React from 'react';
import {connect} from "react-redux";
import {getStudentsInfo} from "./actions/getStudentsInfo";
import Search from "./Search";
import GradesPanel from "./GradesPanel";
import {FaPlus, FaMinus} from "react-icons/fa";


class StudentInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            grades: []
        }
    }

    componentDidMount() {
        this.props.getStudentsInfo();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.students !== prevProps.students) {
            this.setState({grades: this.getBtnNames()})

        }
    }

    renderStudent = () => {
        const hidden = {
            display: 'none'
        };

        const show = {
            display: 'block'
        };

        let studentsArray = this.props.nameInput===''? this.props.students : this.props.studentsFilterByName;

        if (this.state.grades.length !== 0) {
            return studentsArray.map((student, index) => {
                return (
                    <div key={student.id} className='container'>
                        <div className='row'>
                            <img src={student.pic} alt="student" className='col'/>
                            <div className=' col-6 student-info'>
                                <h1>{student.firstName} {student.lastName}</h1>
                                <p>Email: {student.email}</p>
                                <p>Company: {student.company}</p>
                                <p>Average: {this.getAverage(student).toFixed(2)}</p>
                                <div className="grades" id={student.id}
                                     style={this.state.grades[index].isOpen ? show : hidden}>
                                    <GradesPanel grades={student.grades} id={student.id}/>
                                </div>
                            </div>
                            <div className='col'>
                                <button id={'btn' + student.id}
                                        onClick={() => this.onClick(index)}
                                        className='btn btn-outline-info btn-sm'>
                                    {this.state.grades[index].isOpen ? <FaMinus/> : <FaPlus/>}
                                </button>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            })
        } else {
            return <div>Loading...</div>
        }


    };

    getAverage = (student) => {
        let sum = 0;
        let len = student.grades.length;
        for (let i = 0; i < len; i++) {
            sum += parseInt(student.grades[i])
        }
        return sum / len;
    };

    getBtnNames = () => {
        let btnArr = [];
        const length = this.props.students.length;
        const students = this.props.students;


        for (let i = 0; i < length; i++) {
            btnArr.push({'btnId': "btn" + students[i].id, isOpen: false})
        }
        return btnArr;
    };

    onClick(index) {
        let tmp = this.state.grades;
        tmp[index].isOpen = !tmp[index].isOpen;
        this.setState({grades: tmp});
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='search-bar'>
                    <Search/>
                    <hr/>
                </div>
                {this.renderStudent()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.studentData.students,
        studentsFilterByName: state.studentsFilterByName.students,
        nameInput:state.studentsFilterByName.nameInput
    }
};

export default connect(mapStateToProps, {getStudentsInfo})(StudentInfo);

import React from 'react';
import Tags from "./Tags";
import {connect} from "react-redux";
import {addTag} from './actions/addTag';


class GradesPanel extends React.Component {

    renderGrades = (grades) => {
        return grades.map(grade => {
            return <li>test{grades.indexOf(grade)}: {grade}</li>
        })
    };

    renderTags = (id, studentsTags) => {
        const arr = studentsTags.studentTags;

        return arr.map(item => {
            if (parseInt(this.props.id) === parseInt(item.studentId)) {
                return <Tags content={item.tagInput}/>
            }
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        e.persist();
        let tagInput = e.target[0].value;
        let studentId = e.target[0].name;
        this.props.addTag(tagInput, studentId);
        e.target[0].value='';
    };

    render() {
        const id = this.props.id;
        return (
            <div key={id}>
                <div>
                    <ul id={'ul' + id}>
                        {this.renderGrades(this.props.grades)}
                    </ul>
                </div>
                Tags: {this.renderTags(id, this.props.studentTags)}
                <form onSubmit={this.handleSubmit}>
                    <input id={id}
                           type="text"
                           name={id}
                           className='border-bottom tag-input'
                           placeholder='Add a New Tag'/>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {studentTags: state.studentTags};
};

export default connect(mapStateToProps, {addTag})(GradesPanel);

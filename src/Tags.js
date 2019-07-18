import React from 'react';
import {connect} from "react-redux";

class Tags extends React.Component {

    render() {
        return <label className='badge badge-secondary' style={{marginLeft:'2px'}}>{this.props.content}</label>
    }
}

export default connect(null)(Tags);

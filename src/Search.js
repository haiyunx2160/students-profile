import React from 'react';
import {connect} from "react-redux";
import {filterName} from "./actions/filterName";
import {filterTag} from "./actions/filterTag";


class Search extends React.Component {

    handleChange = (e) => {

        e.persist();
        this.props.filterName(e.target.form[0].value);
    };

    handleTagChange = (e) => {
        e.persist();
        this.props.filterTag(e.target.form[1].value);
    };

    render() {
        return (
            <div>
                <form>
                    <div className='form-group'>
                        <input type="text"
                               onChange={this.handleChange}
                               name='searchByName'
                               id='searchByName'
                               placeholder='Type in name to search'
                               className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <input type="text"
                               onChange={this.handleTagChange}
                               name='searchByTag'
                               id='searchByTag'
                               placeholder='Type in tag name to search'
                               className='form-control'/>
                    </div>
                </form>
            </div>
        )
    }
}



export default connect(null, {filterName, filterTag})(Search);

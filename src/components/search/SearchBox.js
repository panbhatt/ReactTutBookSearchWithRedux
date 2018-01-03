import React, { Component } from 'react';
import { ControlGroup, InputGroup, Button } from '@blueprintjs/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BookActions from '../../actions/BookActions';
import { PropTypes } from 'prop-types';


class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event) {
        event.preventDefault();
        this.setState({ 'searchText': event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Submit Search is called. ");
        this.props.actions.searchBooks(this.state.searchText) ;
    }

    render() {
        return (
            <div>
                <ControlGroup fill={true} vertical={false}>
                    <InputGroup placeholder="Enter Book Details" className="pt-intent-primary" onChange={this.handleTextChange} />
                    <Button iconName="filter" onClick={this.handleSubmit}>Search</Button>
                </ControlGroup>
            </div>
        );
    }
}

SearchBox.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(BookActions, dispatch)
    }
}

function mapStateToProps(state, ownProps) {
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);


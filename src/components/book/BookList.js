import React, { Component } from 'react';
import BookListComponent from './BookListComponent';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BookActions from '../../actions/BookActions';
import * as EditBookActions from '../../actions/EditBookActions';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.handleOnEdit = this.handleOnEdit.bind(this);
    }

    handleOnEdit(bookId) {
        console.log("Book Id received = " + bookId);
        this.props.actions.editBook(bookId) ;
    }



    render() {
        return (
            <BookListComponent books={this.props.books} onEdit={this.handleOnEdit}></BookListComponent>
        );
    }
}

BookList.propTypes = {
    books: PropTypes.array,
    actions : PropTypes.object
};

BookList.defaultProps = {
    books: [],
    actions : {}
};

function mapStateToProps(state, ownProps) {
    console.log("State = " + JSON.stringify(state));
    return {
        books: state.books.results
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(EditBookActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList); 
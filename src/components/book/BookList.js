import React, { Component } from 'react';
import {connect} from 'react-redux' ;
import BookListComponent from './BookListComponent' ;
import PropTypes from 'prop-types';

 class BookList extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
           <BookListComponent books={this.props.books}></BookListComponent>
        );
    }
}

BookList.propTypes = { 
    books: PropTypes.array 
} ;

BookList.defaultProps = { 
    books: []
} ;

function mapStateToProps(state,ownProps) {
    console.log("State = " + JSON.stringify(state)) ;
    return {
        books : state.books.list
    };
}

export default connect(mapStateToProps)(BookList); 
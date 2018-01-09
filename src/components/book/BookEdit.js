import React, { Component } from 'react';
import {
    Card, FormGroup, InputGroup, ButtonGroup,
    Button, Label
} from '@blueprintjs/core';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BookActions from '../../actions/BookActions';
import * as EditBookActions from '../../actions/EditBookActions';

 class BookEdit extends Component {

    constructor(props) {
        super(props);
        this.state= {  };
        this.handleUpdate = this.handleUpdate.bind(this);  
        this.handleTitleChange = this.handleTitleChange.bind(this);   
        this.handleCategoryChange=this.handleCategoryChange.bind(this); 
        this.handleAdd = this.handleAdd.bind(this); 
    }

    componentWillReceiveProps(nextProps) {
        console.log('Next props is being received by Book Edit.  ') ;
        console.log(nextProps) ;
        if(nextProps.editBook) {
            let book = nextProps.editBook.book; 
            this.setState(
                {
                    title :   book.title,
                    id : book.id,
                    category : book.category      
                }
            ) ;
        }
    }

    handleTitleChange(event) {
        event.preventDefault();
        let newState = Object.assign({}, this.state); 
        newState['title']=event.target.value ;
        this.setState(newState);
    }

    handleCategoryChange(event) {
        event.preventDefault();
        let newState = Object.assign({}, this.state); 
        newState['category']=event.target.value ;
        this.setState(newState);
    }

    handleUpdate(event) { 
            console.log('State = ' + JSON.stringify(this.state) ) ; 
            this.props.actions.updateBook(this.state) ;

    }

    handleAdd(event) { 
        let newBook = this.state; 
        delete newBook.id; 
        this.props.actions.addBook(this.state) ;

}


    render() {
        return (
            <div className="row">
                <Card interactive={true} elevation={Card.ELEVATION_TWO}>

                    <FormGroup
                        label="Book Details"
                        labelFor="text-input"
                        required={true}
                    >

                        <Label  text="Book Title"      >
                            <InputGroup placeholder="Book Title" className="pt-intent-primary" value={this.state.title} onChange={this.handleTitleChange} />
                        </Label>

                        <Label  text="Book Category"  >
                            <InputGroup placeholder="Book Category" className="pt-intent-primary" value={this.state.category} onChange={this.handleCategoryChange.bind(this)} />
                        </Label>

                        <br />
                        <ButtonGroup minimal={true} large={true} className="pt-button-group">
                            <Button className="pt-intent-primary" onClick={this.handleUpdate}>Update</Button>
                            <Button className="pt-intent-primary" onClick={this.handleAdd}>Add </Button>
                            <Button className="pt-intent-danger">Delete</Button>
                        </ButtonGroup>
                    </FormGroup>


                </Card>
            </div>
        );
    }
}

BookEdit.propTypes = {
    editBook: PropTypes.object,
    actions : PropTypes.object
};

BookEdit.defaultProps = {
    books: undefined,
    actions : {}
};

function mapStateToProps(state, ownProps) {
    console.log("State = " + JSON.stringify(state));
    return {
        editBook: state.editBook
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(EditBookActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit); 
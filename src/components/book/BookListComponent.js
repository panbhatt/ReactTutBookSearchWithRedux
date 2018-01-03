import React, { Component} from 'react';
import PropTypes from 'prop-types' ;
import { Card}  from '@blueprintjs/core' ;
import {  Button} from '@blueprintjs/core' ; 

export default class BookListComponent extends React.Component {

        constructor(props) {
            super(props); 
        }

        componentWillReceiveProps(nextProps) {
            console.log('Next props is being received. ') ;
            console.log(nextProps) ;
            
            
        }

        render() {
            return (
                <div>
                    <br/>
                    <Card interactive={true} elevation={Card.ELEVATION_TWO}>
                    <table>
                        <thead>
                            <tr className="box col-xs-12 col-md-12 col-lg-12">
                                <th style={{ width:'30px' }}>Id</th>
                                <th style={{ width:'200px' }}>Book Title</th>
                                <th  style={{ width:'250px' }}>Category</th>
                                <th  style={{ width:'150px' }}>Actions</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {this.props.books.map( book => {
                                return <tr key={book.id} className="box col-xs-12 col-md-12 col-lg-12">
                                    <td style={{ width:'30px', 'textAlign' : 'center' }}>{book.id}</td>
                                    <td style={{ width:'200px','textAlign' : 'center' }}>{book.title}</td>
                                    <td style={{ width:'250px', 'textAlign': 'center' }}>{book.category}</td>
                                    <td style={{ width:'150px' ,'textAlign' : 'center'}}> 
                                    <Button className="pt-minimal" iconName="annotation" onClick={()=> {this.props.onEdit(book.id)}} ></Button>
                                    </td>
                                </tr>    
                            })}
                        </tbody>
                    </table>
                    </Card>
                </div>
            );
        }

}

BookListComponent.propTypes = {
    books : PropTypes.array.isRequired,
    actions : PropTypes.object
};

BookListComponent.defaultProps = {
    books : [] ,
    actions : {}
};
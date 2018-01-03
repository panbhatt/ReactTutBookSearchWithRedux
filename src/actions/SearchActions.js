

import Constants from './actionTypes';

// Function to Search the books by Title. 
export function searchBooks(searchText) {


    return function (dispatch) {

        return BookApi.getAllBooks().then(
            booksResponse => {
                console.log('coming here with the books' + JSON.stringify(booksResponse.books)) ;
                dispatch(loadBooksSuccess(booksResponse.books));
            }
        ).catch(error => {
            dispatch(loadBooksFailure(error));
        });
    }; 

}
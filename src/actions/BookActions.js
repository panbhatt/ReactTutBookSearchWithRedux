import BookApi from '../api/BookApi';
import Constants from './actionTypes';

// Function to load the Books. 
export function loadBooks() {


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

// Function to return an action creation object. 
export function loadBooksSuccess(booksData){

    return {
        type : Constants.LOAD_BOOKS_SUCCESS,
        books : booksData
    }; 
}

// Function to return an action creation object. 
export function loadBooksFailure(error){
    
        return {
            type : Constants.LOAD_BOOKS_FAILURE,
            error
        }; 
    }

export function searchBooks(searchText) {
    return function(dispatch) {
        // May be here we can specify the API call on the server to do something. get the data and. 
        dispatch(searchBookFunction(searchText)) ;
    }
}  

export function searchBookFunction(searchText) {
    return { 
        type: Constants.SEARCH_BOOK_SUCCESS,
        searchText 
    };

}
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
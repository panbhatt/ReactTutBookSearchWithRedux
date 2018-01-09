

import Types from './actionTypes';


export function editBook(bookId) {
    console.log("GOT BOOKID" + bookId) ;
    return function (dispatch,getState) {
        // May be here we can specify the API call on the server to do something. get the data and.
        console.log("Stated = " + JSON.stringify(getState()));
        let book = getState().books.list.filter((book) => book.id == bookId) ;
        dispatch({
            type: Types.EDIT_BOOK,
            book : book != undefined && book.length > 0 ? book[0] : undefined
        });
    };
}  


export function updateBook(bookData) {
    console.log("In action updateBook with date = " + bookData ) ;
    return function (dispatch,getState) {
        // May be here we can specify the API call on the server to do something. get the data and.
        console.log("Stated = " + JSON.stringify(getState()));
        dispatch({
            type: Types.UPDATE_BOOK,
            updatedBook : bookData 
        });
    };
}  


export function addBook(bookData) {
    console.log("In action AddBook with date = " + bookData ) ;
    return function (dispatch,getState) {
        // May be here we can specify the API call on the server to do something. get the data and.
        console.log("Stated = " + JSON.stringify(getState()));
        dispatch({
            type: Types.ADD_BOOK,
            book : bookData 
        });
    };
} 
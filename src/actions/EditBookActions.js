

import Types from './actionTypes';


export function editBook(bookId) {
    console.log("GOT BOOKID" + bookId) ;
    return function (dispatch,getState) {
        // May be here we can specify the API call on the server to do something. get the data and.
        console.log("Stated = " + JSON.stringify(getState()));
        var book = getState().books.list.filter((book) => book.id == bookId) ;
        dispatch({
            type: Types.EDIT_BOOK,
            book : book != undefined && book.length > 0 ? book[0] : undefined
        });
    };
}  
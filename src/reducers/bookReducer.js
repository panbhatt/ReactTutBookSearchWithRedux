import types from '../actions/actionTypes';
import InitialState from './initialState';
import { List } from 'immutable';


export default function BookReducer(state = InitialState.books, action) {

    let obj = null, books, results,newBooks, newBook;
    var maxId = 0 ; 
    switch (action.type) {
        case types.LOAD_BOOKS_SUCCESS:
            console.log("REDUCER for BOOK Success is being called. " + JSON.stringify(action.books));
            action.books.forEach((book) => maxId = book.id > maxId ? book.id : maxId ) ;
            console.log("MAX ID = "+ maxId) ;
            obj = Object.assign({}, state, { list: action.books, results: action.books });
            console.log("RETURING THIS SHIT " + JSON.stringify(obj));
            return obj;

        case types.SEARCH_BOOK_SUCCESS:

            console.log("Coming in reducer for Search Book . ");
            books = state.list;
            results = state.list.filter((book) => book.title.toLowerCase().includes(action.searchText.toLowerCase()));
            obj = Object.assign({}, state, { results: results });
            return obj;

        case types.UPDATE_BOOK:
            console.log("Coming in UPDATE BOOK  with data = " + JSON.stringify(action));
            books = state.list;
            newBooks = books.map((book) => {
                if (book.id == action.updatedBook.id) {
                    book.title = action.updatedBook.title;
                    book.category = action.updatedBook.category;
                }
                return book;
            });
            obj = Object.assign({}, state, { list: newBooks, results: newBooks });
            return obj;

        case types.ADD_BOOK:
            console.log("COMING IN ADD BOOK REDUCER FUCNTION ");
            books = List(state.list);
            let maxBookId  =0;
            books.forEach((book) => maxBookId = book.id > maxBookId ? book.id : maxBookId ) ;
            newBook = action.book; 
            console.log("MAX id = "+ maxBookId) ;
            newBook.id = ++maxBookId; 
            newBooks = books.push(newBook).toArray()
            obj = Object.assign({}, state, { list: newBooks, results: newBooks });
            return obj;

        default:
            return state;
    }


}
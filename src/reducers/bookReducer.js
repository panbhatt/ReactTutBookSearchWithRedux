import types from '../actions/actionTypes';
import InitialState from './initialState';
import { List } from 'immutable';

var maxBookId = 100;
export default function BookReducer(state = InitialState.books, action) {

    let obj = null, books, results, newBooks, newBook;

    switch (action.type) {
        case types.LOAD_BOOKS_SUCCESS:
            console.log("REDUCER for BOOK Success is being called. " + JSON.stringify(action.books));
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
            console.log("COMING IN ADD BOOK REDUCER FUCNTION " + JSON.stringify(state.list));
            books = List(state.list);
            newBook = action.book;
            console.log("MAX id = " + maxBookId);
            newBook.id = ++maxBookId;
            newBooks = books.push(newBook).toArray();
            console.log("New Array = " + JSON.stringify(newBooks));
            obj = Object.assign({}, state, { list: newBooks, results: newBooks });
            return obj;

        case types.DEL_BOOK:
            console.log("COMING IN DEL BOOK REDUCER FUCNTION " + JSON.stringify(state.list));
            books = state.list.filter(book => book.id != action.bookId ) ;
            console.log("New Array = " + JSON.stringify(books));
            obj = Object.assign({}, state, { list: books, results: books });
            return obj;

        default:
            return state;
    }


}
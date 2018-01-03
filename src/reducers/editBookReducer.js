import types from '../actions/actionTypes';
import InitialState from './initialState';


export default function EditBookReducer(state = {}, action) {

    switch (action.type) {
        case types.EDIT_BOOK:
            console.log("REDUCER for EDIT Book. " + action.bookId);
            var book = action.book; 
            console.log("Book = " + JSON.stringify(book)) ;
            var obj = Object.assign({}, state, {book });
            console.log("RETURING THIS SHIT " + JSON.stringify(obj));
            return obj;

        default:
            return state;
    }


}
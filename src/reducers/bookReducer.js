import types from '../actions/actionTypes'; 
import InitialState from './initialState';


export default function BookReducer(state = InitialState.books, action) {

    switch(action.type) {
        case types.LOAD_BOOKS_SUCCESS :
            console.log("REDUCER for BOOK Success is being called. " + JSON.stringify(action.books)); 
            var obj = Object.assign({}, state, { list : action.books}) ;
            console.log("RETURING THIS SHIT " + JSON.stringify(obj)) ;
            return obj;
        default : 
            return state ; 
    }


}
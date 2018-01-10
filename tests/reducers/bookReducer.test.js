import data from './../../tools/assets/data';
import Constants from './../../src/actions/actionTypes';

import  BookReducer  from './../../src/reducers/bookReducer';


describe('Testing Book Reducer', () => {

    it('Search Book Test Cases', () => {
        let books = data.books; 
        let state =  { 
            list : books
        }
        let action =  { 
            type: Constants.SEARCH_BOOK_SUCCESS,
            searchText  : 'harry'
        };
        console.log(JSON.stringify(books)) ;

        let newState = BookReducer(state,action) ;
        expect(newState.results.length).toEqual(1);
    })


});
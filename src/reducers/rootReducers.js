import { combineReducers} from 'redux'; 
import BookReducer from './bookReducer'; 
import EditBookReducer from './editBookReducer'; 

const rootReducer = combineReducers(
    {
        books : BookReducer ,
        editBook : EditBookReducer
    }
); 

export default rootReducer; 
import { combineReducers} from 'redux'; 
import BookReducer from './bookReducer'; 

const rootReducer = combineReducers(
    {
        books : BookReducer 
    }
); 

export default rootReducer; 
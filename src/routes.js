import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App' ;

import HomePage from './components/home/HomePage';
import BookEditPage from './components/book/BookEdit';
import BookListPage from './components/book/BookList'; 


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/book/id" component={BookEditPage}/>
        <Route path="/book" component={BookListPage}/>
    </Route>    
) ;
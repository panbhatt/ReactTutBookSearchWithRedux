import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App' ;

import HomePage from './components/home/HomePage';
import HomePage from './components/book/BookEditPage';


export defaut (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/book/id" component={BookEditPage}/>
    </Route>    
) ;
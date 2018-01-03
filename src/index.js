/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import { loadBooks } from './actions/BookActions';
import App from './components/App';


const defaultState = {
  books: []
};


const store = configureStore();

// 1. Call dispatch on the store with an argument of this action that makes an API request
// 2. The loadCourses() action is invoked, which makes an API call, and dispatches the loadCoursesSuccess action
// 3. that action: store -> root reducer -> courses reducer
// 4. courses reducer handles that action, recieves course payload and return new state that has courses: courses payload
// 5. the CoursesPage component is connected to the store, so store's new state triggers the mapStateToProps function, which triggers the render function on that component
store.dispatch(loadBooks());


render(
  <Provider store={store}>
    <App />

  </Provider>,
  document.getElementById('app')
);
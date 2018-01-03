import React, { Component } from 'react';
import PropTypes from 'prop-types' ;
import Header from './common/Header'; 
import Footer from './common/Footer'; 
import MainPage from './common/Main'; 


class App extends Component {


    render() {
        return (
            <div>
                <Header/>
                <MainPage/>
                <Footer/>
            </div>    
        );
    }
}


export default App; 
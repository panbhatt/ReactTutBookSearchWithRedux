import React, { Component } from 'react';
import PropTypes from 'prop-types' ;
import Header from './common/Header'; 
import Footer from './common/Footer'; 
import { Hero } from 're-bulma' ;

class App extends Component {


    render() {
        return (
            <Hero color="isPrimary" size="isMedium">
                <Header/>
                <Footer/>
            </Hero>    


        );
    }
}

export default App; 
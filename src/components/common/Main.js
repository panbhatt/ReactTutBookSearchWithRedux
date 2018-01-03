import React, { Component } from 'react';

import SearchBox from '../search/SearchBox';
import BookList from '../book/BookList' ;

class MainPage extends Component {

    render() {
        return (
            <div className="row">
                <hr/>
                <div className="col-md-12 ">
                    <div className="box col-md-6">
                        <SearchBox />
                    </div>
                    <div className="box col-md-12">
                        <BookList books={[]}/>
                    </div>
                </div>
            </div>
        );
    }


}

export default MainPage; 
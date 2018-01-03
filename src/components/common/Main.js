import React, { Component } from 'react';

import SearchBox from '../search/SearchBox';
import BookList from '../book/BookList';
import BookEdit from '../book/BookEdit';

class MainPage extends Component {

    render() {
        return (
            <div>
                <hr />
                <div className="col-md-12 ">
                    <div className=" col-md-6">
                        <SearchBox />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <BookList books={[]} />
                        </div>
                        <div className="row  col-md-offset-7 col-md-5" style={{'marginTop' : "-184px"}}>
                            <BookEdit editbook={undefined} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default MainPage; 
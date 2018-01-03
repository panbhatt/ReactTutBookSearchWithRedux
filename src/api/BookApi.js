class BookApi {

    static getAllBooks() {
        return fetch("/api/v1/books").then(response => {
                return response.json();
        }).catch(error=> { return error ; } ); 
    }



}

export default BookApi; 
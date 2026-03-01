/**
 * BookList.jsx
 * 
 * a component made up of individual Book components
 */

import Book from './Book';

const BookList = ({books, deleteBook, updateBook}) => {
    //console.log("This is:", deleteBook);
    return (
        <div className="bookList">
            {books.map((book, index) => (
                <Book key={index} 
                      books={book}
                      deleteBook={deleteBook}
                      updateBook={updateBook}
                />
            ))}
        </div>
    )
}

export default BookList;
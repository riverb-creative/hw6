import { useEffect, useState } from 'react'

const UpdateBook = () => {
    const [bookId, setBookId] = useState("");
    const [books, setBooks] = useState([]);
    const [editBook, setEditBook] = useState(false);
    const [updateBookTitle, setUpdateBookTitle] = useState("");
    const [updateBookAuthor, setUpdateBookAuthor] = useState("");
    const [updateBookGenre, setUpdateBookGenre] = useState([]);
    const [updateBookDate, setUpdateBookDate] = useState("");
    const [updateBookAvgStar, setUpdateBookAvgStar] = useState("");
    const [updateEbookOption, setUpdateEbookOption] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState("");
    const [updatedBookData, setUpdatedBookData] = useState({});

     const handleRadioChange = (event) => {
        setUpdateEbookOption(event.target.value === 'true');
    }

       /* const handleSaveClick = () => {
        books.title = updateBookTitle;
        books.author = updateBookAuthor;
        books.genre = updateBookGenre;
        books.releaseDate = updateBookDate;
        books.aveStars = updateBookAvgStar;
        books.eBook = updateEbookOption;
        setEditBook(false);
    }
    */

        useEffect (() => {
        fetch("http://localhost:3000/books")
        .then(response => response.json())
        .then(data => setBooks( data ))
    }, []);

    const handleEdit = (bookId) => {
        setEditBook(true);
        setBookId(bookId);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedBook = {
        title: updateBookTitle,
        author: updateBookAuthor,
        genre: updateBookGenre.split(", "),
        releaseDate: updateBookDate,
        aveStars: updateBookAvgStar,
        eBook: updateEbookOption,
        }
        
        fetch("http://localhost:3000/books/" + bookId, {
            method: "PUT",            
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBook)

    })
        .then(response => response.json())
        .then((data) => {
            setUpdateSuccess(data.message);
            setUpdatedBookData(data.bookUpdated)
            console.log(data.bookUpdated);
            console.log(data);
        })
    }

    return (
        <>
           <form>
           
                {editBook? ( 
                   <> 
                    <p>Book Title:</p>
                    <input type="text" size="50" value={updateBookTitle}
                        onChange={(event) => setUpdateBookTitle(event.target.value)} 
                    />
                    <br />
                    <p>Book Author:</p>
                    <input type="text" size="50" value={updateBookAuthor}
                        onChange={(event) => setUpdateBookAuthor(event.target.value)} 
                    />
                    <br />
                    <p>Book Genre(s):</p>
                    <input type="text" size="50" value={updateBookGenre}
                        onChange={(event) => setUpdateBookGenre(event.target.value)} 
                    />
                    <br />
                    <p>Book Release Date:</p>
                    <input type="date" size="50" value={updateBookDate}
                        onChange={(event) => setUpdateBookDate(event.target.value)} 
                    />
                    <br />
                    <p>Book Average (0-5):</p>
                    <input type="number" step="0.1" min="0" max="5" size="90" 
                        value={updateBookAvgStar}
                        onChange={(event) => setUpdateBookAvgStar(event.target.value)} 
                    />
                    <br />
                    <p>Is this book available as an eBook?:</p>
                       <input type="radio" id="yesEbook" name="eBookOption" value="true" 
                            checked={updateEbookOption === true}
                            onChange={handleRadioChange}
                        />
                            <label for="yesEbook">Yes</label>
                        <br/>
                        <input type="radio" id="noEbook" name="eBookOption" value="false"
                            checked={updateEbookOption === false}
                            onChange={handleRadioChange}
                        />
                            <label for="noEbook">No</label>
                        <br />
                        <br />
                        
                    <button onClick={handleSubmit}>Save Changes</button>
                    <br />
                    </>
                ) : ( 
               <> 
               {books.map((book, index) => (
                <>
                 <header>
                    <h3 key={book.index}>{book.title}</h3>
                    <h4 key={book.index}>{book.author}</h4>
                </header>
            <div className="bookDetails" key={index}>
                <p key={book.index}>Released: {book.releaseDate}</p>
                <p key={book.index}>Rating: {book.aveStars}</p>
                <ul class="genreList">
                   {book.genre.map((genre, index) => (
                    <li key={index}>{genre}</li>
                   ))}  
                </ul>
                <br />
                {
                    book.eBook ? (
                      <img src="/image/ebook.png" alt="available as an eBook" /> 
                    ) : (
                        <p>no eBook available</p>
                    )
                }
                <br />
            </div>
            <input onClick = {() => handleEdit(book._id)} type='button' id="btnSubmit" value="Edit Book" />
                </>
               ))}  
        </>
        )}
        
        </form>
        </>
    )
}

export default UpdateBook
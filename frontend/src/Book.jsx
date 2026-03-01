/**
 * Book.jsx
 *  a component describing an individual book object
 */

import { useState } from "react";

const Book = ({books, deleteBook, updateBook}) => {

    const [editBook, setEditBook] = useState(false);
    const [updateBookTitle, setUpdateBookTitle] = useState(books.title);
    const [updateBookAuthor, setUpdateBookAuthor] = useState(books.author);
    const [updateBookGenre, setUpdateBookGenre] = useState(books.genre);
    const [updateBookDate, setUpdateBookDate] = useState(books.releaseDate);
    const [updateBookAvgStar, setUpdateBookAvgStar] = useState(books.aveStars);
    const [updateEbookOption, setUpdateEbookOption] = useState(false);

    const handleRadioChange = (event) => {
        setUpdateEbookOption(event.target.value === 'true');
    }

        const handleSaveClick = () => {
        books.title = updateBookTitle;
        books.author = updateBookAuthor;
        books.genre = updateBookGenre;
        books.releaseDate = updateBookDate;
        books.aveStars = updateBookAvgStar;
        books.eBook = updateEbookOption;
        updateBook(books._id, books);
        setEditBook(false);
    }

    //console.log(updateBook);
    //console.log(deleteBook);
    

    return(
        <section className="book">
           
                {editBook? ( 
                   <> 
                    <p><strong>Editing <em>{books.title}</em> </strong></p>
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
                    <button onClick={handleSaveClick}>Save Changes</button>
                    <br />
                    </>
                ) : ( 
               <>   
                <header>
                    <h3>{books.title}</h3>
                    <h4>{books.author}</h4>
                </header>
                
                
              
            <div className="bookDetails">
                <p>Released: {books.releaseDate}</p>
                <p>Rating: {books.aveStars}</p>
                <ul class="genreList">
                   {books.genre.map((genre, index) => (
                    <li key={index}>{genre}</li>
                   ))}  
                </ul>
                <br />
                {
                    books.eBook ? (
                      <img src="/image/ebook.png" alt="available as an eBook" /> 
                    ) : (
                        <p>no eBook available</p>
                    )
                }
                <br />
            </div>
        
        <br />
        <br />
        <button onClick={() => setEditBook(true)}>Edit {books.title}</button>
        <br />
        <br />
        <button onClick={() => deleteBook(books._id)}>
            Delete {books.title}
        </button>
        </>
        )}
        </section>
    )
}

export default Book;
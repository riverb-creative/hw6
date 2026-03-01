/**
 * AddBookForm.jsx
 * 
 * a component that allows users to add a new book element
 */
import { useState } from 'react';
import './AddBookForm.css'

const AddBookForm = ({addBook}) => {
    const [theBookTitle, setTheBookTitle] = useState("");
    const [theBookAuthor, setTheBookAuthor] = useState("");
    const [theBookDate, setTheBookDate] = useState("");
    const [theBookAvgStar, setTheBookAvgStar] = useState("");
    const [theBookGenre, setTheBookGenre] = useState("");
    const [theBookEbookOption, setTheBookEbookOption] = useState(false);

    const handleRadioChange = (event) => {
        setTheBookEbookOption(event.target.value === 'true');
    }

    const submitBook = (event) => {
        event.preventDefault();

        const newBook = {
            id: 1,
            title: theBookTitle,
            author: theBookAuthor,
            releaseDate: theBookDate,
            aveStars: theBookAvgStar,
            genre: theBookGenre.split(", "),
            eBook: theBookEbookOption
        }
   
        addBook(newBook);

        setTheBookTitle("");
        setTheBookAuthor("");
        setTheBookDate("");
        setTheBookAvgStar("");
        setTheBookGenre("");
        setTheBookEbookOption(false);
    }

    return (
        <div>
            <h3>Add a Book</h3>
            <fieldset>
                <form onSubmit={submitBook}>
                    <label for="bookId">Book Id:</label>
                    <br />
                    <input type="text" id="bookId" name="bookId" size="50"
                        placeholder='Enter Book ID'
                    />
                    <br />
                    <br />
                    <label for="bookTitle">Book Title:</label>
                    <br />
                    <input type="text" id="bookTitle" name="bookTitle" size="50"
                        placeholder='Enter Book Title'
                        value={theBookTitle}
                        onChange={(event) => setTheBookTitle(event.target.value)}
                    />
                    <br />  
                    <br />
                    <label for="bookAuthor">Book Author:</label>
                    <br />
                    <input type="text" id="bookAuthor" name="bookAuthor" 
                        placeholder="Enter both first and last name" size="50"
                        value={theBookAuthor}
                        onChange={(event) => setTheBookAuthor(event.target.value)}
                    />
                    <br />
                    <br />
                     <label for="bookReleaseDate">Book Release Date:</label>
                     <br />
                    <input type="date" id="bookReleaseDate" name="bookReleaseDate" size="50"
                        value={theBookDate}
                        onChange={(event) => setTheBookDate(event.target.value)}
                    />
                    <br />
                    <br />
                    <label for="bookAvgStar">Book Rating:</label>
                    <br />
                    <input type="number" id="bookAvgStar" name="bookAvgStar"
                        step="0.1" min="0" max="5" size="90"
                        placeholder="Enter a book rating 0 to 5"
                        value={theBookAvgStar}
                        onChange={(event) => setTheBookAvgStar(event.target.value)}
                    />
                    <br />
                    <br />
                    <label for="bookGenre">Book Genre:</label>
                    <br />
                    <input type="text" id="bookGenre" name="bookGenre"
                            placeholder="Enter up to 3 genres (seperate with genres comma)"
                            size="50"
                            value={theBookGenre}
                            onChange={(event) => setTheBookGenre(event.target.value)}
                    />
                    <br />
                    <br />
                    <p>Is this book available as an eBook?:</p>
                        <input type="radio" id="yesEbook" name="eBookOption" value="true" 
                            checked={theBookEbookOption === true}
                            onChange={handleRadioChange}
                        />
                            <label for="yesEbook">Yes</label>
                        <br/>
                        <input type="radio" id="noEbook" name="eBookOption" value="false"
                            checked={theBookEbookOption === false}
                            onChange={handleRadioChange}
                        />
                            <label for="noEbook">No</label>
                        <br/> 
                        <br />
                    <button type="submit">Submit</button> 
                </form>
            </fieldset>
        </div>
    )
}

export default AddBookForm;
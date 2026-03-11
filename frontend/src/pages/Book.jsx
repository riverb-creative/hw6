/**
 * Book.jsx
 *  a component describing an individual book object
 */

import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

const Book = () => {
    const [deleteId, setDeleteId] = useState("");
    //const [books, setBooks] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState("");
    const [deletedBookData, setDeletedBookData] = useState({});

    const {data, message, loading, error} = useFetch("http://localhost:3000/books");

    console.log(data);

       /*
    useEffect (() => {
        fetch("http://localhost:3000/books")
        .then(response => response.json())
        .then(data => setBooks( data ))
    }, []);
*/
    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/books/" + deleteId,
            {method: "DELETE"}
        )
        .then(response => response.json())
        .then((data) => {
            setDeleteSuccess(data.message);
            setDeletedBookData(data.bookDeleted);
        })
    }

    return (
               <form onSubmit={handleSubmit}>   
               {data.map((book, index) => (
                <>
                <header>
                    <h3>{book.title}</h3>
                    <h4>{book.author}</h4>
                </header>
                
                
              
            <div className="bookDetails">
                <p>Released: {book.releaseDate}</p>
                <p>Rating: {book.aveStars}</p>
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
            <input onClick={() => setDeleteId(book._id)} type='submit' 
                    name="btnSubmit" value="Delete Book" />
        </>
        ))}
        </form>
    )}

export default Book;
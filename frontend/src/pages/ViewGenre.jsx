/**
 * ViewGenre.jsx
 *  a component describing an individual book object
 */

import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

const ViewGenre = () => {
const [genre, setGenre] = useState("");
//const [books, setBooks] = useState([]);
const [filterBooks, setFilterBooks] = useState([]);
const [selectGenre, setSelectGenre] = useState(false);
const [genreSuccess, setGenreSuccess] = useState("");
const [genreData, setGenreData] = useState({});

    const {data, message, loading, error} = useFetch("http://localhost:3000/books");

     const handleSelect = (genre, book) => {
        setSelectGenre(true);
        setGenre(genre);
        const filteredBook = books.filter( (book) => book.genre.includes("horror", "fantasy", "romance"));
        setFilterBooks(filteredBook);
    }

    /*const filteredBooks = (book) => {
        
    }*/

        const getGenre = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/books/" + genre,
            {method: "GET"}
        )
        .then(response => response.json())
        .then((data) => {
            setGenreSuccess(data.message);
            setGenreData(data.genre);
        })
    }

    return (

            <>
            {selectGenre ? (
                <>
                {
                    setFilterBooks ? (

              <>
                {
                    filterBooks.map(book => (
                        <p>{book.title}</p>
                    ))
                }
                </>
            ) : (
                <>
                {
                    data.map(book => (
                        {book}
                    ))
                }
                </>
            )}
                </>
            ) : (
                
            <form onSubmit={getGenre}>
                <label htmlFor="selGenre">Select genre to view book list:</label>
                <br />
                <br />
                <select id="selGenre" onChange={(event) => setGenre(event.target.value)}>
                    <option value="romance">Romance</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                </select>
                <br />
                <br />
                <input onClick = {() => handleSelect(data.genre) } 
                type='button' id="btnSubmit" value="View Genre" />
            
            </form>
       )}  
       </>
    )
}

export default ViewGenre
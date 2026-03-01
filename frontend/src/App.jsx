import { useEffect, useState } from 'react'
import './App.css'
import PageHeader from './PageHeader'
import BookList from './BookList'
import AddBookForm from './AddBookForm'



function App() {

  const [BOOKS, setBOOKS] = useState([]);
  const [message, setMessage] = useState([]); 
  //retrieve book data from api just one time
  //prior to our BookList component rendering
  useEffect(() => {
    fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then(data => {
      setBOOKS(data);
    }, []);
  })

  const addBook = (newBook) => {
   
     fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook)
    })
    .then( response => response.json())
    .then((data) => {
      console.log("Book added: ", data)
            for (let key in data) {
        console.log("You have successfully added: ", data.bookAdded.title);
}
    });
  } 

  const deleteBook = (id) => {
      fetch("http://localhost:3000/books/" + id, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then((data) => {
      console.log("Book deleted: ", data);
      //console.log(data.bookDeleted.title);
      for (let key in data) {
        console.log("You have successfully deleted: ", data.bookDeleted.title);
}
      //Again, would likely want something here to make the delete clear to the user
    });
  }

    const updateBook = (id, updatedBook) => {
        fetch("http://localhost:3000/books/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBook)
    })
    .then( response => response.json())
    .then( (data) => {
      console.log("Book updated: ", data)
    }
    );
  }

  return (
    <>
      <PageHeader projectName="Introduction to React" 
                  projectAuthor="River B"
                  projectDesc="displays book information with React"/>
      <BookList books={BOOKS}
                deleteBook={deleteBook}
                updateBook={updateBook}
      />
      <AddBookForm 
        addBook={addBook}
      />
    </>
  )
}

export default App

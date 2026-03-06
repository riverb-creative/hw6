import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import PageHeader from './PageHeader'
import BookList from './BookList'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Book from './pages/Book'
import Home from './pages/Home'
import AddBookForm from './pages/AddBookForm'
import UpdateBook from './pages/UpdateBook'
import ViewGenre from './pages/ViewGenre'



function App() {
 return (
    <div>
      <Nav />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/books" element={ <Book /> } />
            <Route path="/addbook" element={ <AddBookForm /> } />
            <Route path="/editbook" element={ <UpdateBook /> } />
            <Route path="/genre" element={ <ViewGenre /> } />
        </Routes>
        <Footer />
    </div>
 )
}

export default App

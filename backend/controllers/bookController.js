/**-----------------------------
 * book.js 
 * 
 * define all the functions needed to interact with the books collection
 * in our database 
 * ----------------------------- */ 
const Book = require('../models/Book');

//get the whole collection of books
exports.getAllBooks = async (request, response) => {
    try {
        const books = await Book.find();
        response.status(200).json(books);
    }
    catch (errMsg) {
        response.status(500).json({ error: "Server error - " + errMsg });
    }
}

//add a book
exports.addBook = async(request, response) => {
    const {title, author, genre, releaseDate, aveStars, eBook} = request.body;
    try {
        const result = await Book.create({title, author, genre, releaseDate, aveStars, eBook});
        response.status(201).json({message: "success", bookAdded: result});
    }
    catch (errMsg) {
        response.status(500).json({message: "failure", error: errMsg});
    }
}

//delete a book by id
exports.deleteBook = async(request, response) => {
    const theId = request.params.theBookId;
    try {
        const result = await Book.findByIdAndDelete(theId);
        response.status(200).json({message: "success", bookDeleted: result});
    }
    catch (errMsg) {
        response.status(500).json({message: "failure", error: errMsg});
    }
}

//edit a book by id
exports.editBook = async(request, response) => {
    const theId = request.params.theBookId;
    const updatedBook = request.body;

    try {
        const result = await Book.findByIdAndUpdate(theId, updatedBook,
                                                    {new: true,       // return updated document
                                                     runValidators: true});
        response.status(200).json({message: "success", bookUpdated: result});
    }
    catch (errMsg) {
        response.status(500).json({message: "failure", error: errMsg});
    }
}
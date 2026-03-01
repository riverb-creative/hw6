# CS 234W - Book App with React
## Author: River
### Date: 02/25/2026

**Description:** CS 234W HW6 | Connecting React to Express + MongoDB

> [!NOTE]
> Available API endpoints:
> - http://localhost:3000/books
> - http://localhost:3000/books/ + id 
>       - (the id will come from MongoDB in order to access the book)

> [!NOTE]
> Applications that make use of the endpoints:
> - addBook in App.jsx in order to use the AddBookForm component to add a book to the list in the frontend and have it in the backend of MongoDB
> - deleteBook in App.jsx in order to use the _Delete theBookTitleYouWantToDelete_ button under the book information you would like to delete, if the id matches a book in MongoDB it will be deleted
> - updateBook in App.jsx in order to use the _Edit theBookTitleYouWantToDelete_ button under the book information you would like to edit, if the id matches a book in MongoDB it will show a form to edit the book information and will let you save the edited information.
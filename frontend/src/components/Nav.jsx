import  { Link } from 'react-router-dom';
import './Nav.css'


const Nav = () => {
    return(
    <nav>
        <ul className="navUl">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">View Books</Link></li>
          <li><Link to="/addbook">Add a Book</Link></li>
          <li><Link to="/editbook">Edit a Book</Link></li>
          <li><Link to="/genre">View Book Genres</Link></li>
        </ul>
    </nav>
    )
}

export default Nav;
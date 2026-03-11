import { useStore } from "../contexts/StoreContext"

const Home = () => {
    const { storeName } = useStore();
    return (
        <main>
            <h2>Welcome to { storeName }!</h2>
            <p>With This Application You Can:</p>
            <ul>
                <li>View all books available and delete a book through the 
                    <em>View Books</em> link
                </li>
                <li>Add a book</li>
                <li>Edit a book</li>
                <li>View book genres</li>

            </ul>
        </main>
    )
}

export default Home
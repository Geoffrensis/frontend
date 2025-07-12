import { useDispatch, useSelector } from 'react-redux';
import './BookList.css';
import { deleteBook } from '../../redux/books/actionCreators';
const BookList = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };
    return (
        <div className="app-block book-list">
            <div className="filter-row">
                <h2>Book List</h2>
                <button type="button">Clear All</button>
            </div>
            {books.length === 0 ? (
                <p>No books found</p>
            ) : (
                <ul>
                    {books.map((book, index) => {
                        return (
                            <li key={book.id}>
                                <div className="book-info">
                                    {index + 1}
                                    {')'} {book.year}
                                    {book.title} by{' '}
                                    <strong>{book.author}</strong>
                                </div>
                                <div className="book-actions">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDeleteBook(book.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default BookList;

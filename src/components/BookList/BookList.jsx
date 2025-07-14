import { useDispatch, useSelector } from 'react-redux';
import { BsBookmarkCheckFill, BsBookmarkCheck } from 'react-icons/bs';
import './BookList.css';
import {
    clearAll,
    deleteBook,
    toggleFavorite,
} from '../../redux/books/actionCreators';
import {
    selectAuthorFilter,
    selectOnlyFavorite,
    selectTitleFilter,
} from '../../redux/slices/filterSlice';
const BookList = () => {
    const books = useSelector((state) => state.books);
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavorite);
    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };
    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };
    const handleClearAllBooks = () => {
        dispatch(clearAll());
    };
    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());
        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase());
        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
        return matchesTitle && matchesAuthor && matchesFavorite;
    });
    const highlighMatch = (text, filter) => {
        if (!filter) return text;
        const regex = new RegExp(`(${filter})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) =>
            part.toLowerCase() === filter.toLowerCase() ? (
                <span key={index} className="highlight">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };
    return (
        <div className="app-block book-list">
            <div className="filter-row">
                <h2>Book List</h2>
                <button type="button" onClick={handleClearAllBooks}>
                    Clear All
                </button>
            </div>
            {books.length === 0 ? (
                <p>No books found</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, index) => {
                        return (
                            <li key={book.id}>
                                <div className="book-info">
                                    {index + 1}
                                    {')'}{' '}
                                    {highlighMatch(book.title, titleFilter)} by{' '}
                                    <strong>
                                        {highlighMatch(
                                            book.author,
                                            authorFilter
                                        )}
                                    </strong>
                                </div>
                                <div className="book-actions">
                                    <span
                                        onClick={() =>
                                            handleToggleFavorite(book.id)
                                        }
                                    >
                                        {' '}
                                        {book.isFavorite ? (
                                            <BsBookmarkCheckFill className="star-icon" />
                                        ) : (
                                            <BsBookmarkCheck className="star-icon" />
                                        )}
                                    </span>
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

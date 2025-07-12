import { useState } from 'react';
import './BookForm.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators';
import booksData from '../data/books.json';
const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title && author) {
            const book = {
                title,
                author,
                id: crypto.randomUUID(),
                isFavorite: false,
            };
            dispatch(addBook(book));
            setTitle('');
            setAuthor('');
        }
    };
    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const randomBook = booksData[randomIndex];
        const randomBookWithId = {
            ...randomBook,
            id: crypto.randomUUID(),
            isFavorite: false,
        };
        dispatch(addBook(randomBookWithId));
    };
    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Book Title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        placeholder="Book Author"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                    />
                </div>
                <button type="submit">Add Book</button>
                <button type="button" onClick={handleAddRandomBook}>
                    Add Random Book
                </button>
            </form>
        </div>
    );
};

export default BookForm;

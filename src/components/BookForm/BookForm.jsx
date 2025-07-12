import './BookForm.css';
const BookForm = () => {
    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="Book Title" />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" placeholder="Book Author" />
                </div>
                <button type="submit">Add Book</button>
                <button type="button">Add Random Book</button>
            </form>
        </div>
    );
};

export default BookForm;

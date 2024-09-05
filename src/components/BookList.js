import { useContext } from "react";
import BookContext from '../Context/Book';
import BookShow from "./BookShow";
import './booklist.css';

function BookList() {
    const { books } = useContext(BookContext);

    // Check if books is defined and is an array
    const renderBooks = books && Array.isArray(books)
        ? books.map((book) => {
            return <BookShow key={book.id} book={book} />
        })
        : <div>No books available</div>;

    return (
        <div className="book-list">
            {renderBooks}
        </div>
    );
}

export default BookList;

// import { useContext } from "react";
// import BookContext from '../Context/Book'
// import BookShow from "./BookShow";
// import './booklist.css';

// function BookList(){
//     const { books } = useContext(BookContext);
//     const renderBooks=books.map((book) => {
//         return <BookShow key={book.id} book={book}/>
//     });
//     return(
//         <div className="book-list">
//             {renderBooks}
//         </div>
//     )    
// }
// export default BookList;
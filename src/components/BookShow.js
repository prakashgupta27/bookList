import { useState , useContext } from 'react';
import BookContext from '../Context/Book';
import './bookshow.css';
import BookEdit from './BookEdit'

function BookShow({ book , onEdit }){

    const [showEdit, setShowEdit]= useState(false);
    const {deleteBookById} = useContext(BookContext)

    const handelDeleteClick=()=>{
        deleteBookById(book.id)
    };
    const handleEditClick=()=>{
        setShowEdit(!showEdit);
    };

    const handleSubmit=()=>{
        setShowEdit(false)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content=<BookEdit onSubmit={handleSubmit}  book={book}/>;
    }

    return(     
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/200/100`}/>
            {content}
            <div className='actions'>
                <button onClick={handleEditClick}>
                Edit</button>
            <button className='delete' onClick={handelDeleteClick}>
                Delete
            </button>
            </div>
            </div>
    );

}
export default BookShow;
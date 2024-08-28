import { useState } from 'react';
import './bookshow.css';
import BookEdit from './BookEdit'

function BookShow({ book ,onDelete, onEdit }){

    const [showEdit, setShowEdit]= useState(false);

    const handelDeleteClick=()=>{
        onDelete(book.id)
    };
    const handleEditClick=()=>{
        setShowEdit(!showEdit);
    };

    const handleSubmit=(id , newTitle)=>{
        setShowEdit(false)
        onEdit(id , newTitle)
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
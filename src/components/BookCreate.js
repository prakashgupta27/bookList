import { useContext } from "react";
import { useState } from "react";
import BookContext from "../Context/Book";

function BookCreate({onCreate}){
    const [title, setTitle]= useState('');
    const {createBook}= useContext(BookContext);

    const handleChange=(event)=>{
        setTitle(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        createBook(title);
        setTitle('');
    };
    return(
        <div className="book-create">
            <h3 className="heading">Add A Book</h3>
            <form class="custom-form" onSubmit={handleSubmit}>
                <label class="form-label">Title:</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create !</button>
            </form>
        </div>
    );
}
export default BookCreate;


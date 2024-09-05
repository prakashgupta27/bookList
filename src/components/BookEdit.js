import { useState , useContext } from "react";
import BookContext from "../Context/Book";

function BookEdit({book ,onSubmit}){
    const[title, SetTitle]= useState(book.title);
    const {editBookById} =useContext(BookContext)

    const handleChange=(event)=>{
        SetTitle(event.target.value);

    };

    const handleSubmit=(event)=>{
        event.preventDefault();

        onSubmit();
        editBookById(book.id , title);
    };

    return(
         <form onSubmit={handleSubmit} className="book-edit">
                <label >Title</label>
                <input value={title} onChange={handleChange}/>
                <button >Save</button>
            </form>
    );
}
export default BookEdit;
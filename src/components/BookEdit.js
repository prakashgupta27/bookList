import { useState } from "react";

function BookEdit({book ,onSubmit}){
    const[title, SetTitle]= useState(book.title);

    const handleChange=(event)=>{
        SetTitle(event.target.value);

    };

    const handleSubmit=(event)=>{
        event.preventDefault();

        onSubmit(book.id, title);
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
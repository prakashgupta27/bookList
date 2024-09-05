import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();
function Provider({children}){
    const [books, setBooks] = useState([]);

    const fetchBooks=async ()=>{
        const response = await axios.get('http://localhost:3002/Books')
        setBooks(response.data);
    };

    const editBookByID= async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3002/Books/${id}`,{
            title: newTitle,
        });
        console.log(response);

        const updatedBooks = books.map((book)=>{
            if(book.id===id){
                return {...book ,...response.data}
            }
            return book;
        });
        setBooks(updatedBooks);
    }
    
    const deleteBookByID= async (id)=>{
        await axios.delete(`http://localhost:3002/Books/${id}`);

        const updatedBooks= books.filter((book) =>{
            return book.id!== id;
        });
        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3002/Books', {
            title,
        });

        const updatedBooks=[
            ...books,
            response.data
        ];
    setBooks(updatedBooks);

    const valueToStore ={
        books,
        createBook,
        deleteBookByID,
        editBookByID,
        fetchBooks,
    }

    };
    return(
        <BookContext.Provider value={{}}>
            {children}
        </BookContext.Provider>
    )
}
export {Provider};

export default BookContext;
import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks=async ()=>{
        const response = await axios.get('http://localhost:3002/Books')
        setBooks(response.data);
    } 

    useEffect(()=>{
        fetchBooks();
    },[]);

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
    };

    return (
        <>
            <div>
                <h1>Reading List </h1>
                <BookList onEdit={editBookByID} books={books} onDelete={deleteBookByID} />
                <BookCreate onCreate={createBook} />
            </div>
        </>
    );
}

export default App;


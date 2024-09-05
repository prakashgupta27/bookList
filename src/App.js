import React, { useEffect , useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./Context/Book";

function App() {
   const {fetchBooks} = useContext(BookContext);

    useEffect(()=>{
        fetchBooks();
    },[]);

    return (
        <>
            <div>
                <h1>Reading List </h1>
                <BookList />
                <BookCreate />
            </div>
        </>
    );
}

export default App;


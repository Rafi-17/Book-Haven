import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks]= useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className="mt-24 px-5 lg:px-0">
            <h2 className="text-center font-bold text-4xl text-black mb-16" >Books</h2>
            <div className="md:grid md:grid-cols-3 gap-6">
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
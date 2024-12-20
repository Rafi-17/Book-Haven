import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadlist, getStoredWishlist } from "../utility/localStorage";
import Readlist from "../Readlist/Readlist";
import { RiArrowDownSLine } from "react-icons/ri";
import { Helmet } from "react-helmet";

const ListedBooks = () => {
    const [readlist, setReadlist]=useState([]);
    const [wishlist, setWishlist]=useState([]);
    const [readlistDisplay, setReadlistDisplay]=useState([]);
    const [wishlistDisplay, setWishlistDisplay]=useState([]);
    const [filter, setFilter]=useState('Sort By')
    const books=useLoaderData();
    useEffect(()=>{
        const readlistIds=getStoredReadlist();
        const readBooks=books.filter(book=>readlistIds.includes(book.bookId));
        setReadlist(readBooks);
        if(filter==="Rating"){
          readBooks.sort((a,b)=>b.rating-a.rating);
        }
        if(filter==="Number of Pages"){
          readBooks.sort((a,b)=>b.totalPages-a.totalPages);
        }
        if(filter==="Published Year"){
          readBooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing);
        }
        // console.log(readBooks); 
        

        const wishlistIds=getStoredWishlist();
        const wishBooks=books.filter(book=>wishlistIds.includes(book.bookId));
        setWishlist(wishBooks);
        if(filter==="Rating"){
          wishBooks.sort((a,b)=>b.rating-a.rating);
        }
        if(filter==="Number of Pages"){
          wishBooks.sort((a,b)=>b.totalPages-a.totalPages);
        }
        if(filter==="Published Year"){
          wishBooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing);
        }
    },[books, filter])

  return (
    <>
    <Helmet>
        <title>BookHaven | ListedBooks</title>
    </Helmet>
    <div className="text-center">
      <details className="dropdown">
        <summary className="btn m-1 bg-[#23BE0A] text-white">{filter} <span><RiArrowDownSLine /></span></summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={()=>setFilter("Sort By")}><a>Sort By</a></li>
          <li onClick={()=>setFilter("Rating")}><a>Rating</a></li>
          <li onClick={()=>setFilter("Number of Pages")}><a>Number of Pages</a></li>
          <li onClick={()=>setFilter("Published Year")}><a>Published Year</a></li>
        </ul>
      </details>
    </div>
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Read Books"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
         <div>
            {
                readlist.length>0 ? readlist.map(book=><Readlist key={book.bookId} book={book}></Readlist>) : <h2 className="text-5xl font-extrabold text-center">There is no book in the readlist</h2>
            }
         </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Wishlist Books"
        
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
          <div>
            {
                wishlist.length>0 ? wishlist.map(book=><Readlist key={book.bookId} book={book}></Readlist>) : <h2 className="text-5xl font-extrabold text-center mt-32">No book added to the wishlist</h2>
            }
         </div>
      </div>
    </div>
    </>
  );
};

export default ListedBooks;

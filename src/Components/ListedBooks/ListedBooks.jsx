import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadlist, getStoredWishlist } from "../utility/localStorage";
import Readlist from "../Readlist/Readlist";

const ListedBooks = () => {
    const [readlist, setReadlist]=useState([]);
    const [wishlist, setWishlist]=useState([]);
    const books=useLoaderData();
    useEffect(()=>{
        const readlistIds=getStoredReadlist();
        const readBooks=books.filter(book=>readlistIds.includes(book.bookId));
        setReadlist(readBooks);

        const wishlistIds=getStoredWishlist();
        const wishBooks=books.filter(book=>wishlistIds.includes(book.bookId));
        setWishlist(wishBooks);
    },[books])

  return (
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
  );
};

export default ListedBooks;

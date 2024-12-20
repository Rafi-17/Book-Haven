import { Link, useLoaderData, useParams } from "react-router-dom";
import { getStoredReadlist, getStoredWishlist, removeFromWishlist, saveReadlist, saveWishlist } from "../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";

const BookDetails = () => {
    const books=useLoaderData();
    const {id}=useParams();
    // console.log(books);
    // console.log(id);
    const book=books.find(book=>book.bookId===parseInt(id));
    const { bookId, bookName, author, image, rating, category, tags, publisher, review, yearOfPublishing, totalPages } = book;

    const handleRead=()=>{
        const storedReadlist= getStoredReadlist();
        const storedWishlist= getStoredWishlist();
        const exist= storedReadlist.find(id=>id===bookId);
        const existInWishlist=storedWishlist.find(id=>id===bookId);
        if(existInWishlist){
            console.log("hello");
            removeFromWishlist(bookId);
        }
        if(!exist){
            saveReadlist(bookId);
            toast('The book has been added to the readlist')
        }
        else{
            toast('The book is already added to the readlist')
        }
    }
    const handleWish=()=>{
        const storedWishlist= getStoredWishlist();
        const storedReadlist= getStoredReadlist();
        const existInReadlist=storedReadlist.find(id=>id===bookId);
        const exist=storedWishlist.find(id=>id===bookId);
        if(existInReadlist){
            toast('The book is already added to the readlist');
        }
        else if(!exist){
            saveWishlist(bookId);
            toast('The book has been added to the wishlist')
        }
        else{
            toast('The book is already added to the wishlist')
        }
    }

    return (
        <div>
            <Helmet>
                <title>Book: {bookId}</title>
            </Helmet>
            <div className="flex">
                <div className="w-1/2">
                    <img src={image} alt="" />
                </div>
                <div className="w-1/2">
                    <h1 className="font-bold text-4xl text-black mb-5">{bookName}</h1>
                    <p className="text-lg font-medium text-black  mb-5">By: {author}</p>
                    <hr />
                    <p className="my-4 text-xl font-medium text-black">{category}</p>
                    <hr />
                    <p className="text-black mb-7"><span className="font-semibold">Review:</span>{review}</p>
                    <div className="flex justify-evenly overflow-hidden lg:justify-normal lg:gap-7 w-full items-center mb-5">
                        <span className="font-bold text-lg">Tag</span>
                        {
                            tags.map((tag,idx)=><span className="text-[#23BE0A] font-medium bg-[#1313130D] py-1 px-2 rounded-3xl" key={idx}>#{tag}</span>)
                        }
                    </div>
                    <hr />
                    <p className="mt-6 mb-3 font-semibold text-black"><span className="text-[#131313B3] w-[144px] mr-14">Number of Pages:</span>{totalPages}</p>
                    <p className="mb-3 font-semibold text-black"><span className="text-[#131313B3] w-[144px] mr-14">Publisher:</span>{publisher}</p>
                    <p className="mb-3 font-semibold text-black"><span className="text-[#131313B3] w-[144px] mr-14">Year of Publishing:</span>{yearOfPublishing}</p>
                    <p className="mb-3 font-semibold text-black"><span className="text-[#131313B3] w-[144px] mr-14">rating:</span>{rating}</p>
                    <div className="flex gap-4 mt-5">
                        <Link><button onClick={handleRead} className="border-[#1313134D] border rounded-lg py-1 md:py-2 lg:py-3 px-3 md:px-5 lg:px-7 text-sm md:text-base font-medium lg:font-semibold text-black">Read</button></Link>
                        <Link><button onClick={handleWish} className="bg-[#59C6D2] rounded-lg py-1 md:py-2 lg:py-3 px-3 md:px-5 lg:px-7 text-sm md:text-base font-medium lg:font-semibold text-white">Wishlist</button></Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
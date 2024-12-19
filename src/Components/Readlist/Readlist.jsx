import { CiLocationOn } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";
import { PiNote } from "react-icons/pi";
import { Link } from "react-router-dom";
const Readlist = ({book}) => {
    const { bookId, bookName, author, image, rating, category, tags, publisher, review, yearOfPublishing, totalPages } = book;
    return (
        <div className="mb-6">
            <div className="p-6 flex border border-[#13131326] h-[300px] gap-6 rounded-2xl">
                <div className="bg-[#1313130D] py-7 px-12 rounded-2xl">
                    <img className="h-full" src={image} alt="" />
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-black mb-4">{bookName}</h2>
                    <p className="text-lg font-medium text-black  mb-4">By: {author}</p>
                    <div className="flex justify-evenly overflow-hidden lg:justify-normal lg:gap-7 w-full items-center mb-5">
                        <span className="font-bold text-lg">Tag</span>
                        {
                            tags.map((tag,idx)=><span className="text-[#23BE0A] font-medium bg-[#1313130D] py-1 px-2 rounded-3xl" key={idx}>#{tag}</span>)
                        }
                        <div className="flex items-center gap-2"><span className="text-xl"><CiLocationOn /></span>Year of publishing: {yearOfPublishing}</div>
                    </div>
                    <div className="flex gap-5 mb-5">
                        <p className="flex items-center gap-3"><span><IoMdPeople /></span>Publisher: {publisher}</p>
                        <p className="flex items-center gap-3"><span><PiNote /></span>Page {totalPages}</p>
                    </div>
                    <hr />
                    <div className="flex items-center gap-3 mt-4">
                        <p className="rounded-3xl py-2 px-5 text-[#328EFF bg-[#328EFF26]">Category: {category}</p>
                        <p className="rounded-3xl py-2 px-5 text-[#FFAC33] bg-[#FFAC3326]">Rating: {rating}</p>
                        <Link to={`/book/${bookId}`}><button className="rounded-3xl py-2 px-5 text-white bg-[#23BE0A]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Readlist;
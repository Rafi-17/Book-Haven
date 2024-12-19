import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  const navigate=useNavigate();

  const handleBookDetails=()=>{
    navigate(`/book/${bookId}`);
  }
  return (
    <div onClick={handleBookDetails} className="cursor-pointer card p-4 lg:px-6 lg:pt-6 h-[480px] md:h-[450px] lg:h-[500px] w-full md:w-[220px] lg:w-96 border border-[#13131326]">
      <div className="h-1/2 bg-[#1313130D] flex rounded-2xl py-4 justify-center items-center">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-[150px] md:h-full "
        />
      </div>
      <div className="mt-6 ml-1 flex flex-col items-start">
        <div className="flex justify-evenly overflow-hidden lg:justify-normal lg:gap-7 w-full items-center">
            {
                tags.map((tag,idx)=><span className="text-[#23BE0A] text-sm font-medium bg-[#1313130D] py-1 px-2 rounded-3xl" key={idx}>{tag}</span>)
            }
        </div>
        <h2 className="font-bold text-base lg:text-lg mt-4 text-black">{bookName}</h2>
        <p className="mt-4 text-[#131313CC] font-medium text-sm flex-grow">By: {author}</p>
        <div className="flex text-[#131313CC] font-medium text-sm justify-between w-full mt-8">
          <p>{category}</p>
          <p className="flex items-center">{rating} <span className="inline"><CiStar /></span></p>
        </div>
      </div>
    </div>
  );
};

export default Book;

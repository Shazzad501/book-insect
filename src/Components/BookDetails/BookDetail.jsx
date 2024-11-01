import { useLoaderData, useParams} from "react-router-dom";
import { setStoredReadList, setStoredWishList } from "../Utilitys/AddToDB";



const BookDetail = () => {
  const {bookId} = useParams();
  const id = parseInt(bookId)
  const data = useLoaderData();

  const clickBook = data.find(book => book.bookId === id);

  const {bookName, author, yearOfPublishing, publisher, tags, category, rating, totalPages,review, image} = clickBook;

  const handleMarkAsRead = (id, name)=>{
    setStoredReadList(id, name);
  }

  const handleWishList = (id, name)=>{
    setStoredWishList(id, name);
  }

  return (
    <div className="hero w-11/12 mx-auto py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="p-10 bg-base-200 rounded-xl w-full md:w-[35%] ">
        <img
          src={image}
          className=" rounded-lg h-full w-full" />
        </div>
        <div className="flex flex-col gap-3 w-full md:w-[65%]">
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <p className="font-bold text-sm">By: {author}</p>
          <div className="border-b-2 border-dashed"></div>
          <p className="font-bold text-lg">{category}</p>
          <div className="border-b-2 border-dashed"></div>
          <p className="">{review}</p>
          <div className="flex gap-5">
            {
              tags.map((tag, idx) => <p key={idx} className="btn btn-sm font-bold text-sm text-[#23BE0A]">{tag}</p>)
            }
          </div>
          <div className="border-b-2 border-dashed"></div>
          <p className="font-semibold text-base">Number of the page: &nbsp;&nbsp;<span className="font-bold text-lg">{totalPages}</span></p>
          <p className="font-semibold text-base">Publisher:&nbsp;&nbsp; <span className="font-bold text-lg">{publisher}</span></p>
          <p className="font-semibold text-base">Year of publishing: &nbsp;&nbsp;<span className="font-bold text-lg">{yearOfPublishing}</span></p>
          <p className="font-semibold text-base">Rating:&nbsp;&nbsp; <span className="font-bold text-lg">{rating}</span></p>
          <div className="flex gap-6">

            <button onClick={()=> handleMarkAsRead(bookId, bookName)} className="btn btn-md font-bold text-base bg-white  border-[#59C6D2] hover:bg-[#59C6D2]">Mark as Read</button>
            
            <button onClick={()=> handleWishList(bookId, bookName)} className="btn btn-md font-bold text-base text-white bg-[#59C6D2] hover:border-[#59C6D2] hover:bg-white hover:text-black">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
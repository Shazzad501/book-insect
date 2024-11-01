import { Link } from "react-router-dom";

const Book = ({book}) => {
  const {bookId, image, rating, author, bookName, category, tags} =book;
  return (
    <Link to={`books/${bookId}`}>
          <div className="card  border-2 border-gray-100 p-5">
            <div className=" flex items-center justify-center h-56 w-full bg-base-200 rounded-xl">
              <img
                src={image}
                alt="Shoes"
                className="rounded-xl w-[140px] h-[180px] object-center" />
            </div>
            <div className="mt-5">
              <div className="flex gap-4 mb-4">
                {tags.map((tag, idx)=> <p className="btn btn-sm font-bold text-sm text-[#23BE0A]" key={idx}>{tag}</p>)}
              </div>
              <p className="font-extrabold text-xl mb-3">{bookName}</p>
              <p className="font-bold text-sm mb-3">By: {author}</p>
              <div className="border-b-2 border-dashed mb-3 border-gray-400"></div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-sm">{category}</p>
                <p className="font-bold text-sm">{rating} <i className="fa-regular fa-star"></i></p>
              </div>
            </div>
          </div>
    </Link>
  );
};

export default Book;
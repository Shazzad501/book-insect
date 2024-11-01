import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../Utilitys/AddToDB';

const ReadList = () => {
  const [listedBook, setListedBook] = useState([])
  const [wishList, setWishList] = useState([])
  const [sort, setSort] = useState('')

  const allBooks = useLoaderData();

  useEffect(()=>{
    const booksReadList = getStoredReadList();
    const booksReadListInt = booksReadList.map(id => parseInt(id));
    const readBookList = allBooks.filter(book => booksReadListInt.includes(book.bookId));
    setListedBook(readBookList);

    const bookWishList = getStoredWishList();
    const bookWishListInt = bookWishList.map(id => parseInt(id));
    const wishBookList = allBooks.filter(book => bookWishListInt.includes(book.bookId));
    setWishList(wishBookList);
  }, [])

  const handleSortBy = (sortType) =>{
    setSort(sortType);

    if(sortType === 'Number of pages'){
      const sortedListedBookByPage = [...listedBook].sort((a,b) => a.totalPages - b.totalPages);
      setListedBook(sortedListedBookByPage);
    }
    if(sortType === "Rating"){
      const sortedListedBookByRating = [...listedBook].sort((a,b) => a.rating - b.rating);
      setListedBook(sortedListedBookByRating);
    }
    if(sortType === 'Number of pages'){
      const sortedWishListByPage = [...wishList].sort((a,b) => a.totalPages - b.totalPages);
      setWishList(sortedWishListByPage);
    }
    if(sortType === "Rating"){
      const sortedWishListByRating = [...wishList].sort((a,b) => a.rating - b.rating);
      setWishList(sortedWishListByRating);
    }
  }

  return (
    <div className='w-11/12 mx-auto mt-10'>
      {/* shorted drop down */}

      <div className='flex flex-col items-center'>
      <div className="dropdown dropdown-right ">
        <div tabIndex={0} role="button" className="btn font-bold text-white text-base hover:bg-[#23BE0A] bg-[#23BE0A] m-1">
          {
            sort ? `Sort by: ${sort}` : 'Sort by'
          }
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={()=>handleSortBy('Rating')}><a className='font-bold text-base'>Rating</a></li>
          <li onClick={()=>handleSortBy('Number of pages')}><a className='font-bold text-base'>Number of pages</a></li>
        </ul>
      </div>
      </div>

      <Tabs>
      <TabList>
        <Tab><p className='font-bold text-base'>Read List</p></Tab>
        <Tab><p className='font-bold text-base'>Wish List</p></Tab>
      </TabList>

      <TabPanel>
        <div className='flex flex-col gap-5 py-5'>
        {
            listedBook.map(book => <div key={book.bookId} className='flex justify-between w-full py-4 items-center px-2 border-2 rounded-xl'>
              <div className='flex gap-4 items-center'>
                <div className='h-16 w-16 p-1 rounded-lg border-2 border-black'>
                  <img className='w-full h-full object-cover rounded-lg' src={book.image} alt="" />
                </div>

                <div className='flex flex-col justify-between gap-2'>
                  <p className='font-bold text-xl'>{book.bookName}</p>
                  <div className='flex gap-5'>
                    <p className='font-bold text-sm'>Total pages: {book.totalPages}</p>
                    <p className='font-bold text-sm'>Rating: {book.rating}</p>
                  </div>
                  <p className='font-bold text-sm'>By: {book.author}</p>
                </div>
              </div>
              <div className='btn btn-sm '><p className='font-extrabold  text-lg text-red-600'><i className="fa-solid fa-trash"></i></p></div>
            </div>)
          }
        </div>
    
      </TabPanel>
      <TabPanel>
      <div className='flex flex-col gap-5 py-5'>
        {
            wishList.map(book => <div key={book.bookId} className='flex justify-between w-full py-4 items-center px-2 border-2 rounded-xl'>
              <div className='flex gap-4 items-center'>
                <div className='h-16 w-16 p-1 rounded-lg border-2 border-black'>
                  <img className='w-full h-full object-cover rounded-lg' src={book.image} alt="" />
                </div>

                <div className='flex flex-col justify-between gap-2'>
                  <p className='font-bold text-xl'>{book.bookName}</p>
                  <div className='flex gap-5'>
                    <p className='font-bold text-sm'>Total pages: {book.totalPages}</p>
                    <p className='font-bold text-sm'>Rating: {book.rating}</p>
                  </div>
                  <p className='font-bold text-sm'>By: {book.author}</p>
                </div>
              </div>
              <div className='btn btn-sm '><p className='font-extrabold  text-lg text-red-600'><i className="fa-solid fa-trash"></i></p></div>
            </div>)
          }
        </div>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default ReadList;
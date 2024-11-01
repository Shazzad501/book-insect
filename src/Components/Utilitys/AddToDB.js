import { toast } from "react-toastify";

// Add to read list functionality
const getStoredReadList = ()=>{

  const storedBookStr = localStorage.getItem('read-list');
  if(storedBookStr){
    const storedBookData = JSON.parse(storedBookStr);
    return storedBookData;
  }
  else{
    return [];
  }

}

const setStoredReadList = (id, name)=>{
  const storedBook = getStoredReadList();
  if(storedBook.includes(id)){
    toast.error(`${name} already exist in read list!!`)
  }
  else{
    storedBook.push(id);
    const storedBookList = JSON.stringify(storedBook);
    localStorage.setItem('read-list', storedBookList);
    toast.success(`${name} successfully add in read list!!`)
  }

}

// Add to wish list functionality

const getStoredWishList = ()=>{
  const storedWishStr = localStorage.getItem('wish-list');
  if(storedWishStr){
  const storedWishData = JSON.parse(storedWishStr);
  return storedWishData;
  }
  else{
    return [];
  }
}

const setStoredWishList = (id, name)=>{
  const storedWishList = getStoredWishList();
  if(storedWishList.includes(id)){
    toast.error(`${name} already exist in wish list!!`)
  }
  else{
    storedWishList.push(id);
    const storedWishData = JSON.stringify(storedWishList)
    localStorage.setItem('wish-list', storedWishData);
    toast.success(`${name} successfully add in wish list!!`)
  }
}

export { setStoredReadList, setStoredWishList, getStoredReadList, getStoredWishList}

const getStoredReadlist=()=>{
    const storedReadlist=localStorage.getItem('readlist');
    if(storedReadlist){
        return JSON.parse(storedReadlist);
    }
    return [];
}

const getStoredWishlist=()=>{
    const storedWishlist=localStorage.getItem('wishlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }
    return [];
}

const saveReadlist=id=>{
    const storedReadlist=getStoredReadlist();
    const idInt=parseInt(id);
    const exist=storedReadlist.find(book=>book.bookId===idInt);
    
    if(!exist){
        storedReadlist.push(idInt);
        localStorage.setItem('readlist', JSON.stringify(storedReadlist));
    }
}

const saveWishlist=id=>{
    const storedWishlist=getStoredWishlist();
    const idInt=parseInt(id);
    const exist=storedWishlist.find(id=>id===idInt);
    console.log(exist);
    if(!exist){
        storedWishlist.push(idInt);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
    }
}

const removeFromWishlist=id=>{
    const idInt=parseInt(id);
    const storedWishlist=getStoredWishlist();
    const newWishtlist=storedWishlist.filter(id=>id!==idInt);
    localStorage.setItem('wishlist', JSON.stringify(newWishtlist));
}

export {getStoredReadlist, getStoredWishlist, saveReadlist, saveWishlist, removeFromWishlist}
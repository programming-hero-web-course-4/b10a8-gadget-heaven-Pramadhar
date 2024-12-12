import { toast } from "react-toastify"

const getStoreReadList =() => {
const storedListStr = localStorage.getItem('read-list')
if(storedListStr){
const storedList  = JSON.parse(storedListStr)
return storedList
}
else {
return []
}
}
const addToStoredReadList = (id) => {
    const storedList = getStoreReadList()
    if(storedList.includes(id)){
        console.log(id,'ready')

    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
     
        return  toast('this is booked added to the readlist')
    }
}
const getStoreWishList =() => {
const storedListStr = localStorage.getItem('wish-list')
if(storedListStr){
const storedList  = JSON.parse(storedListStr)
return storedList
}
else {
return []
}
}
const addToStoredWishList = (id) => {
    const storedList = getStoreWishList()
    if(storedList.includes(id)){
        console.log(id,'ready')

    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
      return  toast('this is booked added to the wishlist')
    }
}
export {addToStoredReadList,getStoreReadList,getStoreWishList, addToStoredWishList}
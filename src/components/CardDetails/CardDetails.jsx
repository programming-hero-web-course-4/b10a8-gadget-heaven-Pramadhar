
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utility/adddb';


const CardDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const i = parseInt(id)
    const card = data.find(card => card.id === i)
    console.log(card)
    const { id: currentid, img, specification, availability, rating, title, price } = card

 const handleAddToCard  = (id, type) => {
    if (type === 'readList'){
        addToStoredReadList(id)
    }
    else if(type === 'wishlist' ) {
        addToStoredWishList(id)
    }
   
 }


    return (
        <div className='flex flex-col justify-center items-center mb-12'>
            <div className='bg-purple-500 mt-3 p-24 mb-12 rounded-lg text-white text-center w-full relative'>
                <h2 className='text-2xl'>Product Details</h2>
                <h2>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h2>
            </div> 
            <div className='flex gap-6 justify-center items-center bg-slate-100 p-12 relative -mt-[130px]  rounded-lg'>
              
  <div>
                    <img src={img} alt="" />
                </div>
                <div className='space-y-6'>
                    <h2>{title}</h2>
                    <h2>{price}</h2>
                    <h2>{specification}</h2>
                    <h2>{availability}</h2>
                    <h2>{rating}</h2>
                    <button onClick={()=> handleAddToCard(currentid ,'readList')}  className='btn bg-purple-500 rounded-full text-white mr-3'>ADD TO CARD</button>
                    <button onClick={() => handleAddToCard(currentid, 'wishlist')}  className='btn bg-purple-500 rounded-full text-white '>ADD TO WISHLIST</button>
                </div>
                </div>
            </div>
       
    );
};

export default CardDetails;
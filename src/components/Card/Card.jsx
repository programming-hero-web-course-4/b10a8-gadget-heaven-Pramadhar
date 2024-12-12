import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({coffee}) => {
    const {title, id, category, price , availability, rating,img} = coffee
    return (
       <Link to={`/cards/${id}`}> <div className="card bg-base-100 w-96 shadow-xl p-8  gap-12 mb-12">
       <figure className='bg-grey-400 rounded-lg '>
         <img
         className='h-[266px]  py-2'
           src={img}
           alt="Shoes" />
       </figure>
       <div className="card-body py-2">
         <h2 className="card-title">{category}</h2>
         <p>{price}</p>
         <div className="card-actions justify-first">
           <button  style={{ border: '2px solid purple' , padding: '10px 20px', borderRadius: '32px' }} className="border: 2px solid red ">view details</button>
         </div>
       </div>
     </div></Link>
    );
};

export default Card;
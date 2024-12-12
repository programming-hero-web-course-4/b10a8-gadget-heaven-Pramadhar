import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
   
    return (
    
            <div className='flex flex-col gap-2 '>
  {
    categories.map (category => (<Link key={category.category} to={`category/${category.category}`} >{category.category}</Link>))
  }

</div>
      
    );
};

export default Categories;
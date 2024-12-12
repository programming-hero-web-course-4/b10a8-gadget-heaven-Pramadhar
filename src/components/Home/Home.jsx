import React from 'react';
import Banner from '../Banner/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';

const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            <Banner></Banner>
<div className='flex justify-center mx-auto max-w-6xl"'>
    <div className='w-1/4 pr-4 pl-12 space-x-4 '>
    <Categories categories={categories} />
    </div>
<div  className="w-3/4 pl-4"> 
<Outlet></Outlet>
</div>

</div>
  
      </div>
       
    );
};

export default Home;
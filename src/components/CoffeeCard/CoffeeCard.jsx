
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';

const CoffeeCard = () => {
    const cat = useLoaderData()

    const{ category} = useParams()
    console.log(category)
 const [ coffee, setCoffee] = useState([])
 useEffect (()=> {
    if(category == "All-Products"){
 setCoffee(cat)
    }
else if(category){
    const filter = [...cat].filter (coffee => coffee.category === category )
setCoffee(filter)
} else{
    setCoffee(cat)
}
 }, [cat,category])
 console.log(coffee)
 console.log(cat)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto '>
          {
coffee?.map (coffee => <Card key={coffee.id} coffee={coffee}></Card>)
          }
        </div>
    );
};

export default CoffeeCard;
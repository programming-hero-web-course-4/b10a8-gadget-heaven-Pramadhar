import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreReadList, getStoreWishList } from '../../utility/adddb';
import Card from '../Card/Card';

const Dashboard = () => {
    const allProduct = useLoaderData()
    const [view, setView] = useState('readList')
    const [wishlist, setWishlist] = useState([])
    const [readList, setReadList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [sort, setrSort] = useState('')
    useEffect(() => {
        const storeWishlist = getStoreWishList()
        const storeWishlistInt = storeWishlist.map(id => parseInt(id))
        const wishesList = allProduct.filter(product => storeWishlistInt.includes(product.id))
        setWishlist(wishesList)
    }, [allProduct])

    useEffect(() => {
        const storedReadList = getStoreReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allProduct.filter(product => storedReadListInt.includes(product.id))
        setReadList(readBookList)
        const total = readBookList.reduce((sum, product) => sum + (product.price || 0), 0)
        setTotalPrice(total)
    }, [allProduct])


    const handleViewType = (viewType) => {
        setView(viewType)
    }
const sortHandle = sortType => {
    setrSort(sortType)
}
    return (
        <div className='mb-24'>
            <div className='bg-purple-500 p-12 text-center text-white space-y-6 '>
                <h2>Dashboard</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className='btn mr-6' onClick={() => handleViewType('readList')}>cart {readList.length} </button>

                <button className='btn' onClick={() => handleViewType('wishlist')}>wishlist {wishlist.length}</button>
            </div>


            {view === 'readList' ? (

                <ul>
                    <div className='flex justify-around mt-4 '>
                        <div>
                            <h2 className='text-3xl text-bold'>Cart</h2>
                        </div>
                        <div className='text-3xl text-bold flex justify-center items-center gap-4'>
                            <h2>Total cost :{totalPrice}</h2>
                          
                        </div>

                    </div>
                    <div className='flex flex-col items-center'>
                        {
                            readList.map(product => (

                                <li key={product.id} className='flex justify-center mt-6 gap-6 bg-slate-100 w-full max-w-[900px] p-4 items-center rounded-lg'>

                                    <img className='h-[150px] rounded-lg' src={product.img} alt={product.title} />
                                    <div className='text-center'>
                                        <p>{product.title}</p>
                                        <p>{product.description}</p>
                                        <p>{product.price}</p>
                                    </div>

                                </li>
                            ))}
                    </div>
                </ul>

            )
               : (
                    <ul className='flex flex-col items-center mt-3'>
                        <li className='text-3xl text-bold'>wishlist</li>
                        {
                            wishlist.map(product => (
                                <li key={product.id} className='flex justify-center mt-6 gap-6 bg-slate-100 w-full max-w-[900px] p-4 items-center rounded-lg'>
                                    <img className='h-[150px] rounded-lg' src={product.img} alt={product.title} />
                                    <div className='text-center'>
                                        <p>{product.title}</p>
                                        <p>{product.description}</p>
                                    </div>

                                </li>
                            ))}
                    </ul>

                )}

        </div>

    );

};

export default Dashboard;
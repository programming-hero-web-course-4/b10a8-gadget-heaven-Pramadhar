import React from 'react';
import bannerImage from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
        <div className="hero rounded-lg bg-purple-500  text-white relative  pb-60">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with </h1>
                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn rounded-lg">Shop Now</button>
                </div>
            </div>
           
        </div>
<div className='relative -mt-[225px] flex justify-center'>
<img src={bannerImage} className='w-3/5 rounded-lg h-[503px]' alt="" />
</div>
<div className="bg-white h-32"></div>
        </div>
       
    );
};

export default Banner;

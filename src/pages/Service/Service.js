import React from 'react';

const Service = ({ service }) => {
    const { title, img, price, rating, details } = service
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.split(0, 200)}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
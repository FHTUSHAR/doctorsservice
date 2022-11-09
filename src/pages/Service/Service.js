import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, img, price, rating, details } = service
    return (
        <div className=''>

            <div className="card w-96 bg-base-100 shadow-xl mt-5">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.split(0, 100)}</p>

                    <div className='grid grid-cols-2'>
                        <p className='font-bold'> Rating :{rating}stars</p>
                        <p className='font-bold'>Price :${price}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary px-5">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
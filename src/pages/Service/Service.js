import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { title, img, price, rating, details, _id } = service
    return (
        <div className='lg:ml-7 sm:ml-24'>

            <div className="card w-96 bg-slate-800 text-white shadow-xl mt-5">
                <figure className="px-10 pt-10">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>

                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-start">{title}</h2>
                    <p className='text-start'>{details.split('', 100)}</p>

                    <div className='grid grid-cols-2'>
                        <p className='font-bold'> Rating :{rating}stars</p>
                        <p className='font-bold'>Price :${price}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary px-5"><Link to={`/services/${_id}`}>See Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
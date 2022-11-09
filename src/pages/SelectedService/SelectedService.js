import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SelectedService = () => {
    const selectedService = useLoaderData();
    const { title, img, price, rating, _id, details } = selectedService;
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl mt-5">
                <figure className="px-10 pt-10">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>

                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>

                    <div className='grid grid-cols-2'>
                        <p className='font-bold'> Rating :{rating}stars</p>
                        <p className='font-bold'>Price :${price}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SelectedService;
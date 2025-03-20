import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const update = useLoaderData()
    console.log('update', update)
    const navigate = useNavigate()
    const [reviews, setReviews] = useState(update)
    const notify = () => toast("Sucessfully added !");
    const handleUpdate = (event) => {
        event.preventDefault();
        const updatereview = event.target.review.value;
        reviews.review = updatereview;
        fetch(`https://doctors-services-server.vercel.app/myreview/${update._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                notify()
                navigate('/myreview')
            })
            .catch(err => console.error(err))
        event.target.reset()
    }
    return (
        <div className='flex justify-center  w-full h-[calc(100vh-230px)]'>
            <div className='grid grid-cols-1 lg:grid-cols-1 gap-5 mx-auto mb-9 w-full '>
                <form onSubmit={handleUpdate} className=' ml-44'>
                    <div className='mb-3 w-1/2'>
                        <p className='text-md font-normal'>Title</p>
                        <input type="text" placeholder="First name" defaultValue={update.title} readOnly className="input input-bordered input-primary w-full " />
                    </div>
                    <div>
                        <p className='text-md  font-normal'>Add New Review</p>
                        <input type="text"  name='review' placeholder="review" defaultValue={update.review} className="input input-bordered input-primary mb-9  py-2 w-1/4 h-32" />
                    </div>
                    <div>
                        <input type="submit" placeholder="submit" className="btn btn-primary px-9 " />
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Update;
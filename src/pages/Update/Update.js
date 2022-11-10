import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const update = useLoaderData()
    const navigate = useNavigate()
    const [reviews, setReviews] = useState(update)
    const handleUpdate = (event) => {
        event.preventDefault();
        const review = event.target.review.value;
        console.log(reviews)
        console.log(review)
        reviews.review = review;
        console.log(reviews)
        // setReviews(review)
        console.log(update.service_id)
        fetch(`http://localhost:5000/myreview/${update.service_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/myreview')
            })
            .catch(err => console.error(err))

    }
    return (
        <div className='flex justify-center w-1/2'>
            <div className='grid grid-cols-1 lg:grid-cols-1 gap-5 mx-auto mb-9 w-full '>
                <form onSubmit={handleUpdate} className=' ml-44'>
                    <div>
                        <p className='text-xl font-bold'>Title</p>
                        <input type="text" placeholder="First name" defaultValue={update.title} readOnly className="input input-bordered input-primary w-full " />
                    </div>
                    <div>
                        <p className='text-xl font-bold'>Add New Review</p>
                        <input type="text" name='review' placeholder="review" defaultValue={update.review} className="input input-bordered input-primary mb-9 px-32 py-16 " />
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
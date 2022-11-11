import React, { useEffect, useState } from 'react';

const AllReview = ({ _id }) => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://doctors-services-server.vercel.app/allreview/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(error => console.error(error))
    }, [reviews])
    return (
        <div>
            <h2>All review</h2>
            {
                reviews.length > 0 ?
                    <>
                        {
                            reviews.map(review => <div key={review._id}>
                                <div className="overflow-x-auto w-full">
                                    <table className="table w-full">

                                        <thead>
                                            <tr>

                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Review</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                {
                                                                    review?.img &&
                                                                    <img src={review.img} alt="Avatar Tailwind CSS Component" />
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{review.name}</td>

                                                <td>{review.review}</td>

                                            </tr>
                                        </tbody>

                                    </table>
                                </div>

                            </div>)
                        }
                    </>
                    :
                    <>
                        <h1 className='flex justify-center font-bold text-2xl'>No review </h1>
                    </>
            }
        </div>
    );
};

export default AllReview;
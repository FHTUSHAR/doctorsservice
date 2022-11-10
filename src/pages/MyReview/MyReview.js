import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaTrash } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const myreviews = useLoaderData()
    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('doctorToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [user?.email])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to cancel this item')
        if (proceed) {
            // fetch(`https://gineus-car-server.vercel.app/orders/${id}`, {
            //     method: 'DELETE',
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.deletedCount > 0) {
            //             alert("Successfully deleted")
            //             const rest = review.filter(rev => rev._id !== id);
            //             setReview(rest)
            //         }
            //         console.log(data)
            //     })
        }
    }



    return (
        <div className='p-8'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Review</title>
            </Helmet>
            <h2 className='text-3xl font-bold'>All review</h2>
            {
                reviews.map(review => <div key={review._id}>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <thead>
                                <tr>

                                    <th>Image</th>
                                    <th>title</th>
                                    <th>Review</th>
                                    <th>Delete</th>

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
                                    <td>{review.title}</td>

                                    <td>{review.review}</td>
                                    <td><button onClick={() => handleDelete(review.service_id)}><FaTrash /></button></td>

                                </tr>
                            </tbody>

                        </table>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyReview;
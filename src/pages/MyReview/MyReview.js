import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [reviews, setReviews] = useState([])

    const myreviews = useLoaderData()
    const notify = () => toast("Successfully Deleted");
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
        console.log(id)
        const proceed = window.confirm('Are you sure to cancel this item')
        if (proceed) {
            fetch(`http://localhost:5000/myreview/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        notify()
                        const rest = reviews.filter(rev => rev.service_id !== id);
                        setReviews(rest)
                    }
                    console.log(data)
                })
        }
    }
    const handleUpdate = (id) => {
        navigate(`/update/${id}`)
    }



    return (
        <div className='p-8'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Review</title>
            </Helmet>
            <ToastContainer />

            <h2 className='text-3xl font-bold'>All review</h2>
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
                                                <th>title</th>
                                                <th>Review</th>
                                                <th>Delete</th>
                                                <th>Edit</th>

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
                                                <td><button onClick={() => handleUpdate(review.service_id)}><FaUserEdit /></button></td>

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

export default MyReview;
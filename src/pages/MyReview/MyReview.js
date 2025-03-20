import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaTrash, FaUserEdit } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  const myreviews = useLoaderData();
  const notify = () => toast("Successfully Deleted");
  useEffect(() => {
    fetch(
      `https://doctors-services-server.vercel.app/myreview?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("doctorToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [user?.email]);
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure to cancel this item");
    if (proceed) {
      fetch(`https://doctors-services-server.vercel.app/myreview/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            notify();
            const rest = reviews.filter((rev) => rev._id !== id);
            setReviews(rest);
          }
          console.log(data);
        });
    }
  };
  console.log(reviews);
  const handleUpdate = (id) => {
    console.log(id);
    navigate(`/update/${id}`);
  };

  return (
    <div className="p-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Review</title>
      </Helmet>
      <ToastContainer />

      <h2 className="text-3xl font-bold">All review</h2>
      {reviews.length > 0 ? (
        <>
          <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-700">
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Review</th>
            <th className="px-6 py-3 text-center">Delete</th>
            <th className="px-6 py-3 text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border">
                    {review.img && (
                      <img
                        src={review.img}
                        alt="Review Avatar"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">{review.title}</td>
              <td className="px-6 py-4">{review.review}</td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => handleDelete(review._id)}
                  className="text-red-600 hover:text-red-800 transition duration-300"
                  aria-label="Delete Review"
                >
                  <FaTrash size={18} />
                </button>
              </td>
              <td className="px-6 py-4 text-center">
                <Link to={`/update/${review._id}`}>
                  <button
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                    aria-label="Edit Review"
                  >
                    <FaUserEdit size={18} />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </>
      ) : (
        <>
          <h1 className="flex justify-center font-bold text-2xl">No review </h1>
        </>
      )}
    </div>
  );
};

export default MyReview;

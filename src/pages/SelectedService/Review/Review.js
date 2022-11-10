import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import AllReview from '../AllReview/AllReview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = ({ selectedService }) => {
    const { user } = useContext(AuthContext)
    const { title, _id } = selectedService;
    const notify = () => toast("Successfully Inserted!");
    const handleSubmit = (event) => {
        event.preventDefault()
        const details = event.target.details.value;
        const addReview = {
            service_id: _id,
            name: user.displayName,
            img: user.photoURL,
            review: details,
            email: user.email,
            title: title
        }

        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    notify()
                    event.target.reset()
                }
                console.log(data)
            })
            .catch(error => console.error(error))
        console.log(details, user.displayName, user.photoURL, _id)
    }
    return (

        <div>
            <ToastContainer />
            {
                user?.uid ? <>
                    <div>
                        < h2 className='font-bold ml-8' > Review</h2 >
                        <form className='p-4' onSubmit={handleSubmit}>
                            <div> <input type="text" name='details' placeholder="Details" className="input py-10 input-bordered input-accent w-3/4 mb-4 " /></div>
                            <div><input type="submit" placeholder="Type password" className="btn btn-primary px-9 " /></div>
                        </form>


                        <AllReview key={_id} _id={_id}></AllReview>
                    </div >
                </> : <>
                    <h1 className='text-2xl'>Please login to add review</h1>
                    <AllReview key={_id} _id={_id}></AllReview>
                </>
            }
        </div>



    );
};

export default Review;
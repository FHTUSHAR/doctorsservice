import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import AllReview from '../AllReview/AllReview';

const Review = ({ _id }) => {
    const { user } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const details = event.target.details.value;
        const addReview = {
            service_id: _id,
            name: user.displayName,
            img: user.photoURL,
            review: details,
            email: user.email
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
                    alert('Sucessfully inserted')
                    event.target.reset()
                }
                console.log(data)
            })
            .catch(error => console.error(error))
        console.log(details, user.displayName, user.photoURL, _id)
    }
    return (
        <div>
            <h2 className='font-bold ml-8'>Review</h2>
            <form className='p-4' onSubmit={handleSubmit}>
                <div> <input type="text" name='details' placeholder="Details" className="input py-10 input-bordered input-accent w-3/4 mb-4 " /></div>
                <div><input type="submit" placeholder="Type password" className="btn btn-primary px-9 " /></div>
            </form>


            <AllReview key={_id} _id={_id}></AllReview>
        </div>
    );
};

export default Review;
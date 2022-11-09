import React from 'react';

const AddService = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const addService = {
            title: title,
            img: img,
            price: price,
            rating: rating,
            details: details
        }
        console.log(addService)
        fetch('http://localhost:5000/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Sucessfully inserted')
                    form.reset()
                }
                console.log(data)
            })
            .catch(error => console.error(error))



    }
    return (
        <div className="card lg:card-side  p-4">

            <div className="card-body w-1/2 border shadow-xl rounded-lg p-4 text-center">
                <h2 className='text-2xl font-bold text-blue-600'>Add Service</h2>
                <form className='p-4' onSubmit={handleSubmit}>
                    <div><input type="text" name='title' placeholder="Type Title" className="input input-bordered input-accent w-3/4 mb-4  " /></div>
                    <div><input type="text" name='img' placeholder="Type imgURL" className="input input-bordered input-accent w-3/4 mb-4  " /></div>
                    <div> <input type="text" name='price' placeholder="Type price" className="input input-bordered input-accent w-3/4 mb-4 " /></div>
                    <div> <input type="text" name='rating' placeholder="Ratings" className="input input-bordered input-accent w-3/4 mb-4 " /></div>
                    <div> <input type="text" name='details' placeholder="Details" className="input input-bordered input-accent w-3/4 mb-4 " /></div>
                    <div><input type="submit" placeholder="Type password" className="btn btn-primary px-9 " /></div>
                </form>


            </div>


        </div>
    );
};

export default AddService;
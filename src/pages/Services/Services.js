import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/homeServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-5xl'>Our services</h1>
            <div className='grid grid-cols-3'>

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <button className='btn btn-primary flex justify-center'>See All</button>
        </div>
    );
};

export default Services;
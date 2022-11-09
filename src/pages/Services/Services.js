import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:5000/homeServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-center text-5xl mt-10'>Our services</h1>
                <div className='grid  lg:grid-cols-3 sm:grid-cols-1'>

                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
            <div className='flex justify-center mb-7'>
                <button onClick={() => navigate('/services')} className='btn btn-primary px-8 '>See All</button>
            </div>


        </div>
    );
};

export default Services;
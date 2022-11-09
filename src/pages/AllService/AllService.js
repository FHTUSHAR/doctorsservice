import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Helmet } from "react-helmet";
import 'react-photo-view/dist/react-photo-view.css';

const AllService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-8'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Services</title>
            </Helmet>
            <h1 className='text-center text-5xl'>Our services</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AllService;
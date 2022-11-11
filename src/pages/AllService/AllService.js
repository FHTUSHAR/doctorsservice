import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Helmet } from "react-helmet";
import 'react-photo-view/dist/react-photo-view.css';
import { TailSpin } from 'react-loader-spinner'

const AllService = () => {
    const [services, setServices] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetch('https://doctors-services-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setLoader(false)
                setServices(data)
            })
    }, [])
    if (loader) {
        return <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    }
    return (
        <div className='mb-8'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Services</title>
            </Helmet>
            <h1 className='text-center font-bold text-4xl my-3'>Our services</h1>
            <hr />
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 '>

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AllService;
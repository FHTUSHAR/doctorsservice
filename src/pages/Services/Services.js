import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Service from '../Service/Service';
import { TailSpin } from 'react-loader-spinner'

const Services = () => {
    const { loading } = useContext(AuthContext)
    const [services, setServices] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://doctors-services-server.vercel.app/homeServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (loading) {
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
        <div>
            <div>
                <h2 className='text-center text-3xl w-2/3 mx-auto mb-3 font-semibold h-auto border-double border-4  text-blue-500 border-indigo-600 mt-2 py-3'>Service</h2>
                <hr />
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
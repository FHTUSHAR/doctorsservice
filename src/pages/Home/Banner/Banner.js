import React from 'react';
import bg from '../../../images/doc1.png'
const Banner = () => {
    return (
        <div className="card lg:card-side rounded-none banner p-4">
            <div className='w-1/2 card-body  rounded-lg p-4 text-center flex justify-center items-center '>
                <div>
                    <h2 className='text-5xl font-bold text-sky-900'>Dr.Shajedul Islam </h2>
                    <p className='mt-4 font-semibold text-2xl text-white'>MBBS,BCS(Health)<br></br> MD(Cardiology),FCPS()Medicine<br></br> PGT(Medicine)<br></br> Health Ministry,Mohakhali,Dhaka</p>
                </div>

            </div>
            <div className=" w-1/2 ">
                <figure ><img className='w-2/4 rounded-full mt-60' src={bg} alt="Album" /></figure>
            </div>

        </div>
    );
};

export default Banner;
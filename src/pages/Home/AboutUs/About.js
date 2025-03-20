import React from 'react';
import img1 from '../../../images/about3.jpg'
import img2 from '../../../images/doc1.png'


const About = () => {
    return (
        <div className='p-6 h-auto mb-5 block overflow-hidden bg-slate-800'>

            <h2 className='text-center text-3xl text-white w-2/3 mx-auto mb-8 font-semibold h-auto border-double border-4 border-indigo-600 py-3'>About Me</h2>
            <div className="card lg:card-side sm-w-full bg-slate-800 rounded-none text-white flex items-center">
                <div className="card-body w-1/2 sm:w-full flex items-center ">
                    <p className='text-xl'>A dedicated medical professional with a strong academic background and extensive clinical expertise, holding an MBBS degree from COMEC and an MD in Cardiology. Currently in the final stages of the FCPS program in Medicine, further enhancing proficiency in the field. Committed to patient care and evidence-based medical practice, striving to provide the highest standard of treatment for optimal patient outcomes.</p>

                </div>
                <div className='w-1/2 sm:w-full'>
                    <img className=' w-1/2 rounded-md left ml-8 ' src={img2} alt="Album" />
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import img1 from '../../../images/about3.jpg'
import img2 from '../../../images/doc1.png'


const About = () => {
    return (
        <div className='p-6 h-auto mb-28 block overflow-hidden bg-slate-800'>

            <h2 className='text-center text-3xl text-white w-2/3 mx-auto mb-3 font-semibold h-auto border-double border-4 border-indigo-600 py-3'>About Me</h2>
            <div className="card lg:card-side sm-w-full bg-slate-800 rounded-none text-white">
                <div className="card-body w-1/2 sm:w-full ">
                    <p className='text-xl'>I am Dr.Shajedul Rahman Shaju.I complete my MBBS degree from COMEC.Currently I am doing my FCPS degree.I am in the last of the course.I am doing my FCPS degee in Medicine.I have also received my MD degree in Cardiology.So I can hope I will provide you the best treatment.</p>

                </div>
                <div className='w-1/2 sm:w-full'>
                    <img className=' w-1/2 rounded-full left ml-8 ' src={img2} alt="Album" />
                </div>
            </div>
        </div>
    );
};

export default About;
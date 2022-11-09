import React from 'react';
import img1 from '../../../images/about3.jpg'
import img2 from '../../../images/doc1.png'

const About = () => {
    return (
        <div className='p-6 h-72 mb-28 block'>
            <h2 className='text-center text-3xl font-semibold h-auto'>About Me</h2>
            <div className="card lg:card-side bg-base-100 rounded-none ">
                <div className="card-body w-1/2 sm:w-full ">

                    <p className='text-xl'>I am Dr.Shajedul Rahman Shaju.I complete my MBBS degree from COMEC.Currently I am doing my FCPS degree.I am in the last of the course.I am doing my FCPS degee in Medicine.I have also received my MD degree in Cardiology.So I can hope I will provide you the best treatment.</p>

                </div>
                <div className='w-1/2 sm:w-full'>
                    <img className=' w-1/2 rounded-full left ml-8 ' src={img2} alt="Album" />
                    {/* <img className='absolute top-1/3 w-20 rounded-full left-10' src={img2} alt="Album" /> */}
                </div>
            </div>
        </div>
    );
};

export default About;
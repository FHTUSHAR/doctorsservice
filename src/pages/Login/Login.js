import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import img1 from '../../images/login1.webp'

const Login = () => {
    const { user, loginUser, googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                setError('')
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }
    const googleBtn = () => {
        googleSignIn()
            .then(result => {
                setError('')
                const user = result.user;
            })
            .catch(err => {
                setError(err.message)
                console.error(err)
            })
    }
    return (

        <div className="card lg:card-side  p-4">
            <div className='w-1/2'>
                <figure ><img className='w-3/4 rounded-lg' src={img1} alt="Album" /></figure>
            </div>
            <div className="card-body w-1/2 border shadow-xl rounded-lg p-4 text-center">
                <h2 className='text-2xl font-bold text-blue-600'>Login</h2>
                <form className='p-4' onSubmit={handleSubmit}>
                    <div><input type="email" name='email' placeholder="Type email" className="input input-bordered input-accent w-3/4 mb-4  " /></div>
                    <div> <input type="password" name='password' placeholder="Type password" className="input input-bordered input-accent w-3/4 mb-4 " /></div>
                    <div><input type="submit" placeholder="Type password" className="btn btn-primary px-9 " /></div>
                </form>
                <div><button onClick={googleBtn} className="btn btn-outline btn-success w-1/3 justify-between"> <FaGoogle className=' border-green-600 text-2xl rounded-full' />Google <span></span></button></div>
                <p>Don't have an account.Please <Link to={'/register'} className='text-blue-700'>Register</Link></p>
                <p>{error}</p>
            </div>

        </div>


    );
};

export default Login;
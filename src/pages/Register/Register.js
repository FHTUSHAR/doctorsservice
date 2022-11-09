import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { user, createUser, googleSignIn, userProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.img.value;
        console.log(name, img, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                handleUpdateUserProfile(name, img)
                navigate('/')
                form.reset()
                setError('')
            })
            .catch(error => {
                setError(error)
                console.error(error.message)
            })
    }
    const googleBtn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setError('')
                navigate('/')
            })
            .catch(err => {
                setError(err)
                console.error(err.message)
            })
    }
    const handleUpdateUserProfile = (name, img) => {
        const profile = {
            displayName: name,
            photoURL: img
        }
        userProfile(profile)
            .then(() => { })
            .catch((e) => { setError(error.message) })
    }

    return (
        <div className="card lg:card-side  p-4">
            <div className='w-1/2'>
                <figure ><img className='w-3/4 rounded-lg' src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            </div>
            <div className="card-body w-1/2 border shadow-xl rounded-lg p-4 text-center">
                <h2 className='text-2xl font-bold text-blue-600'>Register</h2>
                <form className='p-4' onSubmit={handleSubmit}>
                    <div><input type="text" name='name' placeholder="Type Name" className="input input-bordered input-accent w-3/4 mb-4  " /></div>
                    <div><input type="email" name='email' placeholder="Type email" className="input input-bordered input-accent w-3/4 mb-4  " /></div>
                    <div> <input type="password" name='password' placeholder="Type password" className="input input-bordered input-accent w-3/4 mb-4 " /></div>
                    <div> <input type="text" name='img' placeholder="Image URL" className="input input-bordered input-accent w-3/4 mb-4 " /></div>
                    <div><input type="submit" placeholder="Type password" className="btn btn-primary px-9 " /></div>
                </form>

                <div><button onClick={googleBtn} className="btn btn-outline btn-success w-1/3 justify-between"> <FaGoogle className=' border-green-600 text-2xl rounded-full' />Google <span></span></button></div>
                <p>Already have an account.Please <Link to={'/login'} className='text-blue-700'>Login</Link></p>
                <p>{error}</p>
            </div>


        </div>
    );
};

export default Register;
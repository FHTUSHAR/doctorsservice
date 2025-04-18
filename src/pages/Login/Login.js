import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import img1 from '../../images/login1.webp'
import { TailSpin } from 'react-loader-spinner'

const Login = () => {
    const { loginUser, googleSignIn, loading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                fetch('https://doctors-services-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('doctorToken', data.token)
                        // navigate(from, { replace: true });
                    })
                    .catch(error => console.error(error))
                form.reset()

                setError('')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }
    const googleBtn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                fetch('https://doctors-services-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('doctorToken', data.token)
                        // navigate(from, { replace: true });
                    })
                    .catch(error => console.error(error))
                navigate(from, { replace: true });
                setError('')
            })
            .catch(err => {
                setError(err.message)
                console.error(err)
            })
    }
    if (!error) {
        if (loading) {
            return <div className='flex justify-center min-h-[calc(100vh-240px)] items-center' width={'100%'} >
                         <TailSpin
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    </div>
        }
    }


    return (

        <div className="card lg:card-side  p-4">
            <div className='w-1/2'>
                <figure ><img className='w-3/4 rounded-lg' src={img1} alt="Album" /></figure>
            </div>
            <div className="card-body w-1/2 border shadow-xl rounded-lg p-4 text-center">
                <h2 className='text-2xl font-bold text-blue-600'>Login</h2>
                <form className='p-4' onSubmit={handleSubmit}>
                    <div><input type="email" name='email' placeholder="Type email" className="input input-bordered input-accent w-3/4 mb-4  " required /></div>
                    <div> <input type="password" name='password' placeholder="Type password" className="input input-bordered input-accent w-3/4 mb-4 " required /></div>
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
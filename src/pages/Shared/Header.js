import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(AuthContext)
    const logOutBtn = () => {
        logOut()
            .then()
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <div className="navbar bg-blue-200 px-12">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Item 1</Link></li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li><Link>Item 3</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-3xl">Health Care</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li >
                        <Link to={'/services'}>
                            Services
                        </Link>

                    </li>
                    <li>
                        <Link>Blog</Link>
                    </li>


                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {
                        user?.uid ?
                            <>
                                <li><Link>My Review</Link></li>
                                <li><Link to={'/addservices'}>Add Service</Link></li>
                                <li><button onClick={logOutBtn}>Log Out</button></li>

                            </>
                            :
                            <>
                                <li><Link to={'/login'}>Login</Link></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;
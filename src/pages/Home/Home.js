import React, { useContext } from 'react';
import './Home.css'
import { AuthContext } from '../../Context/AuthProvider';
import Banner from './Banner/Banner';
import Services from '../Services/Services';
import About from './AboutUs/About';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;
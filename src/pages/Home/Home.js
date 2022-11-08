import React, { useContext } from 'react';
import './Home.css'
import { AuthContext } from '../../Context/AuthProvider';
import Banner from './Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;
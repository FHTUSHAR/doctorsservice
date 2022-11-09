import React, { useContext } from 'react';
import './Home.css'
import { AuthContext } from '../../Context/AuthProvider';
import Banner from './Banner/Banner';
import Services from '../Services/Services';
import About from './AboutUs/About';
import { Helmet } from "react-helmet";

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Health Care</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;
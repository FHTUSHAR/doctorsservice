import React, { useContext } from 'react';
import './Home.css'
import { AuthContext } from '../../Context/AuthProvider';
import Banner from './Banner/Banner';
import Services from '../Services/Services';
import About from './AboutUs/About';
import { Helmet } from "react-helmet";
import FAQ from './FAQ/FAQ';
import Gellary from '../Gallery/Gellary';

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
            <Gellary/>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
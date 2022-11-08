import React, { useContext } from 'react';
import './Home.css'
import { AuthContext } from '../../Context/AuthProvider';

import bg2 from '../../images/bg2.webp'
import Banner from './Banner/Banner';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;
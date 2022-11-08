import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
};

export default Home;
import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import ItemListContainer from './ItemListContainer'

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
        {
            loading ? 
            <Loader/>
            : 
            <ItemListContainer/>
        }

        </>
    )
}

export default Home
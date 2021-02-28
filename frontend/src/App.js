import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import { CircularProgress, Typography } from '@material-ui/core';


import { Products, Navbar } from './components';

const App = () => {

   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const { data } = await Axios.get("http://localhost:4000/api/product");
            setLoading(false);
            setProducts(data);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }   
    }

    useEffect(() => {
        fetchProducts();
    }, []); 

    return (
        <div>
            <Navbar />
            {loading ? <CircularProgress color="secondary" /> :
                error ? <Typography variant="subtitle1">There is not products in the website</Typography>
                    : (<Products products={products} />)
            }       
        </div>
    )
}

export default App


import React, { useState, useEffect } from 'react'

import { Products, Navbar } from './components';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:4000/api/product');
        //const data = await response.data;
        setProducts(response);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);

    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App


import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './productsStyle';

const products = [
    {
        id: 1,
        name: "Laptop",
        description: "HP pavilon",
        price: 12600.98,
        categories: [
            {
                
            }
        ],
        images: {
            location: "https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_1280.png",
            main: true
        }       
    },
    {
        id: 2,
        name: "Laptop",
        description: "HP pavilon",
        price: 12600.98,
        categories: [
            {
                
            }
        ],
        images: {
            location: "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg",
            main: true
        }        
    },
];

const Products = () => {

    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4} >
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
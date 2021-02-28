import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './productsStyle';

const Products = ({products}) => {

    const isEmpty = (products.data ? true : false);

    const EmptyProducts = () => (
      <Grid container justify="center" spacing={4}>
        <Typography variant="subtitle1">There is not products in the website</Typography>
      </Grid>
    )

    const FilledProducts = () => (
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    )

    const classes = useStyles();

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {isEmpty ? <EmptyProducts /> : <FilledProducts />}
      </main>
    )
}

export default Products
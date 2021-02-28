import React from 'react';
import {Container,Typography,Button,Grid } from '@material-ui/core';

import useStyles from './cartStyles';

function Cart({cart}) {
    const isEmpty = true;
    const classes = useStyles();

    const EmptyCart = () => {
        <Grid container justify="center" spacing={4}>
          <Typography variant="subtitle1">
            There is not products in the website
          </Typography>
        </Grid>;
    }
    const FilledCart = () => {
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
              <Grid item xs={12} sm={4} key={item._id} >
                  <div>{item.name}</div>
              </Grid>
          ))}
        </Grid>;
        <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty cart</Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
        </div>
    }

    return (
        <Container>
            <div className={classes.toolbar}>
                <Typography className={classes.title} variant="h3">Your shopping cart</Typography>
                {isEmpty ? < EmptyCart /> : <FilledCart /> }
            </div>
        </Container>
    )
}

export default Cart

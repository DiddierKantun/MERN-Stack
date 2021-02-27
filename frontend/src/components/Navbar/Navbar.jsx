import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/logo.png';
import useStyles from './navbarStyles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <ToolBar>
                    <Typography>
                        <img src={logo} alt="e-commerce-logo" height="25px" className={classes.image} /> E-Commerce
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show card items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Navbar

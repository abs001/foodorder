import React from "react";
import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg' 
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes['header-text']}>ReactMeal</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Meals'/>
            </div>
        </Fragment>
    );
};

export default Header;

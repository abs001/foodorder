import React from "react";
import mealsImage from '../../assets/meals.jpg' 
import classes from './Header.module.css'

function Header(props){
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeal</h1>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Meals Image'></img>
        </div>
    </React.Fragment>
};

export default Header;

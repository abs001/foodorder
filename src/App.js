import React from 'react';
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layouts/Header.js';
import Meals from './components/Meals/Meals';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    };
    const hideCartHandler = () => {
        setCartIsShown(false);
    }; 
    return (
        <React.Fragment>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </React.Fragment>
    );
}

export default App;

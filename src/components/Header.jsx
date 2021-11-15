import React, { useState, useContext } from "react";
// import "@styles/Header.scss";
import "@styles/Header.scss"; //Esta es la forma que queda al agregar el alias en el webpack.config.js
import Menu from '@components/Menu';
import MyOrder from "@containers/MyOrder";
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {

    const [toggle, setToggle] = useState(false); //Se deja en False para que no se muestre, se muestra solo con click

    const [toogleOrders, setToogleOrders] = useState(false); //Se deja en False para que no se muestre, se muestra solo con click

    const { state } = useContext(AppContext); // Se obtiene el state del context

    const handleToggle = () => {
        setToggle(!toggle); //Se cambia el estado del toggle a true para que se muestre
    };

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={() => setToogleOrders(!toogleOrders)}>
                        <img src={shoppingCart} alt="shopping cart" />          
                        {state.cart.length > 0 ? <div>{state.cart.length}</div>: null } {/* Si el state tiene algo, se muestra el numero de items, sino se muestra nada */}
                    </li>
                </ul>
            </div>
            {/* Sí toogle es true se muestra el menu, si es false entonces no se muestra el menu */}
            {toggle && <Menu />} 
            {toogleOrders && <MyOrder />}
        </nav>
  );
};

export default Header;

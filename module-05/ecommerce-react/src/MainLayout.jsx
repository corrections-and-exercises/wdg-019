import {Outlet} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import {useState} from 'react';
import {countProductsInCart, getTotal} from './utils/cartUtils.js';
export default function MainLayout() {
    const [cart, setCart] = useState([]);
    return (
        <>
            <Navbar
                amountInCart={countProductsInCart(cart)}
                total={getTotal(cart)}
            />
            <Outlet context={{cart, setCart}} />
        </>
    );
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainLayout from './MainLayout.jsx';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {path: '/products/:category', element: <Products />},
            {path: '/cart', element: <Cart />},
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);

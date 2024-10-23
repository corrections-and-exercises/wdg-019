import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import Root from './routes/root.jsx';
import Home from './routes/home.jsx';
import PokemonDetail from './routes/pokemondetail.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Home />} />
            <Route path='/pokemon/:name' element={<PokemonDetail />} />
        </Route>
    )
);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

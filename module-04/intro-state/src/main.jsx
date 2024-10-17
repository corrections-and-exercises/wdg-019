import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    // to keep it simple we remove StrictMode for this demo
    // <StrictMode>
    <App />
    // </StrictMode>,
);

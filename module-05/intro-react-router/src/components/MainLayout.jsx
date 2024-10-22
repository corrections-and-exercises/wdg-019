import {Outlet} from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

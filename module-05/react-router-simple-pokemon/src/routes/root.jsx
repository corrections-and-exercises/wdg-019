import {Outlet} from 'react-router-dom';
import Header from '../ui/header.jsx';
export default function Root() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

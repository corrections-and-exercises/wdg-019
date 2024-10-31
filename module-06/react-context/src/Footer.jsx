import {useUserContext} from './context/UserContext.jsx';

export default function Footer() {
    const {user, setUser} = useUserContext();
    return (
        <footer>
            <p>footer</p>
            <p>{user.name}</p>
        </footer>
    );
}

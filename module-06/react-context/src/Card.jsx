import {useUserContext} from './context/UserContext.jsx';
export default function Card() {
    const {user, setUser} = useUserContext();
    return (
        <div>
            <p>Card</p>
            <p>{user.name}</p>
        </div>
    );
}

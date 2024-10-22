import {useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
export default function Todo() {
    const {id, name} = useParams();
    const [todo, setTodo] = useState(null);

    console.log(name);
    console.log(id);
    const navigate = useNavigate();

    // get data from localstorage
    // filter with id from params

    useEffect(() => {
        async function fetchTodo() {
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/todos/${id}`
                );
                if (!res.ok) throw new Error('Request failed');
                const data = await res.json();
                setTodo(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTodo();
    }, [id]);
    return (
        <div>
            {todo && (
                <>
                    <h2>Todo</h2>
                    <p>{todo.title}</p>
                </>
            )}
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

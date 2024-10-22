import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
export default function Home() {
    console.log(crypto.randomUUID());
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodo() {
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/todos`
                );
                if (!res.ok) throw new Error('Request failed');
                const data = await res.json();
                setTodos(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTodo();
    }, []);
    return (
        <div className='flex flex-col gap-2'>
            {todos.map((todo) => {
                return (
                    <Link to={`/todo/${todo.id}`} key={todo.key}>
                        {todo.title}
                    </Link>
                );
            })}
        </div>
    );
}

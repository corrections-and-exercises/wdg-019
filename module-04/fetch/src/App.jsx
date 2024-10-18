import {useEffect, useState} from 'react';
const App = () => {
    const [posts, setPosts] = useState([]);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let ignore = false;
        async function fetchPosts() {
            try {
                const res = await fetch(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                if (!res.ok) throw new Error('Request failed');
                const data = await res.json();
                if (!ignore) {
                    setPosts(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();

        return () => {
            ignore = true;
        };
    }, []);

    async function fetchTodos() {
        try {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/todos'
            );
            if (!res.ok) throw new Error('Request failed');
            const data = await res.json();
            setTodos(data);
        } catch (error) {
            console.log(error);
        }
    }

    function handleClick() {
        if (todos.length > 0) return;
        fetchTodos();
    }
    return (
        <>
            <h1>Fetch</h1>
            <button onClick={handleClick}>Fetch Todos</button>
            {posts.map((p) => (
                <p>{p.title}</p>
            ))}
            <h3>Todos</h3>
            {todos.map((t) => (
                <p>{t.title}</p>
            ))}
        </>
    );
};

export default App;

import useFetch from '../hooks/useFetch.js';
export default function Todos() {
    const {
        error,
        loading,
        data: todos,
    } = useFetch('https://jsonplaceholder.typicode.com/todos');

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error</p>;
    }

    return (
        <div>
            <h2>Todos</h2>
            {todos?.map((todo) => (
                <p key={todo.id}>{todo.title}</p>
            ))}
        </div>
    );
}

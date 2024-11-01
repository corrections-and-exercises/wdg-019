import ToDoItem from './TodoItem.jsx';
// import {useToDoContext} from '../context/ToDoContext.jsx';
import {useContext} from 'react';
import {ToDoContext} from '../context/ToDoContext.jsx';
export default function ToDoList() {
    // const {todos, filter} = useToDoContext();
    const {todos, filter} = useContext(ToDoContext);

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed' && todo.completed) return true;
        if (filter === 'active' && !todo.completed) return true;
        return false;
    });
    return (
        <ul>
            {filteredTodos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

import {useToDoContext} from '../context/ToDoContext.jsx';
export default function ToDoItem({todo}) {
    const {dispatch} = useToDoContext();

    const toggleTodo = (id) => {
        dispatch({type: 'toggle', id});
    };
    return (
        <li className='flex items-center mb-2'>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className='mr-2'
            />
            {todo.text}
        </li>
    );
}

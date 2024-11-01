import {useState, createContext, useContext, useReducer} from 'react';

export const ToDoContext = createContext(null);

export function ToDoContextProvider({children}) {
    function todoReducer(state, action) {
        switch (action.type) {
            case 'add':
                return [
                    ...state,
                    {id: Date.now(), text: action.newItem, completed: false},
                ];

            case 'toggle':
                return state.map((todo) => {
                    if (todo.id === action.id) {
                        return {...todo, completed: !todo.completed};
                    }
                    return todo;
                });
        }
    }

    const [todos, dispatch] = useReducer(todoReducer, []);

    // const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    return (
        <ToDoContext.Provider value={{todos, dispatch, filter, setFilter}}>
            {children}
        </ToDoContext.Provider>
    );
}

export function useToDoContext() {
    const context = useContext(ToDoContext);

    if (!context)
        throw new Error(
            'useToDoContext must be used within a ToDoContextProvider'
        );

    return context;
}

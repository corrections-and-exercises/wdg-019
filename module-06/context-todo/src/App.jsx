import AddToDo from './components/AddToDo.jsx';
import ToDoList from './components/ToDoList.jsx';
import FilterComponent from './components/FilterComponent.jsx';
import {ToDoContextProvider} from './context/ToDoContext.jsx';
export default function App() {
    return (
        <div className='container mx-auto p-4'>
            <ToDoContextProvider>
                <AddToDo />
                <FilterComponent />
                <ToDoList />
            </ToDoContextProvider>
        </div>
    );
}

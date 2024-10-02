const todoListElement = document.getElementById('todo-list');

async function fetchTodos() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        );
        if (!response.ok) throw new Error('Request failed');
        const data = await response.json();
        displayTodos(data);
    } catch (error) {
        console.log(error);
    }
}

function displayTodos(todos) {
    todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.title;
        todoItem.classList.add('mb-2');

        if (todo.completed) {
            todoItem.classList.add('line-through', 'text-green-500');
        } else {
            todoItem.classList.add('text-red-500');
        }

        todoListElement.appendChild(todoItem);
    });
}

fetchTodos();

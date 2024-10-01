const form = document.querySelector('form');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('#reload');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = event.target.elements.userInput.value;

    if (!input) alert('Please provide an input');

    const newTask = {
        id: `task-${crypto.randomUUID().replaceAll('-', '')}`,
        content: input,
    };

    const newListItem = createListItem(newTask);
    ul.insertBefore(newListItem, ul.firstElementChild);

    const myTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    myTasks.unshift(newTask);
    localStorage.setItem('myTasks', JSON.stringify(myTasks));

    form.reset();
});

function createListItem(newTask) {
    const li = document.createElement('li');
    li.setAttribute('id', newTask.id);
    li.textContent = newTask.content;
    li.classList.add(
        'flex',
        'items-center',
        'justify-between',
        'w-full',
        'my-2'
    );

    // delete button

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add(
        'px-4',
        'py-2',
        'bg-red-500',
        'hover:bg-red-400',
        'text-white',
        'rounded'
    );

    // event listener

    deleteButton.addEventListener('click', () => {
        const itemToDelete = ul.querySelector(`#${newTask.id}`);

        const exisitingTasks =
            JSON.parse(localStorage.getItem('myTasks')) || [];

        localStorage.setItem(
            'myTasks',
            JSON.stringify(exisitingTasks.filter((t) => t.id !== newTask.id))
        );

        itemToDelete.remove();
    });

    li.appendChild(deleteButton);

    return li;
}

reloadBtn.addEventListener('click', () => {
    window.location.reload();
});

window.addEventListener('load', () => {
    // Get previous content from localStorage: key name "myTasks"
    const myTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    myTasks.forEach((t) => {
        const li = createListItem(t);
        ul.appendChild(li);
    });
});

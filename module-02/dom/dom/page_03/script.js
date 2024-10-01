const tasks = [
    'Complete the project',
    'Attend the meeting',
    'Write a report',
    'Review the code',
    'Fix the bugs',
    'Update the documentation',
    'Plan the next sprint',
    'Conduct user testing',
    'Optimize the performance',
    'Design',
];

const addItemBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const consoleBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = tasks[Math.floor(Math.random() * 10)];
    itemList.appendChild(newItem);
    itemList.scrollTop = itemList.scrollHeight;
});

alertBtn.addEventListener('click', () => {
    alert('This is an alert message!');
});

consoleBtn.addEventListener('click', () => {
    console.log('Button was clicked!');
});

console.log(`Discussion:
1. addEventListener:
   - Allows multiple event listeners of the same type to be added to an element.
   - Syntax: element.addEventListener('event', callback);
   - More flexible, can specify options like 'capture', 'once', and 'passive'.
   
2. onEvent properties:
   - Only one event handler can be assigned to an event property at a time.
   - Syntax: element.onevent = callback;
   - Simpler, but less flexible as it overrides any existing event handlers of the same type on the element.
`);

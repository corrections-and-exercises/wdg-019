const list = document.querySelector('#list');
const button = document.querySelector('button');

async function fetchData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Request failed');
        const data = await res.json();
        console.log(data);
        data.forEach((d) => createListElement(d));
    } catch (error) {
        console.log(error);
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts');

function createListElement(content) {
    const li = document.createElement('li');
    li.textContent = content.title;
    list.appendChild(li);
}

button.addEventListener('click', () => {
    console.log('click');
});

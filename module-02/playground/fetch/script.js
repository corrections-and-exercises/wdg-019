const container = document.querySelector('#container');

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => {
//         console.log(res);
//         if (!res.ok) throw new Error('Request failed');
//         return res.json();
//     })
//     .then((data) => data.forEach((el) => createParagraph(el)))
//     .catch((error) => console.log(error));

function createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content.title;
    container.appendChild(p);
}

// async function

async function fetchData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        console.log(res);

        if (!res.ok) throw new Error('Request failed');

        const data = await res.json();

        data.forEach((el) => createParagraph(el));
    } catch (error) {
        console.log(error);
    }
}

fetchData();

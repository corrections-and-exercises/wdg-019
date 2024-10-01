const form = document.getElementById('contact-form');
const outputParagraph = document.getElementById('output');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        outputParagraph.textContent = 'Please fill in all fields.';
        outputParagraph.classList.remove('bg-green-500');
        outputParagraph.classList.add('bg-red-500');
        return;
    }

    const template = `<ul>
                        <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Message: ${message}</li>
                      </ul>`;

    console.log(template);

    outputParagraph.innerHTML = template;
    outputParagraph.classList.remove('bg-red-500');
    outputParagraph.classList.add('bg-green-500');

    form.reset();
});

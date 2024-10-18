import {useState} from 'react';
export default function Contact() {
    const initialState = {
        name: '',
        email: '',
        tel: '',
        message: '',
    };
    const [formState, setFormState] = useState(initialState);

    function handleChange(event) {
        setFormState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (
            !formState.name ||
            !formState.email ||
            !formState.tel ||
            !formState.message
        ) {
            alert('input missing');
        }
        console.log(formState);
        // post request an den server
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Name
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={formState.name}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor='email'>
                Email
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor='tel'>
                Tel
                <input
                    type='tel'
                    name='tel'
                    id='tel'
                    value={formState.tel}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor='message'>
                Message
                <textarea
                    name='message'
                    id='message'
                    value={formState.message}
                    onChange={handleChange}
                ></textarea>
            </label>
            <button>Submit</button>
        </form>
    );
}

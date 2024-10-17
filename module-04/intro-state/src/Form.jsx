import {useState} from 'react';

// this is an example for an controlled component
// we add state to keep track of the changes of the form
//we directly bind the state to the input with the value attribute

export default function Form() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    // this function looks for the name attribut and uses it as the key for our formstate object
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        //Send to server
        //add to list

        console.log(formState);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    First name:
                    <input
                        name='firstName'
                        value={formState.firstName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Last name:
                    <input
                        name='lastName'
                        value={formState.lastName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        name='email'
                        value={formState.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <textarea
                    name='message'
                    value={formState.message}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <p>
                {formState.firstName} {formState.lastName} {formState.email}{' '}
                {formState.message}
            </p>
        </>
    );
}

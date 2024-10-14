export default function Card({person}) {
    let display;
    if (person.age) {
        display = 'yes';
    } else {
        display = 'no';
    }
    return (
        <div>
            <h1 className='card'>Card</h1>
            <p>{person.firstName}</p>
            {/* <p>{person.age ? 'yes' : 'no'}</p> */}
            <p className={person.age ? 'age' : ''}>{display}</p>
        </div>
    );
}

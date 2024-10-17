import {useState} from 'react';
import Counter from './Counter.jsx';

// here we implent counters that can be changed individually but also at the same time
// implenting the functions with the index is not ideal but okay for this small example
// ideally every count would have an id

export default function CounterContainer() {
    const [counters, setCounters] = useState([0, 0, 0]);

    function increaseAll() {
        setCounters((prev) => prev.map((c) => c + 1));
    }

    function decreaseAll() {
        setCounters((prev) => prev.map((c) => c - 1));
    }

    // we map over the array: if the index is identical we change the value otherwise we copy the previous value

    function increaseOne(index) {
        setCounters((prev) => prev.map((c, i) => (index === i ? c + 1 : c)));
    }

    function decreaseOne(index) {
        setCounters((prev) => prev.map((c, i) => (index === i ? c - 1 : c)));
    }

    return (
        <>
            <button onClick={increaseAll}>increaseAll</button>
            <button onClick={decreaseAll}>decreaseAll</button>
            {/* normally we should not use the index as an key */}
            {counters.map((counter, index) => (
                <Counter
                    key={index}
                    count={counter}
                    increase={increaseOne}
                    decrease={decreaseOne}
                    index={index}
                />
            ))}
        </>
    );
}

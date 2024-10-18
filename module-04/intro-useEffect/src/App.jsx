import {useEffect, useState} from 'react';
import Pokemon from './Pokemon.jsx';
import Timer from './Timer.jsx';

function App() {
    const [isOn, setIsOn] = useState(false);
    const [counter, setCounter] = useState(0);

    console.log('i am not an effect');
    useEffect(() => {
        console.log('salut');

        return () => console.log('adieu');
    }, [counter, isOn]);

    return (
        <>
            <h1>useEffect</h1>
            <button onClick={() => setIsOn(!isOn)}>toggle</button>
            {isOn ? <Pokemon /> : <p>Off</p>}
            <div>
                <button onClick={() => setCounter(counter + 1)}>
                    increase
                </button>
                <p>{counter}</p>
            </div>
        </>
    );
}

export default App;

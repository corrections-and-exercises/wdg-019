import {useState} from 'react';
import Counter from './Counter.jsx';
const App = () => {
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);
    const [counterC, setCounterC] = useState(0);
    return (
        <>
            <Counter count={counterA} setCount={setCounterA} />
            <Counter count={counterB} setCount={setCounterB} />
            <Counter count={counterC} setCount={setCounterC} />
        </>
    );
};

export default App;

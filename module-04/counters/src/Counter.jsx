import Button from './Button.jsx';
export default function Counter({count, setCount}) {
    return (
        <div>
            {/* <button onClick={() => setCount((prev) => prev - 1)}>
                decrease
            </button> */}
            <Button
                text='decrease'
                handleClick={() => setCount((prev) => prev - 1)}
            />
            <p>{count}</p>
            <Button
                text='increase'
                handleClick={() => setCount((prev) => prev + 1)}
            />
            {/* <button onClick={() => setCount((prev) => prev + 1)}>
                increase
            </button> */}
        </div>
    );
}

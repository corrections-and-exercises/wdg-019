export default function Counter({index, count, increase, decrease}) {
    return (
        <div>
            <button onClick={() => increase(index)}>increase</button>
            <button onClick={() => decrease(index)}>decrease</button>
            <p>{count}</p>
        </div>
    );
}

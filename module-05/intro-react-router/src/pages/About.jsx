import { useOutletContext } from 'react-router-dom';
export default function About() {
  const { counter, setCounter } = useOutletContext();
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        increase counter
      </button>
    </div>
  );
}

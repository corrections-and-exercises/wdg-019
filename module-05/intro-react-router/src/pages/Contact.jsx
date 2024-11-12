import { useOutletContext } from 'react-router-dom';
export default function Contact() {
  const { counter } = useOutletContext();
  return (
    <div>
      <h2>Contact </h2>
      <p>{counter}</p>
    </div>
  );
}

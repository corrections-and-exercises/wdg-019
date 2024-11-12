import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function MainLayout() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Navbar />
      <Outlet context={{ counter, setCounter }} />
    </div>
  );
}

import { useState } from 'react';
import './App.css';
import { gsap } from "gsap";
import Background from '../../componentes/background/Background.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Background />
      <button
        
      >
        Save changes
      </button>
    </>
  );
}

export default App;

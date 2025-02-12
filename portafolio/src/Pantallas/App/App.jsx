import React from 'react';
import { useState, useRef } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';  
import Background from '../../componentes/background/Background.jsx';

import '../../componentes/menu/Menu.jsx';
import Menu from '../../componentes/menu/Menu.jsx';


function App() {
  const backgroundRef = useRef(null);
  const [cursor, setCursor] = useState({ x: null, y: null });

  const handleMouseMove = (event) => {
    if (backgroundRef.current) {
      const rect = backgroundRef.current.getBoundingClientRect();
      setCursor({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    }
  };

  return (
    <div 
      className="App"
      onMouseMove={handleMouseMove}
    >
      <Background cursor={cursor} ref={backgroundRef} />
      <Menu />
      <Routes>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact</h1>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
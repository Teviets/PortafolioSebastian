import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
import Background from '../../componentes/background/Background.jsx';
import { gsap } from 'gsap';
import Home from '../Home/Home.jsx';
import Menu from '../../componentes/menu/Menu.jsx';

function App() {
  const backgroundRef = useRef(null);
  const [cursor, setCursor] = useState({ x: null, y: null });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const routesContainerRef = useRef(null);  // Ref para el contenedor de rutas

  const handleMouseMove = (event) => {
    if (backgroundRef.current) {
      const rect = backgroundRef.current.getBoundingClientRect();
      setCursor({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (isMenuOpen && routesContainerRef.current) {
      gsap.to(routesContainerRef.current, {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          // Ocultar completamente después de la animación
          gsap.set(routesContainerRef.current, { display: 'none' });
        }
      });
    } else if (routesContainerRef.current) {
      // Primero hacemos visible el contenedor
      gsap.set(routesContainerRef.current, { 
        display: 'block',
        x: -100,
        opacity: 0
      });
      // Luego animamos
      gsap.to(routesContainerRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.inOut"
      });
    }
  }, [isMenuOpen]);

  return (
    <div 
      className="App"
      onMouseMove={handleMouseMove}
    >
      <Background cursor={cursor} ref={backgroundRef} />
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div ref={routesContainerRef} className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
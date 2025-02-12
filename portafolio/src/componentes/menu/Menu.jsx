import React, { useState } from 'react';
import { gsap } from 'gsap';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 
import './menu.css';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado inicial en false

  const openMenu = () => {
    gsap.set('#content-menu', {
      visibility: 'visible', // Hacemos el menú visible
      display: 'block', // Lo mostramos en el flujo del documento
    });
  
    gsap.to('#content-menu', {
      duration: 0.5,
      x: '0%', // Desplazamos el menú a su lugar visible
      ease: 'power2.inOut',
    });
  
    gsap.fromTo('#menu ul li', {
      opacity: 0,
      x: 100, // Inicialmente desplazados a la derecha y opacos
    }, {
      duration: 0.4,
      x: 0, // Vuelven a su posición original
      opacity: 1, // Se vuelven visibles
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.2,
    });
  };
  
  const closeMenu = () => {
    gsap.to('#menu ul li', {
      duration: 0.3,
      x: 100, // Desplazamos los elementos hacia la derecha
      opacity: 0, // Los ocultamos
      stagger: 0.05,
      ease: 'power2.in',
    });
  
    gsap.to('#content-menu', {
      duration: 0.5,
      x: '100%', // Desplazamos el menú fuera de la vista
      visibility: 'hidden', // Lo hacemos invisible
      ease: 'power2.inOut',
      delay: 0.2,
    });
  };
  
  

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      // Abrir menú - transformar a X
      gsap.to('#bar-menu1', {
        duration: 0.3,
        y: 8,
        width: '80%',
        rotation: 35,
        left: '10%',
        ease: 'power2.inOut',
      });

      gsap.to('#bar-menu2', {
        duration: 0.2,
        opacity: 0,
        width: '0%',
        x: 15,
        ease: 'power2.inOut',
      });

      gsap.to('#bar-menu3', {
        duration: 0.3,
        y: -8,
        width: '80%',
        rotation: -35,
        left: '10%',
        ease: 'power2.inOut',
      });

      openMenu();
    } else {
      // Cerrar menú - volver a las 3 líneas
      gsap.to('#bar-menu1', {
        duration: 0.3,
        y: 0,
        width: '100%',
        rotation: 0,
        left: '0%',
        ease: 'power2.inOut',
      });

      gsap.to('#bar-menu2', {
        duration: 0.3,
        opacity: 1,
        width: '100%',
        x: 0,
        ease: 'power2.inOut',
      });

      gsap.to('#bar-menu3', {
        duration: 0.3,
        y: 0,
        width: '100%',
        rotation: 0,
        left: '0%',
        ease: 'power2.inOut',
      });

      closeMenu();
    }
  };

  // Selecciona todos los elementos con la clase .option-menu
  const menuItems = document.querySelectorAll('.option-menu');

  // Al hacer hover, aumentamos el tamaño usando GSAP
  menuItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          gsap.to(item, {
              scale: 1.5,         // Aumenta el tamaño al 120%
              duration: 0.3,      // La duración del aumento
              ease: "power1.out"  // Efecto suave de desaceleración
          });
      });

      // Al salir del hover, volvemos al tamaño original
      item.addEventListener('mouseleave', () => {
          gsap.to(item, {
              scale: 1,           // Vuelve al tamaño original
              duration: 0.3,      // La duración de la disminución
              ease: "power1.out"  // Efecto suave de desaceleración
          });
      });
  });


  return (
    <Router>
      <div id='Menu-container'>
        <div id='content-button' onClick={handleClick}>
          <div className='conteinerLines' id='firstContainerLines'>
            <div className='conteinerLines' id='secondContainerLines'>
              <span className='bar-menu' id='bar-menu1' />
              <span className='bar-menu' id='bar-menu2' />
              <span className='bar-menu' id='bar-menu3' />
            </div>
          </div>
        </div>
        <div id='content-menu' className={isMenuOpen ? 'active' : ''}>
          <div id='menu'>
            <ul>
              <li className='option-menu' id='home-menu'>
                <Link to='/'>Inicio</Link>
                </li>
              <li className='option-menu' id='about-me-menu'>
                <Link to='/about'>Sobre mi</Link>
              </li>
              <li className='option-menu' id='proyects-menu'>
                <Link href='/proyects'>Proyectos</Link>
              </li>
              <li className='option-menu' id='contact-menu'>
                <Link href='/contact'>Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Router>
  );
}

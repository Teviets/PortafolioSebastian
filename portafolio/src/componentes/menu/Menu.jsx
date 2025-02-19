import React from 'react';
import { gsap } from 'gsap';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 

import Constant from '../../assets/Constant/Constant.jsx'

import './menu.css';

export default function Menu({ isMenuOpen, toggleMenu }) {
  const openMenu = () => {
    gsap.set('#content-menu', {
      visibility: 'visible',
      display: 'block',
    });
  
    gsap.to('#content-menu', {
      duration: 0.5,
      x: '0%',
      ease: 'power2.inOut',
    });
  
    gsap.fromTo('#menu ul li', {
      opacity: 0,
      x: 100,
    }, {
      duration: 0.4,
      x: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.2,
    });
  };
  
  const closeMenu = () => {
    gsap.to('#menu ul li', {
      duration: 0.3,
      x: 100,
      opacity: 0,
      stagger: 0.05,
      ease: 'power2.in',
    });
  
    gsap.to('#content-menu', {
      duration: 0.5,
      x: '100%',
      visibility: 'hidden',
      ease: 'power2.inOut',
      delay: 0.2,
    });
  };

  const handleClick = () => {
    toggleMenu(); // Cambiar el estado del menú al hacer clic
    if (!isMenuOpen) {
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

  return (
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
                <Link to={Constant.Home.url}  onClick={handleClick} >{Constant.Home.Breadcrumb}</Link>
              </li>
              <li className='option-menu' id='about-me-menu'>
                <Link to={Constant.About.url}  onClick={handleClick}>{Constant.About.Breadcrumb}</Link>
              </li>
              <li className='option-menu' id='proyects-menu'>
                <Link to={Constant.Proyects.url}  onClick={handleClick}>{Constant.Proyects.Breadcrumb}</Link>
              </li>
              <li className='option-menu' id='contact-menu'>
                <Link to='/contact'  onClick={handleClick}>Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

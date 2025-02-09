import React, { useRef, useEffect, useState } from 'react';
import './Background.css';
import backgroundSvg from '../../assets/drawable/background.svg';
import gsap from 'gsap';

function Background() {
  const svgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(backgroundSvg)
      .then(response => response.text())
      .then(svgContent => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svgContent;
          
          const svg = containerRef.current.querySelector('svg');
          svg.style.width = '100%';
          svg.style.height = '100%';
          
          // Añadimos un filtro para el efecto de resplandor
          const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
          defs.innerHTML = `
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <radialGradient id="mouseGlow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stop-color="white" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="white" stop-opacity="0"/>
            </radialGradient>
          `;
          svg.insertBefore(defs, svg.firstChild);

          // Añadimos un círculo que seguirá al mouse para el efecto de resplandor
          const glowCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          glowCircle.setAttribute("r", "50");
          glowCircle.setAttribute("fill", "url(#mouseGlow)");
          glowCircle.style.display = "none";
          svg.appendChild(glowCircle);

          const paths = svg.querySelectorAll('path');
          const radius = 100;

          const handleMouseMove = (event) => {
            const rect = svg.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            // Actualizamos la posición del círculo de resplandor
            glowCircle.setAttribute("cx", mouseX);
            glowCircle.setAttribute("cy", mouseY);
            glowCircle.style.display = "block";

            paths.forEach(path => {
              const pathRect = path.getBoundingClientRect();
              const pathCenterX = (pathRect.left + pathRect.right) / 2 - rect.left;
              const pathCenterY = (pathRect.top + pathRect.bottom) / 2 - rect.top;

              const distance = Math.sqrt(
                Math.pow(mouseX - pathCenterX, 2) + 
                Math.pow(mouseY - pathCenterY, 2)
              );

              if (distance < radius) {
                const intensity = 1 - (distance / radius);
                gsap.to(path, {
                  duration: 0.3,
                  stroke: `rgba(255, 255, 255, ${0.5 + intensity * 0.5})`,
                  filter: 'url(#glow)',
                  ease: "power2.out"
                });
              } else {
                gsap.to(path, {
                  duration: 0.5,
                  stroke: path.getAttribute('data-original-color') || path.getAttribute('stroke') || '#000',
                  filter: 'none',
                  ease: "power2.out"
                });
              }
            });
          };

          const handleMouseLeave = () => {
            glowCircle.style.display = "none";
            paths.forEach(path => {
              gsap.to(path, {
                duration: 0.5,
                stroke: path.getAttribute('data-original-color') || path.getAttribute('stroke') || '#000',
                filter: 'none',
                ease: "power2.out"
              });
            });
          };

          // Guardamos los colores originales
          paths.forEach(path => {
            path.setAttribute('data-original-color', path.getAttribute('stroke') || '#000');
          });

          svg.addEventListener('mousemove', handleMouseMove);
          svg.addEventListener('mouseleave', handleMouseLeave);
          setIsLoaded(true);

          return () => {
            svg.removeEventListener('mousemove', handleMouseMove);
            svg.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
      });
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black overflow-hidden">
      <object 
        id="background-svg" 
        ref={svgRef}
        data={backgroundSvg}
        type="image/svg+xml"
        className="w-full h-full"
      />
    </div>
  );
}

export default Background;

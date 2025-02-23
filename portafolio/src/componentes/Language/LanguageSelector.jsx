// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto para el idioma
const LanguageContext = createContext();

// Componente proveedor para el idioma
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Idioma predeterminado es español

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useLanguage = () => useContext(LanguageContext);

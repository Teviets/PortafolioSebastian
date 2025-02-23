import React from 'react';
import { useLanguage } from './LanguageSelector'; // Importar el hook para el idioma


import { Strong } from "@chakra-ui/react";

import './SelectLanguage.css';

const languages = {
  "en": [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" }
  ],
  "es": [
    { label: "Inglés", value: "en" },
    { label: "Español", value: "es" }
  ]
};

const general = {
  "en": "Select language",
  "es": "Seleccionar idioma"
}

export default function SelectLanguage() {
  const { language, changeLanguage } = useLanguage(); // Obtener el idioma y la función para cambiarlo

  const handleChange = (event) => {
    changeLanguage(event.target.value); // Cambiar el idioma cuando el usuario seleccione una opción
  };

  return (
    <div id='select-language'>
      <select onChange={handleChange} size="sm" placeholder={general[language]}>
        {languages[language].map((lang) => (
          <option key={lang.value} value={lang.value} className='option-lan'>
            <Strong color="fg">
              {lang.label}
            </Strong>
          </option>
        ))}
    </select>
    
    </div>
  );
}

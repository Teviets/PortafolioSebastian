import React from 'react'

import Constant from '../../assets/Constant/Constant.jsx';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import './Contact.css'

import { useLanguage } from '../../componentes/Language/LanguageSelector.jsx';

export default function Contact() {
    const { language } = useLanguage();
  return (
    <div id='contact-container'>
        <div id='Title-container' className='snap-child'>
            <h2>{Constant[language].Contact.Title}</h2>
        </div>
        <div id='description-container' className='snap-child contact-info'>
            <p>
                {Constant[language].Contact.firstText}
                <br /> <br />
                {Constant[language].Contact.secondText}
            </p>
            <div className='contact-info'>
                <ul>
                    <li className='item-contact'>
                        <IoMailSharp size={30}/> 
                        {Constant[language].Contact.email} 
                    </li>
                    <li className='item-contact'> 
                        <FaPhoneAlt size={30}/>
                        {Constant[language].Contact.phone}
                    </li>
                </ul>
                <ul className='description-list-contact'>
                    <li>
                        <a href={Constant[language].Contact.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={50}/>
                        </a>
                    </li>
                    <li>
                        <a href={Constant[language].Contact.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={50} />
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

import React from 'react'
import './Home.css';
import code_bars from '../../assets/drawable/code_bars.svg';
import world from '../../assets/drawable/world.svg';

import Constant from '../../assets/Constant/Constant.jsx';

import { useLanguage } from '../../componentes/Language/LanguageSelector.jsx';


export default function Home() {
    const { language } = useLanguage();
    return (
        <div id='container-home'>
            <div id='card-home'>
                <div id='card-level-1'>
                    <span className='close-container' id='name-card'>{Constant[language].Home.Card.name}</span>
                    <span className='close-container' id='animation-card-1'>
                        {Constant[language].Home.Card.ticket_number}
                    </span>
                </div>
                <div id='card-level-2'>
                    <div className='close-container' id='jp-letters'>
                        {Array.from(Constant[language].Home.Card.jp_letters).map((char, index) => (
                            <span key={index} className="vertical-char">{char}</span>
                        ))}
                    </div>
                    <div className='vertical-content' id='content-2-level-2'>
                        <span className='close-container' id='animation-card-2'>
                            <img src={code_bars} alt='code bars'/>
                        </span>
                        <span className='close-container' id='lastname-card'>{Constant[language].Home.Card.lastname}</span>
                    </div>
                </div> 
                <div id='card-level-3'>
                    <span id='title-card'>{Constant[language].Home.Title}</span>
                    <div id='divider-line'/>
                </div> 
                <div id='card-level-4'>
                    <div className='vertical-content' id='content-1-level-4'>
                        <span className='draw-card'>
                            <img src={world} />
                        </span>
                        <span className='close-container' id='second-lastname-card'>{Constant[language].Home.Card.second_lastname}</span>
                    </div>
                    <div className='vertical-content' id='content-2-level-4'>
                        <span  id='draw-2'>
                            
                        </span>
                        <span className='draw-card' id='draw-3'>
                            <svg width="auto" height="75" viewBox="0 0 300 75" xmlns="http://www.w3.org/2000/svg">
                                <path id='right-row' d="M 292 24.75 L 275 15 L 275 21.1 L 110 21.1 L 110 27.5 L 275 27.5 L 275 34.5 Z" fill="white"/>
                                <path id='left-row' d="M 8 50.25 L 23 40 L 23 46.5 L 174 46.5 L 174 53.5 L 23 53.5 L 23 60.5 Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                </div> 
                <div id='card-level-5'>
                    <span className='close-container' id='content-level-5'>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        <div class="moving-line"></div>
                        
                    </span>
                </div>

            </div>
        </div>
    )
}

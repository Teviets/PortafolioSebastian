import React from 'react'

import sebasImg from '../../assets/drawable/SebastianEstradaImage.jpeg';

import Constant from '../../assets/Constant/Constant.jsx';

import './AboutMe.css';

export default function AboutMe() {
  return (
    <div id='aboutMe-container'>
        <div className='snap-child' id='huge-container'>
            <div id='Title-container'>
                <h2>{Constant.About.Title}</h2>
            </div>
            <div id='description-container' >
                <div id='Image-container'>
                    <img src={sebasImg} alt='profile'/>
                </div>
                <div id='Text-container'>
                    <p>
                    {Constant.About.firstText}
                    
                    <br/><br/>
                    {Constant.About.secondText}
                    </p>
                </div>
                
            </div>
        </div>
        <div id='divider-div'></div>
        <div id='Skills-container' className='snap-child'>
            <div id='Skill-container-list'>
                <h4 className='known-title'>{Constant.About.languages}</h4>
                <ul className='description-list'>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="40" viewBox="0 0 448 512">
                            <title>JavaScript</title>
                            <path fill="#ffffff" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"/>
                        </svg>
                    </li>
                    <li>
                        <svg width="48" height="48" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>python</title>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7599.000000)" fill="#ffffff">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439" id="python-[#127]">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </li>
                    <li>
                        <svg fill="#ffffff" width="48" height="48" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>Kotlin</title>
                            <path d="M30.996 30.996h-29.992v-29.992h29.992l-14.996 14.996 14.996 14.996z"></path>
                        </svg>
                    </li>
                    <li>
                        <svg fill="#ffffff" height="48" width="48" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 312.553 312.553" xml:space="preserve">
                            <title>C++</title>
                            <path d="M302.553,0H10C4.477,0,0,4.478,0,10v292.553c0,5.522,4.477,10,10,10h292.553c5.523,0,10-4.478,10-10V10
                                C312.553,4.478,308.076,0,302.553,0z M122.031,193.288c-9.481,8.296-21.592,12.865-34.102,12.865
                                c-28.108,0-50.976-22.4-50.976-49.934c0-27.47,22.868-49.818,50.976-49.818c12.527,0,24.597,4.53,33.987,12.756
                                c3.874,3.392,4.263,9.283,0.87,13.156c-3.393,3.874-9.283,4.263-13.157,0.869c-5.988-5.245-13.695-8.135-21.7-8.135
                                c-17.827,0-32.33,13.983-32.33,31.172c0,17.251,14.503,31.286,32.33,31.286c7.992,0,15.742-2.931,21.822-8.251
                                c3.875-3.393,9.765-2.998,13.156,0.877C126.298,184.007,125.906,189.898,122.031,193.288z M185.951,165.6h-18.789v18.79
                                c0,5.149-4.174,9.323-9.324,9.323s-9.324-4.174-9.324-9.323V165.6h-18.788c-5.149,0-9.324-4.174-9.324-9.323
                                s4.174-9.323,9.324-9.323h18.788v-18.789c0-5.149,4.174-9.323,9.324-9.323s9.324,4.174,9.324,9.323v18.789h18.789
                                c5.149,0,9.324,4.174,9.324,9.323S191.101,165.6,185.951,165.6z M266.276,165.6h-18.789v18.79c0,5.149-4.174,9.323-9.324,9.323
                                c-5.149,0-9.324-4.174-9.324-9.323V165.6h-18.788c-5.149,0-9.324-4.174-9.324-9.323s4.174-9.323,9.324-9.323h18.788v-18.789
                                c0-5.149,4.174-9.323,9.324-9.323c5.149,0,9.324,4.174,9.324,9.323v18.789h18.789c5.149,0,9.324,4.174,9.324,9.323
                                S271.426,165.6,266.276,165.6z"/>
                        </svg>
                    </li>
                    <li>
                        <svg fill="#ffffff" width="48" height="48" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>Java</title>
                            <path d="M13.168 30.901c5.401 0.346 13.695-0.191 13.891-2.747 0 0-0.377 0.968-4.464 1.738-2.257 0.407-4.855 0.639-7.508 0.639-2.173 0-4.309-0.156-6.398-0.457l0.239 0.028c0-0.001 0.691 0.571 4.24 0.799zM19 1.004s3.117 3.117-2.955 7.91c-4.869 3.845-1.11 6.038-0.001 8.543-2.842-2.566-4.927-4.821-3.529-6.922 2.054-3.085 7.744-4.58 6.486-9.531zM22.393 22.978c5.627-2.924 3.025-5.735 1.21-5.355-0.249 0.047-0.465 0.107-0.674 0.182l0.030-0.009c0.119-0.167 0.283-0.296 0.474-0.369l0.007-0.002c3.593-1.263 6.356 3.725-1.16 5.701 0.046-0.041 0.084-0.090 0.111-0.145l0.001-0.003zM12.616 17.512s-5.451 1.295-1.929 1.764c0.948 0.078 2.052 0.122 3.166 0.122 1.424 0 2.831-0.073 4.218-0.214l-0.174 0.014c2.257-0.19 4.521-0.596 4.521-0.596-0.531 0.232-0.982 0.477-1.409 0.756l0.037-0.022c-5.535 1.456-16.228 0.779-13.149-0.71 1.357-0.703 2.963-1.115 4.665-1.115 0.019 0 0.038 0 0.057 0h-0.003zM25.16 26.627s0.849 0.699-0.933 1.238c-3.389 1.027-14.106 1.336-17.081 0.041-1.070-0.466 0.937-1.112 1.567-1.247 0.291-0.074 0.626-0.117 0.97-0.117 0.023 0 0.045 0 0.068 0.001l-0.003-0c-1.191-0.839-7.693 1.646-3.303 2.358 11.972 1.941 21.821-0.875 18.716-2.274zM17.395 15.344c0.314 0.377 0.505 0.868 0.505 1.402 0 0.719-0.346 1.358-0.88 1.759l-0.006 0.004s3.673-1.897 1.986-4.271c-1.576-2.214-2.784-3.314 3.758-7.108 0-0.001-10.267 2.563-5.363 8.214zM11.346 20.915s-1.285 0.951 0.677 1.155c0.859 0.108 1.852 0.169 2.86 0.169 1.826 0 3.605-0.202 5.315-0.585l-0.162 0.030c0.344 0.322 0.755 0.578 1.209 0.744l0.025 0.008c-7.097 2.076-15.004 0.162-9.925-1.522zM12.065 24.198s-1.146 0.667 0.816 0.892c0.719 0.107 1.548 0.168 2.392 0.168 1.354 0 2.671-0.157 3.934-0.455l-0.116 0.023c0.467 0.285 1.010 0.557 1.577 0.782l0.074 0.026c-5.872 2.516-13.287-0.147-8.676-1.436z"></path>
                        </svg>
                    </li>
                    <li>
                        <svg fill="#ffffff"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="48" height="48" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                            <g id="5151e0c8492e5103c096af88a51e2ea6">
                                <title>PHP</title>
                                <path display="inline" d="M401.054,224c3.714,4.115,4.595,11.181,2.653,21.19c-2.029,10.425-5.935,17.862-11.723,22.32
                                        c-5.793,4.458-14.602,6.687-26.432,6.687h-17.849l10.957-56.37h20.103C389.913,217.827,397.34,219.886,401.054,224z
                                        M149.754,217.827h-20.103l-10.958,56.37h17.848c11.827,0,20.639-2.229,26.432-6.687c5.789-4.458,9.694-11.896,11.723-22.32
                                        c1.942-10.01,1.06-17.075-2.653-21.19C168.33,219.886,160.903,217.827,149.754,217.827z M511.5,256
                                        c0,74.229-114.393,134.403-255.5,134.403S0.5,330.229,0.5,256c0-74.228,114.393-134.403,255.5-134.403S511.5,181.772,511.5,256z
                                        M198.542,265.286c3.04-5.448,5.203-11.461,6.483-18.037c3.102-15.967,0.761-28.403-7.024-37.313
                                        c-7.781-8.91-20.165-13.363-37.136-13.363h-56.423L78.265,331.261h29.342l6.958-35.805h25.134c11.087,0,20.21-1.164,27.372-3.497
                                        c7.161-2.329,13.669-6.233,19.528-11.719C191.514,275.72,195.493,270.738,198.542,265.286z M301.814,295.456l12.181-62.682
                                        c2.479-12.747,0.619-21.971-5.572-27.664c-6.196-5.688-17.449-8.537-33.768-8.537h-25.933l6.961-35.81h-29.11l-26.182,134.692
                                        h29.11l14.996-77.165h23.267c7.448,0,12.317,1.232,14.604,3.698c2.287,2.467,2.773,7.091,1.455,13.869l-11.581,59.598H301.814z
                                        M427.011,209.937c-7.78-8.91-20.164-13.363-37.135-13.363h-56.424l-26.178,134.688h29.343l6.957-35.805h25.135
                                        c11.086,0,20.21-1.164,27.371-3.497c7.161-2.329,13.669-6.233,19.528-11.719c4.92-4.521,8.896-9.502,11.943-14.954
                                        c3.044-5.448,5.202-11.461,6.483-18.037C437.137,231.282,434.796,218.846,427.011,209.937z">

                                </path>
                            </g>
                        </svg>
                    </li>
                </ul>
                <h4 className='known-title'>{Constant.About.frameworks}</h4>
                <ul className='description-list'>
                    <li>
                        <svg fill="#ffffff" width="48" height="48" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                            <title>Express</title>
                            <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/>
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 512 512">
                            <title>React</title>
                            <path fill="#ffffff" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
                        </svg>
                    </li>
                    <li>
                        <svg width="48" height="48" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Svelt</title>
                            <path  fill-rule="evenodd" clip-rule="evenodd" d="M12.438 2.94656C13.0222 3.84625 13.0826 4.82176 12.784 5.56064C12.2332 5.04017 11.5732 4.66735 10.8806 4.48388C10.8888 4.33095 10.8504 4.17412 10.7606 4.03584C10.535 3.68845 10.0705 3.58972 9.72314 3.81532L8.0472 4.90369C8.04673 4.90399 8.04627 4.90429 8.0458 4.9046L5.52979 6.53851C5.1824 6.76411 5.08367 7.22861 5.30926 7.57599C5.53486 7.92338 5.99936 8.02212 6.34675 7.79652L8.86347 6.16214C8.86323 6.16229 8.86371 6.16198 8.86347 6.16214C9.81822 5.54278 11.3592 5.87563 12.2475 7.24351C13.1361 8.61173 12.813 10.1553 11.8583 10.7753L6.82625 14.0431C5.87156 14.6631 4.33001 14.3304 3.44148 12.9622C2.85722 12.0625 2.79684 11.087 3.09545 10.3481C3.64623 10.8686 4.30624 11.2414 4.99882 11.4249C4.99062 11.5778 5.02903 11.7347 5.11882 11.8729C5.34442 12.2203 5.80892 12.3191 6.15631 12.0935L10.3497 9.37027C10.697 9.14467 10.7958 8.68017 10.5702 8.33279C10.3446 7.9854 9.88009 7.88666 9.5327 8.11226L7.01644 9.74634C7.01652 9.74629 7.01635 9.7464 7.01644 9.74634C6.06172 10.3661 4.52038 10.0334 3.63192 8.66527C2.74339 7.29705 3.06648 5.75348 4.02117 5.13349L9.0532 1.86566C10.0079 1.24567 11.5494 1.57834 12.438 2.94656ZM13.7667 6.88194C14.7218 5.56301 14.6705 3.63028 13.696 2.1296C12.4789 0.255528 10.0607 -0.577139 8.23624 0.607651L3.20422 3.87549C1.52381 4.96675 1.20205 7.21441 2.11271 9.02685C1.15769 10.3458 1.20893 12.2785 2.18348 13.7792C3.40052 15.6533 5.81879 16.4859 7.64321 15.3011L12.6752 12.0333C14.3556 10.942 14.6774 8.69437 13.7667 6.88194Z" fill="#ffffff"/>
                        </svg>
                    </li>
                    
                    <li>
                        <svg width="48" height="48" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Vue</title>
                            <path d="M2.71693 1H0.5C0.320967 1 0.155598 1.09572 0.0664289 1.25097C-0.0227402 1.40622 -0.0220988 1.59729 0.0681106 1.75194L7.06811 13.7519C7.15772 13.9055 7.32217 14 7.5 14C7.67783 14 7.84228 13.9055 7.93189 13.7519L14.9319 1.75194C15.0221 1.59729 15.0227 1.40622 14.9336 1.25097C14.8444 1.09572 14.679 1 14.5 1H12.2831L7.50004 8.97184L2.71693 1Z" fill="#ffffff"/>
                            <path d="M11.1169 1H8.191L7.50002 2.38197L6.80903 1H3.88312L7.50004 7.02819L11.1169 1Z" fill="#ffffff"/>
                        </svg>
                    </li>
                    
                </ul>
                <h4 className='known-title'>{Constant.About.database} </h4>
                <ul className="description-list" >
                    <li>
                        <svg width="48" height="48" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <title>MongoDB</title>
                            <circle cx="512" cy="512" r="512" fill = "#0000000"/>
                            <path d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z" fill="#fff"/>
                            <span class="tooltip-text">Descripción estilizada del ícono</span>
                        </svg>
                    </li>
                    <li>
                        <svg fill="#ffffff" width="48" height="48" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <title>PostgreSQL</title>
                            <path d="M22.839 0c-1.245 0.011-2.479 0.188-3.677 0.536l-0.083 0.027c-0.751-0.131-1.516-0.203-2.276-0.219-1.573-0.027-2.923 0.353-4.011 0.989-1.073-0.369-3.297-1.016-5.641-0.885-1.629 0.088-3.411 0.583-4.735 1.979-1.312 1.391-2.009 3.547-1.864 6.485 0.041 0.807 0.271 2.124 0.656 3.837 0.38 1.709 0.917 3.709 1.589 5.537 0.672 1.823 1.405 3.463 2.552 4.577 0.572 0.557 1.364 1.032 2.296 0.991 0.652-0.027 1.24-0.313 1.751-0.735 0.249 0.328 0.516 0.468 0.755 0.599 0.308 0.167 0.599 0.281 0.907 0.355 0.552 0.14 1.495 0.323 2.599 0.135 0.375-0.063 0.771-0.187 1.167-0.359 0.016 0.437 0.032 0.869 0.047 1.307 0.057 1.38 0.095 2.656 0.505 3.776 0.068 0.183 0.251 1.12 0.969 1.953 0.724 0.833 2.129 1.349 3.739 1.005 1.131-0.24 2.573-0.677 3.532-2.041 0.948-1.344 1.375-3.276 1.459-6.412 0.020-0.172 0.047-0.312 0.072-0.448l0.224 0.021h0.027c1.208 0.052 2.521-0.12 3.62-0.631 0.968-0.448 1.703-0.901 2.239-1.708 0.131-0.199 0.281-0.443 0.319-0.86 0.041-0.411-0.199-1.063-0.595-1.364-0.791-0.604-1.291-0.375-1.828-0.26-0.525 0.115-1.063 0.176-1.599 0.192 1.541-2.593 2.645-5.353 3.276-7.792 0.375-1.443 0.584-2.771 0.599-3.932 0.021-1.161-0.077-2.187-0.771-3.077-2.177-2.776-5.235-3.548-7.599-3.573-0.073 0-0.145 0-0.219 0zM22.776 0.855c2.235-0.021 5.093 0.604 7.145 3.228 0.464 0.589 0.6 1.448 0.584 2.511s-0.213 2.328-0.573 3.719c-0.692 2.699-2.011 5.833-3.859 8.652 0.063 0.047 0.135 0.088 0.208 0.115 0.385 0.161 1.265 0.296 3.025-0.063 0.443-0.095 0.767-0.156 1.105 0.099 0.167 0.14 0.255 0.349 0.244 0.568-0.020 0.161-0.077 0.317-0.177 0.448-0.339 0.509-1.009 0.995-1.869 1.396-0.76 0.353-1.855 0.536-2.817 0.547-0.489 0.005-0.937-0.032-1.319-0.152l-0.020-0.004c-0.147 1.411-0.484 4.203-0.704 5.473-0.176 1.025-0.484 1.844-1.072 2.453-0.589 0.615-1.417 0.979-2.537 1.219-1.385 0.297-2.391-0.021-3.041-0.568s-0.948-1.276-1.125-1.719c-0.124-0.307-0.187-0.703-0.249-1.235-0.063-0.531-0.104-1.177-0.136-1.911-0.041-1.12-0.057-2.24-0.041-3.365-0.577 0.532-1.296 0.88-2.068 1.016-0.921 0.156-1.739 0-2.228-0.12-0.24-0.063-0.475-0.151-0.693-0.271-0.229-0.12-0.443-0.255-0.588-0.527-0.084-0.156-0.109-0.337-0.073-0.509 0.041-0.177 0.145-0.328 0.287-0.443 0.265-0.215 0.615-0.333 1.14-0.443 0.959-0.199 1.297-0.333 1.5-0.496 0.172-0.135 0.371-0.416 0.713-0.828 0-0.015 0-0.036-0.005-0.052-0.619-0.020-1.224-0.181-1.771-0.479-0.197 0.208-1.224 1.292-2.468 2.792-0.521 0.624-1.099 0.984-1.713 1.011-0.609 0.025-1.163-0.281-1.631-0.735-0.937-0.912-1.688-2.48-2.339-4.251s-1.177-3.744-1.557-5.421c-0.375-1.683-0.599-3.037-0.631-3.688-0.14-2.776 0.511-4.645 1.625-5.828s2.641-1.625 4.131-1.713c2.672-0.151 5.213 0.781 5.724 0.979 0.989-0.672 2.265-1.088 3.859-1.063 0.756 0.011 1.505 0.109 2.24 0.292l0.027-0.016c0.323-0.109 0.651-0.208 0.984-0.28 0.907-0.215 1.833-0.324 2.76-0.339zM22.979 1.745h-0.197c-0.76 0.009-1.527 0.099-2.271 0.26 1.661 0.735 2.916 1.864 3.801 3 0.615 0.781 1.12 1.64 1.505 2.557 0.152 0.355 0.251 0.651 0.303 0.88 0.031 0.115 0.047 0.213 0.057 0.312 0 0.052 0.005 0.105-0.021 0.193 0 0.005-0.005 0.016-0.005 0.021 0.043 1.167-0.249 1.957-0.287 3.072-0.025 0.808 0.183 1.756 0.235 2.792 0.047 0.973-0.072 2.041-0.703 3.093 0.052 0.063 0.099 0.125 0.151 0.193 1.672-2.636 2.88-5.547 3.521-8.032 0.344-1.339 0.525-2.552 0.541-3.509 0.016-0.959-0.161-1.657-0.391-1.948-1.792-2.287-4.213-2.871-6.24-2.885zM16.588 2.088c-1.572 0.005-2.703 0.48-3.561 1.193-0.887 0.74-1.48 1.745-1.865 2.781-0.464 1.224-0.625 2.411-0.688 3.219l0.021-0.011c0.475-0.265 1.099-0.536 1.771-0.687 0.667-0.157 1.391-0.204 2.041 0.052 0.657 0.249 1.193 0.848 1.391 1.749 0.939 4.344-0.291 5.959-0.744 7.177-0.172 0.443-0.323 0.891-0.443 1.349 0.057-0.011 0.115-0.027 0.172-0.032 0.323-0.025 0.572 0.079 0.719 0.141 0.459 0.192 0.771 0.588 0.943 1.041 0.041 0.12 0.072 0.244 0.093 0.38 0.016 0.052 0.027 0.109 0.027 0.167-0.052 1.661-0.048 3.323 0.015 4.984 0.032 0.719 0.079 1.349 0.136 1.849 0.057 0.495 0.135 0.875 0.188 1.005 0.171 0.427 0.421 0.984 0.875 1.364 0.448 0.381 1.093 0.631 2.276 0.381 1.025-0.224 1.656-0.527 2.077-0.964 0.423-0.443 0.672-1.052 0.833-1.984 0.245-1.401 0.729-5.464 0.787-6.224-0.025-0.579 0.057-1.021 0.245-1.36 0.187-0.344 0.479-0.557 0.735-0.672 0.124-0.057 0.244-0.093 0.343-0.125-0.104-0.145-0.213-0.291-0.323-0.432-0.364-0.443-0.667-0.937-0.891-1.463-0.104-0.22-0.219-0.439-0.344-0.647-0.176-0.317-0.4-0.719-0.635-1.172-0.469-0.896-0.979-1.989-1.245-3.052-0.265-1.063-0.301-2.161 0.376-2.932 0.599-0.688 1.656-0.973 3.233-0.812-0.047-0.141-0.072-0.261-0.151-0.443-0.359-0.844-0.828-1.636-1.391-2.355-1.339-1.713-3.511-3.412-6.859-3.469zM7.735 2.156c-0.167 0-0.339 0.005-0.505 0.016-1.349 0.079-2.62 0.468-3.532 1.432-0.911 0.969-1.509 2.547-1.38 5.167 0.027 0.5 0.24 1.885 0.609 3.536 0.371 1.652 0.896 3.595 1.527 5.313 0.629 1.713 1.391 3.208 2.12 3.916 0.364 0.349 0.681 0.495 0.968 0.485 0.287-0.016 0.636-0.183 1.063-0.693 0.776-0.937 1.579-1.844 2.412-2.729-1.199-1.047-1.787-2.629-1.552-4.203 0.135-0.984 0.156-1.907 0.135-2.636-0.015-0.708-0.063-1.176-0.063-1.473 0-0.011 0-0.016 0-0.027v-0.005l-0.005-0.009c0-1.537 0.272-3.057 0.792-4.5 0.375-0.996 0.928-2 1.76-2.819-0.817-0.271-2.271-0.676-3.843-0.755-0.167-0.011-0.339-0.016-0.505-0.016zM24.265 9.197c-0.905 0.016-1.411 0.251-1.681 0.552-0.376 0.433-0.412 1.193-0.177 2.131 0.233 0.937 0.719 1.984 1.172 2.855 0.224 0.437 0.443 0.828 0.619 1.145 0.183 0.323 0.313 0.547 0.391 0.745 0.073 0.177 0.157 0.333 0.24 0.479 0.349-0.74 0.412-1.464 0.375-2.224-0.047-0.937-0.265-1.896-0.229-2.864 0.037-1.136 0.261-1.876 0.277-2.751-0.324-0.041-0.657-0.068-0.985-0.068zM13.287 9.355c-0.276 0-0.552 0.036-0.823 0.099-0.537 0.131-1.052 0.328-1.537 0.599-0.161 0.088-0.317 0.188-0.463 0.303l-0.032 0.025c0.011 0.199 0.047 0.667 0.063 1.365 0.016 0.76 0 1.728-0.145 2.776-0.323 2.281 1.333 4.167 3.276 4.172 0.115-0.469 0.301-0.944 0.489-1.443 0.541-1.459 1.604-2.521 0.708-6.677-0.145-0.677-0.437-0.953-0.839-1.109-0.224-0.079-0.457-0.115-0.697-0.109zM23.844 9.625h0.068c0.083 0.005 0.167 0.011 0.239 0.031 0.068 0.016 0.131 0.037 0.183 0.073 0.052 0.031 0.088 0.083 0.099 0.145v0.011c0 0.063-0.016 0.125-0.047 0.183-0.041 0.072-0.088 0.14-0.145 0.197-0.136 0.151-0.319 0.251-0.516 0.281-0.193 0.027-0.385-0.025-0.547-0.135-0.063-0.048-0.125-0.1-0.172-0.157-0.047-0.047-0.073-0.109-0.084-0.172-0.004-0.061 0.011-0.124 0.052-0.171 0.048-0.048 0.1-0.089 0.157-0.12 0.129-0.073 0.301-0.125 0.5-0.152 0.072-0.009 0.145-0.015 0.213-0.020zM13.416 9.849c0.068 0 0.147 0.005 0.22 0.015 0.208 0.032 0.385 0.084 0.525 0.167 0.068 0.032 0.131 0.084 0.177 0.141 0.052 0.063 0.077 0.14 0.073 0.224-0.016 0.077-0.048 0.151-0.1 0.208-0.057 0.068-0.119 0.125-0.192 0.172-0.172 0.125-0.385 0.177-0.599 0.151-0.215-0.036-0.412-0.14-0.557-0.301-0.063-0.068-0.115-0.141-0.157-0.219-0.047-0.073-0.067-0.156-0.057-0.24 0.021-0.14 0.141-0.219 0.256-0.26 0.131-0.043 0.271-0.057 0.411-0.052zM25.495 19.64h-0.005c-0.192 0.073-0.353 0.1-0.489 0.163-0.14 0.052-0.251 0.156-0.317 0.285-0.089 0.152-0.156 0.423-0.136 0.885 0.057 0.043 0.125 0.073 0.199 0.095 0.224 0.068 0.609 0.115 1.036 0.109 0.849-0.011 1.896-0.208 2.453-0.469 0.453-0.208 0.88-0.489 1.255-0.817-1.859 0.38-2.905 0.281-3.552 0.016-0.156-0.068-0.307-0.157-0.443-0.267zM14.787 19.765h-0.027c-0.072 0.005-0.172 0.032-0.375 0.251-0.464 0.52-0.625 0.848-1.005 1.151-0.385 0.307-0.88 0.469-1.875 0.672-0.312 0.063-0.495 0.135-0.615 0.192 0.036 0.032 0.036 0.043 0.093 0.068 0.147 0.084 0.333 0.152 0.485 0.193 0.427 0.104 1.124 0.229 1.859 0.104 0.729-0.125 1.489-0.475 2.141-1.385 0.115-0.156 0.124-0.391 0.031-0.641-0.093-0.244-0.297-0.463-0.437-0.52-0.089-0.043-0.183-0.068-0.276-0.084z"/>
                        </svg>
                    </li>
                    <li>
                        <svg fill="#ffffff" width="48" height="48" viewBox="0 0 32 32"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>mysql</title>
                            <path d="M30.026 15.139c-0.082-0.006-0.177-0.010-0.273-0.010-0.484 0-0.947 0.090-1.373 0.254l0.026-0.009c-0.125 0.050-0.325 0.050-0.342 0.209 0.069 0.066 0.079 0.175 0.137 0.267 0.117 0.198 0.261 0.366 0.429 0.506l0.003 0.003c0.175 0.137 0.35 0.27 0.534 0.387 0.325 0.2 0.694 0.319 1.012 0.52 0.181 0.117 0.366 0.266 0.55 0.391 0.091 0.062 0.15 0.175 0.267 0.215v-0.025c-0.057-0.075-0.075-0.184-0.131-0.267-0.084-0.084-0.167-0.159-0.25-0.241-0.248-0.325-0.535-0.603-0.857-0.835l-0.012-0.008c-0.267-0.182-0.852-0.437-0.962-0.744l-0.016-0.018c0.218-0.031 0.412-0.077 0.599-0.139l-0.024 0.007c0.284-0.075 0.544-0.059 0.837-0.132 0.132-0.034 0.266-0.075 0.4-0.117v-0.075c-0.15-0.15-0.262-0.354-0.417-0.494-0.409-0.36-0.86-0.698-1.335-1.002l-0.045-0.027c-0.262-0.167-0.595-0.275-0.871-0.417-0.1-0.050-0.267-0.075-0.325-0.159-0.13-0.185-0.245-0.397-0.336-0.621l-0.008-0.022q-0.368-0.714-0.684-1.453c-0.144-0.383-0.287-0.697-0.448-1.001l0.023 0.047c-0.786-1.319-1.881-2.379-3.188-3.102l-0.043-0.022c-0.309-0.153-0.668-0.272-1.045-0.339l-0.025-0.004c-0.209-0.010-0.417-0.025-0.625-0.034-0.146-0.094-0.272-0.19-0.39-0.296l0.003 0.003c-0.475-0.3-1.704-0.95-2.054-0.090-0.225 0.542 0.334 1.077 0.527 1.352 0.154 0.183 0.294 0.388 0.415 0.605l0.010 0.020c0.059 0.145 0.075 0.294 0.134 0.445 0.145 0.452 0.292 0.823 0.459 1.182l-0.026-0.062c0.099 0.199 0.202 0.368 0.317 0.528l-0.008-0.012c0.067 0.091 0.182 0.134 0.209 0.284-0.086 0.181-0.153 0.391-0.19 0.61l-0.002 0.014c-0.108 0.332-0.171 0.715-0.171 1.112 0 0.621 0.153 1.206 0.423 1.72l-0.010-0.020c0.134 0.207 0.452 0.667 0.878 0.491 0.375-0.15 0.292-0.625 0.4-1.043 0.025-0.1 0.009-0.166 0.060-0.234v0.019c0.117 0.235 0.235 0.459 0.342 0.694 0.302 0.435 0.661 0.805 1.071 1.11l0.013 0.009c0.2 0.15 0.359 0.41 0.609 0.502v-0.025h-0.019c-0.057-0.062-0.12-0.117-0.189-0.164l-0.004-0.002c-0.155-0.152-0.299-0.316-0.429-0.489l-0.008-0.011c-0.326-0.44-0.636-0.938-0.905-1.461l-0.029-0.061c-0.137-0.262-0.252-0.545-0.362-0.804-0.050-0.1-0.050-0.25-0.134-0.3-0.148 0.166-0.281 0.351-0.392 0.55l-0.008 0.016c-0.128 0.373-0.212 0.804-0.234 1.251l-0 0.011c-0.034 0.009-0.017 0-0.034 0.018-0.267-0.065-0.359-0.342-0.459-0.575-0.136-0.366-0.215-0.79-0.215-1.231 0-0.356 0.051-0.7 0.147-1.025l-0.006 0.026c0.059-0.175 0.309-0.727 0.209-0.895-0.052-0.159-0.217-0.25-0.309-0.379-0.109-0.154-0.209-0.329-0.292-0.514l-0.008-0.020c-0.2-0.467-0.3-0.985-0.517-1.452-0.131-0.244-0.269-0.454-0.424-0.65l0.007 0.009c-0.165-0.191-0.317-0.404-0.449-0.63l-0.011-0.020c-0.041-0.091-0.1-0.242-0.034-0.342 0.012-0.058 0.058-0.103 0.117-0.112l0.001-0c0.11-0.090 0.419 0.027 0.527 0.077 0.317 0.12 0.59 0.261 0.843 0.427l-0.016-0.010c0.117 0.082 0.244 0.241 0.394 0.282h0.175c0.267 0.059 0.569 0.018 0.819 0.091 0.459 0.155 0.856 0.349 1.223 0.587l-0.021-0.013c1.104 0.713 1.988 1.677 2.586 2.816l0.020 0.041c0.1 0.192 0.144 0.369 0.235 0.569 0.175 0.412 0.391 0.829 0.569 1.227 0.169 0.428 0.369 0.798 0.607 1.139l-0.012-0.018c0.125 0.175 0.627 0.266 0.852 0.357 0.237 0.083 0.427 0.162 0.611 0.251l-0.037-0.016c0.287 0.175 0.567 0.375 0.837 0.567 0.137 0.095 0.554 0.304 0.579 0.472zM18.302 22.452c0 0.015 0.001 0.032 0.001 0.049 0 0.558-0.249 1.057-0.643 1.393l-0.003 0.002c-0.432 0.352-0.989 0.566-1.596 0.566-0.047 0-0.094-0.001-0.14-0.004l0.006 0c-0.739-0.010-1.419-0.25-1.976-0.651l0.010 0.007 0.296-0.595c0.429 0.24 0.939 0.389 1.481 0.41l0.006 0c0.027 0.002 0.058 0.003 0.090 0.003 0.332 0 0.641-0.104 0.894-0.281l-0.005 0.003c0.229-0.174 0.375-0.446 0.375-0.752 0-0.006-0-0.011-0-0.017v0.001c0-0.412-0.287-0.762-0.81-1.056-0.485-0.266-1.453-0.821-1.453-0.821-0.478-0.296-0.791-0.817-0.791-1.411 0-0.021 0-0.042 0.001-0.063l-0 0.003c-0.001-0.019-0.001-0.041-0.001-0.063 0-0.515 0.227-0.977 0.586-1.291l0.002-0.002c0.382-0.324 0.881-0.521 1.426-0.521 0.035 0 0.069 0.001 0.103 0.002l-0.005-0c0.009-0 0.020-0 0.031-0 0.639 0 1.234 0.191 1.73 0.52l-0.012-0.007-0.266 0.595c-0.391-0.176-0.847-0.282-1.327-0.287l-0.002-0c-0.024-0.002-0.051-0.003-0.079-0.003-0.28 0-0.538 0.098-0.74 0.262l0.002-0.002c-0.189 0.157-0.309 0.392-0.31 0.655v0c0 0.41 0.292 0.762 0.832 1.062 0.491 0.269 1.483 0.837 1.483 0.837 0.488 0.287 0.811 0.809 0.811 1.407 0 0.018-0 0.037-0.001 0.055l0-0.003zM20.374 22.983c-0.273-0.545-0.432-1.187-0.432-1.866 0-0.107 0.004-0.213 0.012-0.317l-0.001 0.014q0-2.611 1.587-2.612c0.026-0.002 0.057-0.003 0.089-0.003 0.475 0 0.892 0.248 1.129 0.622l0.003 0.005c0.271 0.542 0.43 1.182 0.43 1.858 0 0.104-0.004 0.207-0.011 0.309l0.001-0.014q0 2.632-1.587 2.634c-0.027 0.002-0.058 0.003-0.089 0.003-0.475 0-0.893-0.248-1.13-0.622l-0.003-0.005zM24.488 24.535l-1.27-0.625c0.116-0.097 0.22-0.199 0.316-0.309l0.003-0.003c0.513-0.692 0.821-1.563 0.821-2.505 0-0.109-0.004-0.217-0.012-0.324l0.001 0.014q0-3.43-2.693-3.432c-0.040-0.002-0.087-0.003-0.134-0.003-0.767 0-1.456 0.337-1.925 0.872l-0.002 0.003c-0.511 0.692-0.818 1.562-0.818 2.504 0 0.106 0.004 0.211 0.012 0.315l-0.001-0.014c-0.009 0.101-0.014 0.219-0.014 0.338 0 0.874 0.274 1.684 0.74 2.349l-0.009-0.013c0.449 0.478 1.086 0.776 1.791 0.776 0.066 0 0.131-0.003 0.195-0.008l-0.009 0.001c0.009 0 0.021 0 0.032 0 0.311 0 0.612-0.045 0.897-0.128l-0.022 0.006 1.656 0.965 0.45-0.777zM28.636 24.366h-3.287v-6.91h1.106v6.061h2.181zM13.235 19.268c-0.287 2.084-0.944 3.965-1.905 5.65l0.040-0.077c-0.385 0.741-1.113 1.257-1.968 1.34l-0.010 0.001c-0.259-0.014-0.5-0.076-0.719-0.177l0.012 0.005v-0.617c0.137 0.021 0.295 0.033 0.456 0.033 0.009 0 0.018-0 0.028-0h-0.001c0.016 0.001 0.034 0.001 0.052 0.001 0.289 0 0.554-0.105 0.758-0.28l-0.002 0.001c0.22-0.181 0.361-0.451 0.369-0.755l0-0.001c-0.053-0.438-0.154-0.837-0.299-1.214l0.012 0.034-1.267-3.944h1.137l0.909 2.949c0.162 0.416 0.256 0.898 0.256 1.401 0 0.001 0 0.002 0 0.002v-0c0.482-1.262 0.848-2.734 1.034-4.261l0.009-0.092zM8.215 24.366h-1.158q-0.049-2.761-0.337-5.511h-0.010l-1.762 5.511h-0.881l-1.75-5.511h-0.012q-0.205 2.751-0.244 5.511h-1.056q0.103-3.685 0.512-6.911h1.437l1.668 5.079h0.010l1.683-5.079h1.368q0.454 3.777 0.535 6.911zM21.505 7.879c-0.002 0-0.005-0-0.008-0-0.119 0-0.234 0.015-0.344 0.043l0.010-0.002v0.016h0.017c0.086 0.128 0.174 0.239 0.269 0.343l-0.002-0.002c0.067 0.134 0.125 0.267 0.192 0.4l0.017-0.019c0.109-0.086 0.178-0.218 0.178-0.366 0-0.018-0.001-0.035-0.003-0.053l0 0.002c-0.050-0.059-0.057-0.117-0.1-0.175-0.050-0.084-0.157-0.125-0.225-0.191z"></path>
                        </svg>
                    </li>
                </ul>

                <h4 className='known-title'>{Constant.About.tools} </h4>
                <ul className='description-list'>
                    <li>
                        <svg fill="#ffffff" width="48" height="48" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <style>
                                    {`.cls-1{fill-rule:evenodd;}.cls-2{fill:none;}`}
                                </style>
                            </defs>
                            <title>Git</title>
                            <path className="cls-1" d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"/>
                            <rect className="cls-2" width="32" height="32"/>
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="36" viewBox="0 0 384 512">
                            <title>HTML</title>
                            <path fill="#ffffff" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="36" viewBox="0 0 384 512">
                            <title>CSS</title>
                            <path fill="#ffffff" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
                        </svg>
                    </li>
                    <li>
                        <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <title>AWS</title>
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="invisible_box" data-name="invisible box">
                                    <rect width="48" height="48" fill="none"/>
                                    <rect width="48" height="48" fill="none"/>
                                </g>
                                <g id="icons_Q2" data-name="icons Q2">
                                    <g>
                                        <path fill="#FFFFFF" d="M14.4,20.6a5.1,5.1,0,0,0,.2,1.3l.4,1a.4.4,0,0,1,.1.3c0,.2-.1.3-.2.5l-1,.6h-.3a.6.6,0,0,1-.5-.2,1.8,1.8,0,0,1-.5-.7,5.6,5.6,0,0,1-.5-.8,5.4,5.4,0,0,1-4.3,2,4,4,0,0,1-2.9-1.1,3.8,3.8,0,0,1-1.1-2.8,3.9,3.9,0,0,1,1.4-3,5.2,5.2,0,0,1,3.5-1.1h1.6l1.7.3V16a3.5,3.5,0,0,0-.7-2.3A3.8,3.8,0,0,0,8.9,13l-1.6.2-1.6.5-.5.2H5c-.2,0-.3-.2-.3-.5v-.7a.7.7,0,0,1,.1-.5l.4-.3A7.5,7.5,0,0,1,7,11.3,9.1,9.1,0,0,1,9.3,11a5.5,5.5,0,0,1,3.9,1.2,4.9,4.9,0,0,1,1.2,3.6v4.8ZM8.5,22.8l1.5-.3a4.2,4.2,0,0,0,1.4-.9,3.1,3.1,0,0,0,.5-1c0-.3.1-.7.1-1.2v-.6l-1.3-.3H9.3a3.4,3.4,0,0,0-2.2.6,2.1,2.1,0,0,0-.7,1.7,2.1,2.1,0,0,0,.5,1.5A2.1,2.1,0,0,0,8.5,22.8Zm11.7,1.6a.6.6,0,0,1-.5-.2.9.9,0,0,1-.4-.6L15.9,12.3a1.8,1.8,0,0,1-.1-.6.3.3,0,0,1,.3-.3h2a1.6,1.6,0,0,1,.3.6l2.5,9.7,2.3-9.7a.8.8,0,0,1,.2-.6h2.4l.3.6,2.3,9.8,2.5-9.8.3-.6h1.9c.3,0,.4.1.4.3V12c0,.1-.1.2-.1.3L29.8,23.7a.6.6,0,0,1-.3.5l-.5.2H27.7a.7.7,0,0,1-.8-.8l-2.3-9.4-2.3,9.4a.8.8,0,0,1-.2.6l-.6.2Zm18.8.4a8.3,8.3,0,0,1-2.2-.3l-1.7-.6a1.1,1.1,0,0,1-.5-.4c0-.1-.1-.3-.1-.4v-.8a.4.4,0,0,1,.4-.4h.2l.4.2,1.6.5,1.8.2a4.1,4.1,0,0,0,2.1-.5,1.6,1.6,0,0,0,.8-1.4,1.5,1.5,0,0,0-.4-1,3.5,3.5,0,0,0-1.5-.8l-2.1-.7A4.6,4.6,0,0,1,35.4,17a3.6,3.6,0,0,1-.7-2.2,2.9,2.9,0,0,1,.4-1.6,2.9,2.9,0,0,1,1-1.2l1.6-.8,1.8-.2h1.9l.9.3.6.2c.2.1.3.3.4.4a.7.7,0,0,1,.1.5v.7c0,.3-.1.4-.3.4a.6.6,0,0,1-.5-.2,8.8,8.8,0,0,0-2.9-.5,3.6,3.6,0,0,0-1.9.4,1.4,1.4,0,0,0-.7,1.3,1.4,1.4,0,0,0,.5,1,2.9,2.9,0,0,0,1.6.8l2,.7a4,4,0,0,1,2.3,1.4,3.1,3.1,0,0,1,.7,2,4.3,4.3,0,0,1-.4,1.7,3.5,3.5,0,0,1-1.1,1.3,3,3,0,0,1-1.6.8A4.9,4.9,0,0,1,39,24.8Z"/>
                                        <path fill="#FFFFFF" d="M41.8,31.9C37,35.4,30,37.3,24,37.3A32.1,32.1,0,0,1,2.2,29c-.5-.4,0-1,.5-.6a44,44,0,0,0,21.8,5.8,45.2,45.2,0,0,0,16.6-3.4C41.9,30.4,42.6,31.3,41.8,31.9Zm2-2.3c-.6-.8-4.1-.4-5.6-.2s-.6-.4-.2-.7c2.8-1.9,7.3-1.3,7.8-.7s-.1,5.2-2.7,7.4c-.4.3-.8.1-.6-.3S44.4,30.4,43.8,29.6Z"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </li>
                    <li>
                        <svg fill="#ffffff" width="48" height="48" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>firebase</title>
                            <path d="M18.874 9.935l-2.274-4.351c-0.116-0.217-0.341-0.363-0.6-0.363s-0.484 0.145-0.598 0.359l-0.002 0.004-9.985 17.894zM26.852 25.202l-2.812-17.495c-0.052-0.325-0.331-0.571-0.667-0.571-0.189 0-0.359 0.077-0.482 0.202l-0 0-17.744 17.865 9.817 5.532c0.286 0.163 0.628 0.26 0.992 0.26s0.707-0.096 1.002-0.265l-0.010 0.005zM5.865 20.589l2.955-19.008c0.051-0.328 0.331-0.577 0.67-0.577 0.258 0 0.483 0.144 0.597 0.357l0.002 0.004 3.178 5.962z"></path>
                        </svg>
                    </li>
                </ul>
            </div>
            <div id='Title-skill-container'>
                <h3>{Constant.About.skills} </h3>
            </div>
        </div>

    </div>
  )
}

import TerraControl from '../../assets/drawable/TerraControl.png'
import Nasa from '../../assets/drawable/Nasa.png'
import Airbnb from '../../assets/drawable/CopiaAirbnb.png'
import More from '../../assets/drawable/more.jpeg'
import CositaMia from '../../assets/drawable/CositaMia.png'
import TableTrek from '../../assets/drawable/TableTrek.png'

const Constant = {
    "en":{
        "Home" : {
            "url": "/",
            "Breadcrumb": "Home",
            "Title": "Portfolio",
            "Card": {
                "ticket_number": "37",
                "name": "Sebastian",
                "lastname": "Estrada",
                "second_lastname": "Tuch",
                "jp_letters": "にんたい",
            }
        },
        "About" : {
            "url": "/about",
            "Breadcrumb": "About Me",
            "Title": "About Me",
            "firstText": "Since I was a child, I’ve been fascinated by the idea of creating websites and video games. Over time, I discovered that programming goes far beyond that—it’s a powerful tool for solving problems efficiently. What excites me the most is the endless possibilities for tackling a single challenge and the opportunity to continuously improve the code. I consider myself someone who thinks big and seeks out-of-the-box solutions while paying attention to the details that make a difference. Additionally, I have a strong mindset of perseverance; once I start a project, I commit to seeing it through.",
            "secondText": "I have completed four years of studies in Computer Science and Information Technology Engineering at Universidad del Valle de Guatemala. During this time, I have not only gained technical knowledge but also grown personally, built meaningful friendships, and learned to face challenges with resilience.",
            "languages": "Languages",
            "database": "Databases",
            "frameworks": "Frameworks",
            "tools": "Tools",
            "skills": "Skills",
        },
        "Proyects" : {
            "url": "/proyects",
            "Breadcrumb": "Proyects",
            "Title": "Proyects",
            "Position": "Position",
            "position_description": "Full stack Developer jr.",
            "position_front": "Front-end Developer",
            "position_student": "Student",
            "Description": "Description",
            "OtherProyects": "Other Proyects",
            "TerraControl": {
                "Title": "TerraControl",
                "Position": "Full stack Developer jr.",
                "Description": "Develop the project from scratch, both back-end and front-end, and manage the project as the sole developer.",
                "CompleteDescription": "TerraControl is an app developed in Kotlin using the MVVM architecture, designed to manage farms more easily. I managed this project from scratch, which also required developing an API. Initially, Express was considered, but it was later developed using the AWS Lambda service. Currently, the app is undergoing closed testing on Google Play Console. Also this App has an Database in PostgreSQL.",
                "Image": TerraControl,
            },
            "Nasa": {
                "Title": "Nasa",
                "Position": "Full stack Developer jr.",
                "Description": 'This project was developed as part of a team during the "NASA Space Apps" 2024 hackathon, where it won first place at the national level in Guatemala.',
                "CompleteDescription": "In this project, the goal was to display climate change data provided by NASA for the hackathon. The project was developed using React and Webpack, showcasing how powerful tools can be utilized to visualize and process large sets of environmental data. The project not only emphasized the importance of climate change awareness but also demonstrated our ability to leverage modern web technologies to create dynamic and interactive web applications. This project was awarded the recognition of First Global Winner, representing Guatemala, highlighting the team’s dedication and innovative approach.",
                "Image": Nasa,
                "URL": "https://imagine-our-connected-earth.web.app/",
                "Github": "https://github.com/Jskenpo/imagine-our-connected-earth"
            },
            "Airbnb": {
                "Title": "Airbnb",
                "Position": "Full stack Developer jr.",
                "Description": "Create a replica as close as possible to a house profile on Airbnb.",
                "CompleteDescription": "The Airbnb profile clone was a student project developed using React. The goal of this project was to create a visual replica of a specific page from Airbnb, focusing solely on the design and layout, without implementing any backend functionality. It was an exercise to enhance my skills in frontend development, specifically in React, while working on building a responsive, visually appealing interface that closely matched the original.",
                "Image": Airbnb,
                "Github": "https://github.com/Teviets/STW-Proyecto1",
                "URL": "https://copiaairbnb.web.app/",
            },
            "Pacifiko": {
                "Title": "Pacifiko",
                "Position": "Full stack Developer jr.",
                "Description": "Fix bugs, create new features, and improve the user experience.",
                "CompleteDescription": "At Pacifiko.com, I worked on fixing various bugs and developing new features using PHP, JavaScript, and Python. To achieve this, I utilized technologies such as AJAX, CSS, HTML, and Twig templates, optimizing both the user experience and system performance.\n \nAdditionally, I was involved in the implementation and customization of various modules of OpenCart for the creation and enhancement of management portals, ensuring the platform was more efficient and adaptable to the business's needs.",
                "Image": "https://i.redd.it/rq5yp73l8nic1.png",
                "URL": "https://pacifiko.com/",
            },
            "More": {
                "Title": "Other Proyects",
                "Position": "Full stack Developer jr.",
                "Description": "These projects were developed as part of various challenges and opportunities, showcasing \nthe application of different technologies and methodologies to solve specific problems. \nWhile they did not have the same impact as the previous ones, they represent valuable experiences\n in my growth as a developer.",
                "Image": More,
                "Proyects":{
                    "TableTrek": {
                        "Title": "TableTrek",
                        "Position": "Full stack Developer jr.",
                        "Description": "TableTrek is a web app developed using React, Vue, and Express, designed to simplify restaurant reservations for customers and allow restaurants to easily view and manage bookings.",
                        "Image": TableTrek,
                        "Github": "https://github.com/Teviets/TableTrek",
                    },
                    "ChatXMPP": {
                        "Title": "ChatXMPP",
                        "Position": "Full stack Developer jr.",
                        "Description": "This chat was developed using the XMPP protocol and Kotlin to enable easy communication between students.",
                        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVG_HccNxHFXbMNio1X9vuZwKxpZcWf4b-tg&s",
                        "Github": "https://github.com/Teviets/Proyecto1Redes"
                    },
                    "CositaMia": {
                        "Title": "CositaMia",
                        "Position": "Full stack Developer jr.",
                        "Description": "CositaMia was a project developed in React with the purpose of practicing the Scrum methodology, aiming to be an online clothing store.",
                        "Image": CositaMia,
                        "URL": "https://cositamia-f3bb9.web.app/",
                        "Github": "https://github.com/Jskenpo/Cositamia"
                    },
                }
            },
        },
        "Contact" : {
            "url": "/contact",
            "Breadcrumb": "Contact",
            "Title": "Contact",
            "firstText": "If you have any questions or would like to get in touch, please feel free to contact me. I am always open to new opportunities and collaborations.",
            "secondText": "You can reach me at:",
            "email": "sestradat.37@gmail.com",
            "phone": "+502 4166-9282",
            "linkedin": "https://www.linkedin.com/in/sebastian-estrada-0b73a0274/",
            "github": "https://github.com/Teviets",
        }
    },
    "es":{
        "Home": {
            "url": "/",
            "Breadcrumb": "Inicio",
            "Title": "Portafolio",
            "Card": {
                "ticket_number": "37",
                "name": "Sebastian",
                "lastname": "Estrada",
                "second_lastname": "Tuch",
                "jp_letters": "にんたい",
            }
        },
        "About": {
            "url": "/about",
            "Breadcrumb": "Acerca de mí",
            "Title": "Acerca de mí",
            "firstText": "Desde niño, me ha fascinado la idea de crear sitios web y videojuegos. Con el tiempo, descubrí que la programación va mucho más allá de eso: es una herramienta poderosa para resolver problemas de manera eficiente. Lo que más me emociona son las infinitas posibilidades para abordar un solo desafío y la oportunidad de mejorar continuamente el código. Me considero una persona que piensa en grande y busca soluciones creativas, prestando atención a los detalles que marcan la diferencia. Además, tengo una mentalidad fuerte de perseverancia; una vez que empiezo un proyecto, me comprometo a llevarlo hasta el final.",
            "secondText": "He completado cuatro años de estudios en Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala. Durante este tiempo, no solo adquirí conocimientos técnicos, sino que también crecí personalmente, construí amistades significativas y aprendí a enfrentar los desafíos con resiliencia.",
            "languages": "Idiomas",
            "database": "Bases de datos",
            "frameworks": "Frameworks",
            "tools": "Herramientas",
            "skills": "Habilidades",
        },
        "Proyects": {
            "url": "/proyects",
            "Breadcrumb": "Proyectos",
            "Title": "Proyectos",
            "Position": "Posición",
            "position_description": "Desarrollador Full Stack jr.",
            "position_front": "Desarrollador Front-end",
            "position_student": "Estudiante",
            "Description": "Descripción",
            "OtherProyects": "Otros Proyectos",
            "TerraControl": {
                "Title": "TerraControl",
                "Position": "Desarrollador Full Stack jr.",
                "Description": "Desarrollé el proyecto desde cero, tanto el back-end como el front-end, y gestioné el proyecto como único desarrollador.",
                "CompleteDescription": "TerraControl es una aplicación desarrollada en Kotlin utilizando la arquitectura MVVM, diseñada para gestionar granjas de manera más sencilla. Gestioné este proyecto desde cero, lo que también requirió desarrollar una API. Inicialmente, se consideró Express, pero se desarrolló usando el servicio AWS Lambda. Actualmente, la aplicación está en pruebas cerradas en Google Play Console. Además, esta aplicación tiene una base de datos en PostgreSQL.",
                "Image": TerraControl,
            },
            "Nasa": {
                "Title": "Nasa",
                "Position": "Desarrollador Full Stack jr.",
                "Description": 'Este proyecto fue desarrollado como parte de un equipo durante el hackathon "NASA Space Apps" 2024, donde ganó el primer lugar a nivel nacional en Guatemala.',
                "CompleteDescription": "En este proyecto, el objetivo era mostrar datos sobre el cambio climático proporcionados por la NASA para el hackathon. El proyecto fue desarrollado utilizando React y Webpack, mostrando cómo se pueden utilizar herramientas poderosas para visualizar y procesar grandes conjuntos de datos ambientales. El proyecto no solo destacó la importancia de la concienciación sobre el cambio climático, sino que también demostró nuestra capacidad para aprovechar las tecnologías web modernas para crear aplicaciones web dinámicas e interactivas. Este proyecto recibió el reconocimiento como Primer Ganador Global, representando a Guatemala, destacando la dedicación del equipo y su enfoque innovador.",
                "Image": Nasa,
                "URL": "https://imagine-our-connected-earth.web.app/",
                "Github": "https://github.com/Jskenpo/imagine-our-connected-earth"
            },
            "Airbnb": {
                "Title": "Airbnb",
                "Position": "Desarrollador Full Stack jr.",
                "Description": "Crear una réplica lo más fiel posible de un perfil de casa en Airbnb.",
                "CompleteDescription": "El clon de perfil de Airbnb fue un proyecto estudiantil desarrollado con React. El objetivo de este proyecto fue crear una réplica visual de una página específica de Airbnb, enfocándose únicamente en el diseño y el layout, sin implementar ninguna funcionalidad de backend. Fue un ejercicio para mejorar mis habilidades en desarrollo frontend, específicamente en React, mientras trabajaba en la construcción de una interfaz responsiva y visualmente atractiva que coincidiera estrechamente con el original.",
                "Image": Airbnb,
                "Github": "https://github.com/Teviets/STW-Proyecto1",
                "URL": "https://copiaairbnb.web.app/",
            },
            "Pacifiko": {
                "Title": "Pacifiko",
                "Position": "Desarrollador Full Stack jr.",
                "Description": "Arreglar errores, crear nuevas características y mejorar la experiencia del usuario.",
                "CompleteDescription": "En Pacifiko.com, trabajé en corregir varios errores y desarrollar nuevas características utilizando PHP, JavaScript y Python. Para lograrlo, utilicé tecnologías como AJAX, CSS, HTML y plantillas Twig, optimizando tanto la experiencia del usuario como el rendimiento del sistema.\n \nAdemás, estuve involucrado en la implementación y personalización de varios módulos de OpenCart para la creación y mejora de portales de gestión, asegurando que la plataforma fuera más eficiente y adaptable a las necesidades del negocio.",
                "Image": "https://i.redd.it/rq5yp73l8nic1.png",
                "URL": "https://pacifiko.com/",
            },
            "More": {
                "Title": "Otros Proyectos",
                "Position": "Desarrollador Full Stack jr.",
                "Description": "Estos proyectos fueron desarrollados como parte de varios desafíos y oportunidades, mostrando \nla aplicación de diferentes tecnologías y metodologías para resolver problemas específicos. \nAunque no tuvieron el mismo impacto que los anteriores, representan experiencias valiosas \n en mi crecimiento como desarrollador.",
                "Image": More,
                "Proyects": {
                    "TableTrek": {
                        "Title": "TableTrek",
                        "Position": "Desarrollador Full Stack jr.",
                        "Description": "TableTrek es una aplicación web desarrollada usando React, Vue y Express, diseñada para simplificar las reservas de restaurantes para los clientes y permitir a los restaurantes ver y gestionar las reservas fácilmente.",
                        "Image": TableTrek,
                        "Github": "https://github.com/Teviets/TableTrek",
                    },
                    "ChatXMPP": {
                        "Title": "ChatXMPP",
                        "Position": "Desarrollador Full Stack jr.",
                        "Description": "Este chat fue desarrollado utilizando el protocolo XMPP y Kotlin para permitir una comunicación fácil entre estudiantes.",
                        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVG_HccNxHFXbMNio1X9vuZwKxpZcWf4b-tg&s",
                        "Github": "https://github.com/Teviets/Proyecto1Redes"
                    },
                    "CositaMia": {
                        "Title": "CositaMia",
                        "Position": "Desarrollador Full Stack jr.",
                        "Description": "CositaMia fue un proyecto desarrollado en React con el propósito de practicar la metodología Scrum, con el objetivo de ser una tienda online de ropa.",
                        "Image": CositaMia,
                        "URL": "https://cositamia-f3bb9.web.app/",
                        "Github": "https://github.com/Jskenpo/Cositamia"
                    },
                }
            },
        },
        "Contact": {
            "url": "/contact",
            "Breadcrumb": "Contacto",
            "Title": "Contacto",
            "firstText": "Si tienes alguna pregunta o te gustaría ponerte en contacto, no dudes en comunicarte conmigo. Siempre estoy abierto a nuevas oportunidades y colaboraciones.",
            "secondText": "Puedes contactarme en:",
            "email": "sestradat.37@gmail.com",
            "phone": "+502 4166-9282",
            "linkedin": "https://www.linkedin.com/in/sebastian-estrada-0b73a0274/",
            "github": "https://github.com/Teviets",
        }
    }
}

export default Constant;
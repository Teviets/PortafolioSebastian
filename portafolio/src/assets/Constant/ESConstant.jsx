import TerraControl from '../../assets/drawable/TerraControl.png'
import Nasa from '../../assets/drawable/Nasa.png'
import Airbnb from '../../assets/drawable/CopiaAirbnb.png'
import More from '../../assets/drawable/more.jpeg'
import CositaMia from '../../assets/drawable/CositaMia.png'
import TableTrek from '../../assets/drawable/TableTrek.png'

const Constant = {
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

export default Constant;

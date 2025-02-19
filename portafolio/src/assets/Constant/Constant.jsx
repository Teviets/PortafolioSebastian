import TerraControl from '../../assets/drawable/TerraControl.png'
import Nasa from '../../assets/drawable/Nasa.png'
import Airbnb from '../../assets/drawable/CopiaAirbnb.png'
import More from '../../assets/drawable/more.jpeg'

const Constant = {
    "Home" : {
        "url": "/",
        "Breadcrumb": "Home",
        "Title": "Portfolio",
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
        },
        "Airbnb": {
            "Title": "Airbnb",
            "Position": "Full stack Developer jr.",
            "Description": "Create a replica as close as possible to a house profile on Airbnb.",
            "CompleteDescription": "The Airbnb profile clone was a student project developed using React. The goal of this project was to create a visual replica of a specific page from Airbnb, focusing solely on the design and layout, without implementing any backend functionality. It was an exercise to enhance my skills in frontend development, specifically in React, while working on building a responsive, visually appealing interface that closely matched the original.",
            "Image": Airbnb,
        },
        "Pacifiko": {
            "Title": "Pacifiko",
            "Position": "Full stack Developer jr.",
            "Description": "Fix bugs, create new features, and improve the user experience.",
            "CompleteDescription": "At Pacifiko.com, I worked on fixing various bugs and developing new features using PHP, JavaScript, and Python. To achieve this, I utilized technologies such as AJAX, CSS, HTML, and Twig templates, optimizing both the user experience and system performance.\n \nAdditionally, I was involved in the implementation and customization of various modules of OpenCart for the creation and enhancement of management portals, ensuring the platform was more efficient and adaptable to the business's needs.",
            "Image": "https://i.redd.it/rq5yp73l8nic1.png",
        },
        "More": {
            "Title": "Other Proyects",
            "Position": "Full stack Developer jr.",
            "Description": "These projects were developed as part of various challenges and opportunities, showcasing \nthe application of different technologies and methodologies to solve specific problems. \nWhile they did not have the same impact as the previous ones, they represent valuable experiences\n in my growth as a developer.",
            "CompleteDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Image": More,
        },
    },
}

export default Constant;
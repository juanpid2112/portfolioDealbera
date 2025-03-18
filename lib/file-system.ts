import type { FileSystemType } from "./types"

export const fileSystem: FileSystemType = {
  root: {
    education: {
      "highschool.txt": "Graduated from Instituto Domingo Faustino Sarmiento with a Bachelor's degree in Natural Sciences. \n Completed a 6-year program with an orientation in Natural Sciences, graduating in 2019 with an average grade of 9.14.",
      "university.txt": "Currently studying Information Systems Engineering at UTN - Facultad Regional Villa Maria. \n cI am in my fifth year with an average grade of 8.49. Started the program in March 2020."
    },
    skills: {
      "java.txt": "Proficient in Java programming language, with experience in developing applications using Spring Boot and other frameworks.",
      
      "python.txt": "Experienced in Python programming, including development with Django Rest Framework for building robust back-end solutions.",
      
      "spring_boot.txt": "Skilled in using Spring Boot for building scalable and efficient web applications with a focus on clean architecture and performance.",
      
      "django_rest_framework.txt": "Proficient in using Django Rest Framework to create RESTful APIs with a focus on best practices and security.",
      
      "relational_databases.txt": "Experience working with relational databases such as PostgreSQL, including database design, optimization, and management.",
      
      "requirements_analysis.txt": "Experienced in gathering and analyzing business requirements, translating them into technical specifications for software development.",
      
      "agile_methodologies.txt": "Experienced in working with Agile methodologies (Scrum, Kanban) to deliver software in iterative cycles, ensuring flexibility, collaboration, and continuous improvement."
    },
    experience: {
      "mobile_app_development_1.txt": "Mobile Application Development at CESPAL Alicia | December 2018. \n Designed an Android-based application for the members of the CESPAL Electric Cooperative in Alicia, Córdoba. \n The app allows users to access contact information and services of the cooperative. \n [App link](https://play.google.com/store/apps/details?id=appinventor.ai_aplicacioncespal.Cespal_1&hl=es_419&gl=US).",
      
      "electoral_system_development.txt": "Electoral System Development at Instituto Domingo Faustino Sarmiento, IPEM N°324 Jose Manuel Estrada | October 2019. \n Developed a system based on Microsoft Office Excel macros that simulates elections, recording the voter registry and votes.",
  
      "mobile_app_development_personal.txt": "Personal Project | 2019. \n Designed an Android-based application similar to ordering apps but tailored for businesses in my hometown, Alicia. \n Focused on backend development.",
  
      "backend_development_boras.txt": "Backend Developer at Boras | November 2023 - May 2024. \n Developed backend for a Warehouse Management System (WMS) using Python and the Django framework. Managed databases with PostgreSQL.",
  
      "backend_development_boolean_system.txt": "Backend Developer at Boolean System | August 2024 - October 2024. \n Developed backend for an accounting system using Python and the Django framework. Managed databases with PostgreSQL.",
  
      "price_update_system_development.txt": "Backend Developer at Colegio de Martilleros Corredores Públicos de la Provincia de Córdoba | July 2024 - December 2024. \n Developed backend for a price update system using Python and the Django framework. Managed databases with PostgreSQL."
    },
    projects: {
      "wordle_resolver.txt": " WordleResolver – An intelligent assistant to solve Wordle  | Jan. 2025 - Jan. 2025. \n Developed WordleResolver, a Python tool to help find possible words in the famous game Wordle. \n\n Filters words by length.\n Generates dynamic patterns with regular expressions based on clues.\n Normalizes words, removing accents to improve search.\n Interactive interface where you input clues and the system suggests possible words.\n\nIdeal for those looking to optimize their Wordle strategy or explore linguistic analysis. \n\n GitHub Repository: https://github.com/juanpid2112/WordleResolver.",
  
      "iasql.txt": " IASQL: From natural language to SQL with AI and advanced security | Jan. 2025 - Jan. 2025. \n cdDeveloped IASQL, a system that transforms natural language queries into SQL queries, verified and automatically converted into web visualizations.\n\n How it works:\n User enters a query in natural language.\n Generates the corresponding SQL query.\n Verifies that the query is secure before execution.\n Executes the query on the database.\n Formats the response into HTML for embedding in a webpage or within a React component.\n\n Security and reliability first:\n Generates only SELECT queries to avoid modifying the DB (no INSERT, UPDATE, DELETE).\n Filters sensitive data like credit card information or customer confidential data.\n Validates syntax against the database schema and regular expressions to prevent errors and attacks.\n Ensures compatibility with React by returning structured HTML for easy integration in dynamic dashboards and reports.\n\n Why this is a game-changer:\n Speeds up data analysis without needing SQL experts.\n Makes data accessible in companies without relying on technical teams.\n Compatible with PostgreSQL (and soon with more DB engines).\n Automates result visualization for easy integration into web applications.\n I'm exploring opportunities to take this project further. If you're interested or see a use case in your company, let's talk. I'm open to feedback, collaborations, or even production deployment! "
    },
    contacts: {
      "email.txt": "Email: juanpidealbera@gmail.com.",
      "phone.txt": "Phone: +54 3533 451941.",
      "linkedin.txt": "LinkedIn: www.linkedin.com/in/dealberajuanpablo.",
    },
  },
}


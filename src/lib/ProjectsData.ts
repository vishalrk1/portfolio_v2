import { Project } from "./Types";

export const ProjectsData: Project[] = [
  {
    title: "LuxeSelect",
    description:
      "Built a full-stack e-commerce site with Django (backend) and ReactJS (frontend). Integrated PhonePe API for secure payment transactions. Used ReactJS ContextAPI for state management. Used Django Rest Framework for creating robust APIs, for smooth flow between backend & frontend. Ensured secure user authentication with JWT tokens, efficient product management & responsive design using TailwindCSS.Enhanced user experience with advanced streamlined cart, and checkout.",
    gitlink: "https://github.com/rainasaxena/Ecomm",
    livelink: "https://luxeselect.vercel.app/",
    skills: [
      {
        name: "JavaScript",
      },
      {
        name: "Python",
      },
      {
        name: "React.js",
      },
      {
        name: "Django",
      },
      {
        name: "TailwindCSS",
      },
    ],
  },

  {
    title: "Cloud Play: Jio Games Cloud",
    description: "Contributed to the development and performance optimization of Jio Games Cloud. Analyzed the website’s performance using tools such as PWA Builder and Lighthouse, and implemented recommended changes to improve load times, responsiveness, and user experience. These optimizations resulted in the platform ranking third on Google search results for 'cloud gaming.' Involved in tasks like Research and Development (R&D), Front-End Development, Search Engine Optimization (SEO), Debugging, Progressive Web Applications (PWAs), and Sonarqube.",
    gitlink: "",
    livelink: "https://cloud.jiogames.com/",
    skills: [
      { name: "Lighthouse" },
      { name: "R&D" },
      { name: "Front-End Development" },
      { name: "SEO" },
      { name: "Debugging" },
      { name: "PWAs" },
      { name: "Sonarqube" }
    ]
  },

  {
    title: "JioKrishi",
    description: "Contributed to the website's translation initiative, ensuring global accessibility for agricultural enthusiasts. Engaged in component design and development, enhancing user interfaces to make information more intuitive for farmers.",
    gitlink: "",
    livelink: "https://www.jiokrishi.com/",
    skills: [
      {
        name: "JavaScript",
      },
      {
        name: "React.js",
      },
      { name: "JSON" },
      { name: "Website Translation" },
      { name: "Front-End Development" },
    ]
  },

  {
    title: "Nike Clone",
    description:
      "Crafted a ReactJS based Nike clone featuring a user login system and React Hot Toast for dynamic notifications.The frontend is enriched with AOS animations for a modern, visually captivating design.Implemented user authentication using the DummyJSON.com API.",
    gitlink: "https://github.com/rainasaxena/nike-store",
    livelink: "nike-store-taupe.vercel.app",
    skills: [
      {
        name: "React.js",
      },
      {
        name: "Fetch API",
      },
      {
        name: "SASS",
      },
    ],
  },

  {
    title: "Multiple Object Detection in Traffic Places",
    description: "Developed a solution to detect multiple vehicles in traffic for autonomous/self-driving vehicle systems. Utilized feature extraction methods such as Histogram Oriented Gradients (HOG) in the spatial domain and Discrete Fourier Transform in the frequency domain. Classified the results using an XGBoost ensemble learning model, achieving an accuracy of 99%.",
    gitlink: "",
    livelink: "",
    skills: [
      { name: "Machine Learning" },
      { name: "Digital Image Processing" },
      { name: "Artificial Intelligence (AI)" }
    ]
  },

  {
    title: "Secure Session-Key Establishment for Smart Home Devices",
    description:
      "A robust algorithmic framework for secure device registration, bootstrapping, and authentication. Leveraging HMAC-SHA256 for MAC generation ensures tamper resistance, while its lightweight design ensures efficiency on smart devices. Bootstrapping is achieved with a nonce, and devices are registered using secret keys. Scalable and flexible, it accommodates multiple devices without compromising security, offering adjustable parameters for tailored security requirements, including timestamp difference tolerance.",
    gitlink: "",
    livelink: "",
    skills: [
      {
        name: "Python",
      },
      {
        name: "Cryptography",
      },
      {
        name: "Network Security",
      },
    ],
  },
];

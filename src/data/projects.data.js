import chapAppImg from "../assets/images/mockups/chat_app.png";
import secretShareImg from "../assets/images/mockups/secret_share.png";
import nikeCloneImg from "../assets/images/mockups/nike_clone.png";
import gameHubImg from "../assets/images/mockups/game_home.png";

export const projectData = [
  {
    id: 1,
    name: "Chat App",
    summary:
      "This modern MERN stack application leverages cutting-edge technologies like Vite, Tailwind, localstorage and Socket.io for a blazing-fast, responsive and real-time user experience. Secure authentication with JWT and centralized state management with Redux ensure robustness and scalability. With its clean UI and diverse potential applications.",
    imageUrl: chapAppImg,
    stack: [
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "Socket.IO",
      "BcryptJS",
      "JWT",
      "Axios",
      "Redux",
      "React-hook-form",
      "TailwindCSS",
      "DaisyUI",
      "LocalStorage",
      "React-router-dom",
      "React-hot-toasts",
      "Vite",
    ],
    testCredentials: ["johndoe123", "password"],
    sourceCodeUrl: "https://github.com/DE4D-P00L/ChatApp-React",
    liveDemoUrl: "https://chat-app-r2oe.onrender.com",
  },
  {
    id: 2,
    name: "Secret Share",
    summary:
      "This secret sharing app leverages ReactJS for its core structure and utilizes technologies like TailwindCSS for a responsive and stylish UI. Form handling and validation are streamlined with React-Hook-Form, while navigation across different sections is made possible by React-Router-Dom. ReduxJS and Redux Toolkit manage the application's state, and Axios facilitates communication with the server. LocalStorage securely stores the JWT token, potentially for user authentication. Moreover, the app allows for anonymous chat functionality, offering flexibility in how users interact.",
    imageUrl: secretShareImg,
    stack: [
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "BcryptJS",
      "LocalStorage",
      "JWT",
      "Axios",
      "Redux",
      "React-hook-form",
      "TailwindCSS",
      "React-router-dom",
      "React-icons",
      "Vite",
    ],
    testCredentials: ["johndoe123@gmail.com", "password"],
    sourceCodeUrl: "https://github.com/DE4D-P00L/SecureMessage",
    liveDemoUrl: "https://secret-share-btri.onrender.com",
  },
  {
    id: 3,
    name: "Nike Clone",
    summary:
      "Swoosh into a near-authentic Nike haven! This clone app replicates the familiar Nike experience, built with lightning-fast Vite, interactive React, and stylish TailwindCSS. Browse collections, filter favorites, even fill your virtual cart – all mirroring the real Nike site. Unleash your inner sneakerhead without breaking the bank!",
    imageUrl: nikeCloneImg,
    stack: ["ReactJS", "TailwindCSS", "React-router-dom", "Vite"],
    sourceCodeUrl: "https://github.com/DE4D-P00L/StoreApp",
    liveDemoUrl: "https://store-app-xao7.onrender.com",
  },
  {
    id: 4,
    name: "GameHub",
    summary:
      "Immerse yourself in a world of gaming with this captivating catalogue website! Built with the web's building blocks (HTML, CSS, JS), it showcases diverse games with enticing trailers and summaries. A responsive menu keeps navigation smooth on any device. Behind the scenes, PHP bridges the gap, fetching information like summaries and trailers from a MySQL database, painting a complete picture of each game. Discover your next adventure awaits, all in one convenient and visually stunning location!",
    imageUrl: gameHubImg,
    stack: ["HTML", "CSS", "JavaScript", "GSAP", "PHP", "MySQL"],
    sourceCodeUrl:
      "https://github.com/DE4D-P00L/Code_Repo/tree/main/MCA_project",
    liveDemoUrl:
      "https://de4d-p00l.github.io/Code_Repo/Project_1/Home/index.html",
  },
];

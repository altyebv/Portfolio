import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  tripguide,
  threejs,
  cocktail,
  iphone
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "CS Student",
    company_name: "MST college",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2018 - 2022",
    points: [
    "Built a strong foundation in core computer science concepts including data structures, algorithms, OOP, databases, and operating systems.",
    "Gained hands-on experience with Java and SQL, while developing an early interest in software design and systems thinking.",
    "Collaborated on academic projects that sharpened my skills in problem-solving and code clarity.",
    "Pushed beyond the classroom — explored modern tools, open-source contributions, and began experimenting with web development and AI.",
    "Navigated challenges during political unrest and relocation — never stopped learning, and laid the groundwork for becoming a New Gen Developer."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "RCC",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2024 - July 2024",
    points: [
    "Built and maintained modern web applications using the MERN stack (MongoDB, Express, React, Node.js).",
    "Designed scalable APIs and efficient backend systems with Node.js and MongoDB.",
    "Implemented responsive UIs with React.js and TailwindCSS, ensuring optimal user experience across all devices.",
    "Collaborated with designers and dev teams to deliver high-impact features and intuitive user flows.",
    "Practiced clean architecture, modular design, and conducted code reviews to maintain code quality."
    ],
  },
  {
    title: "Android Developer",
    company_name: "RCC",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2024 - April 2025",
    points: [
    "Developed modern Android applications using Kotlin and Jetpack Compose.",
    "Built apps with Room DB, Retrofit, Material3, and responsive UI patterns.",
    "Explored system-level functionality like custom ringer control and intent handling for smarter device behavior.",
    "Created intuitive mobile UIs and dynamic navigation flows, enhancing usability and user engagement.",
    "Focused on integrating AI into Android workflows and building foundations for smart mobile systems."
    ],
  },
  {
    title: "AI Developer ",
    company_name: "Self",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
    "Designed and deployed AI-powered tools, including NLP agents and computer vision utilities using Python, spaCy, Transformers, and OpenCV.",
    "Integrated AI into real-world workflows — from intelligent chatbots to data extraction pipelines and smart automation.",
    "Built retrieval-augmented systems combining traditional code with LLMs and vector databases for scalable intelligence.",
    "Continuously experimenting with lightweight, locally-deployable models to maximize performance without GPU dependency.",
    "Focusing on applied AI — solving practical problems with deployable, efficient solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "iPhone 15 Launch Page Replica",
    description:
      "A sleek, scroll-driven replica of the iPhone 15 launch website, featuring an interactive 3D model and dynamic animations. Built to showcase modern front-end techniques and immersive product presentation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/altyebv/Apple-iPhone15",
    deployment_link: "https://cloned-iphone.vercel.app/",
  },
  {
    name: "Mojito - Cocktail Shop Website",
    description:
      "A vibrant and responsive website for a fictional cocktail shop. Designed with a clean aesthetic and modern UI to highlight menu items, promotions, and contact info.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "Gsap",
        color: "green-text-gradient",
      },
    ],
    image: cocktail,
    source_code_link: "https://github.com/altyebv/Mojito",
    deployment_link: "https://shaltout-fresh.vercel.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    deployment_link: "https://tripguide-website.vercel.app/",
    
  },
];

export { services, technologies, experiences, testimonials, projects };

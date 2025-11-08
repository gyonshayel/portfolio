export const projects = [
  {
    // Project 1
    name: "E-commerce Project",
    description: `A fully functional responsive E-commerce web application based on Amazon, built with React and styled using Tailwind CSS and CSS. Features a homepage with product listings from DummyJSON API, a checkout page with access to the cart, an orders page and a tracking page that simulates order status updates.`,
    features: [
      "Ability to search and browse products.",
      "Pagination for smooth navigation between products pages.",
      "Add to cart functionality.",
      "Product details page.",
      "Ability to update or remove product quantities and change delivery option at checkout.",
      "Order history page with 'Order Again' functionality.",
      "Tracking page simulating order tracking.",
      "Context API for managing cart.",
      "React router for navigating through different pages.",
    ],
    thumbnail: "/projects/e-commerce/thumbnail.png",
    images: [
      "/projects/e-commerce/image-1.png",
      "/projects/e-commerce/image-2.png",
      "/projects/e-commerce/image-3.png",
      "/projects/e-commerce/image-4.png",
      "/projects/e-commerce/image-5.png",
      "/projects/e-commerce/image-6.png",
      "/projects/e-commerce/image-7.png",
      "/projects/e-commerce/image-8.png",
    ],
    technologies: ["React", "Tailwind CSS", "CSS"],
    github: "https://github.com/gyonshayel/E-commerce-Project",
    website: "https://e-commerce-project-nu-puce.vercel.app/",
  },

  {
    // Project 2
    name: "Portfolio",
    description:
      "A modern fully responsive personal portfolio website built with React and styled using Tailwind CSS and CSS to showcase my skills and projects. Includes sections for projects, skills and contact, with smooth navigation and a minimal, professional design.",
    features: [
      "Responsive layout using Grid and Flexbox.",
      "Smooth navigation and interactive UI components.",
    ],
    thumbnail: "/projects/portfolio/thumbnail.png",
    images: [
      "/projects/portfolio/image-1.png",
      "/projects/portfolio/image-2.png",
      "/projects/portfolio/image-3.png",
      "/projects/portfolio/image-4.png",
    ],
    technologies: ["React", "Tailwind CSS", "CSS"],
    github: "https://github.com/gyonshayel/Portfolio-website",
    website: "https://portfolio-website-ten-blond-63.vercel.app/",
  },

  {
    // Project 3
    name: "To-Do App",
    description:
      "A fully featured To-Do app built with React and styled using Tailwind CSS. Allows users to manage tasks efficiently across multiple categories. Designed with a focus on usability, responsiveness and modern react best practices.",
    features: [
      "Add, update and delete To-Dos.",
      "Can create and delete custom categories(lists).",
      "Filter tasks by status or type, including All, Completed, Scheduled, Important and Today.",
      "Each To-Do can have a note, due date, priority marking and completion status.",
      "Real time search to quickly find tasks across all categories.",
      "Context API for managing To-Dos and Lists.",
      "React router for navigating through different sections.",
    ],
    thumbnail: "/projects/to-do/thumbnail.png",
    images: [
      "/projects/to-do/image-1.png",
      "/projects/to-do/image-2.png",
      "/projects/to-do/image-3.png",
      "/projects/to-do/image-4.png",
      "/projects/to-do/image-5.png",
      "/projects/to-do/image-6.png",
      "/projects/to-do/image-7.png",
    ],
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/gyonshayel/To-Do-App",
    website: "https://to-do-app-flame-alpha-97.vercel.app/",
  },

  {
    // Project 4
    name: "Movie App",
    description:
      "A fully responsive, modern React web app that allows users to browse, search and explore movies. Provides detailed movie information and let users favorite movies or save them to watch later. This app integrates real world data through TMDB API.",
    features: [
      "Browse Top Picks, Popular, Now Playing and Upcoming movies with dynamic content from the TMDB API",
      "Real time search with suggestions and view movie data in a structured, responsive layout.",
      "Movie details page including rating, genres, synopsis, trailer and images, cast details, reviews and similar movies.",
      "Can save movies to watch later or add them to favorites, both stored in localStorage for persistence.",
      "Loading skeletons and error handling for UX enhancements.",
      "Context API for handling watch later.",
      "React router for navigating through different pages.",
    ],
    thumbnail: "/projects/movie/thumbnail.png",
    images: [
      "/projects/movie/image-1.png",
      "/projects/movie/image-2.png",
      "/projects/movie/image-3.png",
      "/projects/movie/image-4.png",
      "/projects/movie/image-5.png",
      "/projects/movie/image-6.png",
      "/projects/movie/image-7.png",
      "/projects/movie/image-8.png",
    ],
    technologies: ["React", "Tailwind CSS", "Shadcn UI Library"],
    github: "https://github.com/gyonshayel/Movie-App",
    website: "https://movie-app-vert-alpha.vercel.app/",
  },

  {
    // Project 5
    name: "Weather App",
    description:
      "A responsive weather application that provides real-time weather data and forecasts using WeatherAPI. Automatically detects the user's location (with given permission) and displays local weather data. Users can search for locations and toggle between different temperature units.",
    features: [
      "Fetches real time weather data from WeatherAPI.",
      "Detects location via Geolocation API.",
      "Saves the last searched location or user's location in localStorage for faster reload.",
      "Displays current, hourly and 7 day forecasts.",
      "Temperature toggle between Celsius and Fahrenheit.",
    ],
    thumbnail: "/projects/weather/thumbnail.png",
    images: [
      "/projects/weather/image-1.png",
      "/projects/weather/image-2.png",
      "/projects/weather/image-3.png",
      "/projects/weather/image-4.png",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/gyonshayel/Weather-App",
    website: "https://weather-app-alpha-red-28.vercel.app/",
  },
];

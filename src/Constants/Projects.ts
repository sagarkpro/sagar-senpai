import ProjectDetails from "@/models/ProjectDetails";

export const Projects: ProjectDetails[] = [
  {
    title: "Fire Home - Personalized Home Page",
    image: "/projects/fire-home-dashboard-wbg.png",
    github: "https://github.com/sagarkpro/fire-home",
    liveDeployment: "https://sagarkpro.github.io/fire-home/",
    contents: [
      "**ONLY FOR DESKTOP BROWSERS**",
      "A personalized browser home page built with Next.js 14 and Tailwind CSS for quick, distraction-free access to favorite sites and tools.",
      "Includes quick access links for faster browsing and a tools section featuring a GUID Generator (with more tools planned).",
      "Features a background image toggle to switch between minimal and aesthetic modes.",
      "Fully responsive layout, optimized for different screen sizes and devices.",
      "Clean, fast, and visually appealing UI for daily productivity.",
    ],
  },
  {
    title: "Flight Reservation System",
    image: "/projects/flight-reserv-dashboard.png",
    github: "https://github.com/sagarkpro/flight-reservation-system",
    contents: [
      "A full-stack web application for booking dummy flight tickets, selecting seats, and managing reservations — built to demonstrate complete end-to-end application development.",
      "Implements secure JWT-based authentication for user login, logout, and session management.",
      "Includes a dynamic flight search and booking system with real-time seat selection using an interactive seat map.",
      "Provides booking management features allowing users to view and modify their existing reservations.",
      "Built with React.js for frontend, Spring Boot for backend, and MySQL for data storage — showcasing a complete full-stack architecture.",
    ],
  },
  {
    title: "Login & Registration UI Starter",
    image: "/projects/auth-ui-validations.png",
    github: "https://github.com/sagarkpro/login-registration-ui-starter",
    contents: [
      "A starter template built with Next.js 15 and Tailwind CSS for quickly setting up secure applications with authentication.",
      "Includes clean and responsive Login and Registration screens ready to connect with any backend authentication service.",
      "Features form validation using Zod for robust and user-friendly input handling.",
      "Backend-ready — designed to integrate seamlessly with a Spring Boot backend for authentication logic.",
      "Perfect for kickstarting secure, modern web applications with a minimal setup and customizable UI.",
    ],
  },
  {
    title: "Kage Pass – Shadow Pass Authentication System",
    image: "/projects/kage-pass-swagger.png",
    github: "https://github.com/sagarkpro/kage-pass",
    contents: [
      "Kage Pass (影パス) is a lightweight, in-house JWT-based authentication system built with Java 24 and Spring Boot 3.3.",
      "Inspired by the silent grace of ninjas, it embodies stealth and precision in user authentication and token validation.",
      "Directly compatible with jwt-auth-ui, making it easy to plug into your frontend for rapid secure app development.",
      "Includes features like user registration, login, user search, and user updates — all protected by robust JWT middleware.",
      "Implements Spring Security and JWT for token-based authentication with configurable MariaDB integration.",
      "Built with a philosophy of silent strength — operating in the background to provide unbreakable protection for your app.",
    ],
  }
]
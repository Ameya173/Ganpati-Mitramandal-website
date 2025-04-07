import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "aos/dist/aos.css" // Animation library CSS
import AOS from "aos"

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: "ease-out",
  once: false,
  mirror: true,
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


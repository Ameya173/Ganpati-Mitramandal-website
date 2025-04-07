import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Moraj Ganeshotsav Mandal</h1>
        <p>Celebrating 10 days of devotion, culture, and community</p>
        <div className="hero-buttons">
          <Link to="/events" className="btn">
            View Events
          </Link>
          <Link to="/gallery" className="btn btn-secondary">
            Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero


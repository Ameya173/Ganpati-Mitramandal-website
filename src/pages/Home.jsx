"use client"

import { useEffect } from "react"
import Hero from "../components/Hero"
import CountdownTimer from "../components/CountdownTimer"
import EventCard from "../components/EventCard"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  // Set the target date for Ganesh Chaturthi (example date - update with actual date)
  const ganeshChaturthiDate = "2023-09-19T00:00:00"

  // Featured events data
  const featuredEvents = [
    {
      day: 1,
      date: "September 19, 2023",
      title: "Ganesh Sthapana",
      description: "The auspicious installation of Lord Ganesha idol with traditional rituals and prayers.",
      time: "9:00 AM - 12:00 PM",
      image: "/images/event1.jpg",
    },
    {
      day: 5,
      date: "September 23, 2023",
      title: "Cultural Night",
      description: "An evening filled with music, dance performances and cultural activities by society members.",
      time: "6:00 PM - 10:00 PM",
      image: "/images/event2.jpg",
    },
    {
      day: 10,
      date: "September 28, 2023",
      title: "Ganpati Visarjan",
      description: "The grand farewell procession of Lord Ganesha with chanting, music and celebrations.",
      time: "4:00 PM onwards",
      image: "/images/event3.jpg",
    },
  ]

  useEffect(() => {
    // Initialize any animations or effects
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home-page">
      <Hero />

      <section className="section about-section-wrapper">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            About Moraj Ganeshotsav Mandal
          </h2>
          <div className="about-section">
            <div className="about-image" data-aos="fade-right" data-aos-delay="100">
              <div className="about-image-frame">
                <img src="/images/logo.gp.jpg" alt="Moraj Ganeshotsav Mandal" />
              </div>
              <div className="about-image-decoration"></div>
            </div>
            <div className="about-content" data-aos="fade-left" data-aos-delay="200">
              <p>
                Moraj Ganeshotsav Mandal is a vibrant community celebration organized by the residents of Moraj Society,
                a complex of 32 buildings. For over two decades, we have been celebrating the festival of Lord Ganesha
                with great devotion and enthusiasm.
              </p>
              <p>
                Our 10-day celebration brings together people from all walks of life, fostering community spirit and
                preserving our cultural heritage through various religious ceremonies, cultural programs, and social
                activities.
              </p>
              <Link to="/about" className="btn">
                <span>Learn More</span>
                <i className="btn-icon">→</i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section countdown-section">
        <div className="container">
          <CountdownTimer targetDate={ganeshChaturthiDate} />
        </div>
      </section>

      <section className="section featured-events">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Featured Events
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Join us for these special events during our 10-day Ganeshotsav celebration
          </p>

          <div className="events-grid">
            {featuredEvents.map((event, index) => (
              <EventCard
                key={index}
                day={event.day}
                date={event.date}
                title={event.title}
                description={event.description}
                time={event.time}
                image={event.image}
              />
            ))}
          </div>

          <div className="text-center mt-2" data-aos="fade-up">
            <Link to="/events" className="btn btn-view-all">
              <span>View All Events</span>
              <i className="btn-icon">→</i>
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Join Our Celebration</h2>
            <p>Be a part of our vibrant community celebration and experience the joy of Ganeshotsav</p>
            <Link to="/contact" className="btn btn-cta">
              <span>Contact Us</span>
              <i className="btn-icon">→</i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


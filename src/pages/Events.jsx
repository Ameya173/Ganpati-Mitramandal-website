"use client"

import { useState } from "react"
import "./Events.css"

const Events = () => {
  // Event data for all 10 days
  const allEvents = [
    {
      day: 1,
      date: "September 19, 2023",
      title: "Ganesh Sthapana",
      description: "The auspicious installation of Lord Ganesha idol with traditional rituals and prayers.",
      time: "9:00 AM - 12:00 PM",
      image: "/images/event1.png",
      details: ["Pran Pratishtha ceremony", "Aarti and bhajans", "Prasad distribution", "Community lunch"],
    },
    {
      day: 2,
      date: "September 20, 2023",
      title: "Children's Day",
      description: "A day dedicated to children with various fun activities, games, and competitions.",
      time: "4:00 PM - 8:00 PM",
      image: "/images/children.png",
      details: ["Drawing competition", "Fancy dress competition", "Story telling session", "Games and prizes"],
    },
    {
      day: 3,
      date: "September 21, 2023",
      title: "Seniors' Special",
      description: "A special day for senior citizens with activities tailored for them.",
      time: "9:00 AM - 11:30 AM",
      image: "/images/Senior.png",
      details: ["Bhajan sandhya", "Health check-up camp", "Antakshari competition", "Special dinner"],
    },
    {
      day: 4,
      date: "September 22, 2023",
      title: "Mahila Mandal Day",
      description: "A day celebrating women with various competitions and cultural activities.",
      time: "4:00 PM - 7:00 PM",
      image: "/images/event4.jpg",
      details: ["Rangoli competition", "Cooking competition", "Fashion show", "Cultural performances"],
    },
    {
      day: 5,
      date: "September 23, 2023",
      title: "Cultural Night",
      description: "An evening filled with music, dance performances and cultural activities by society members.",
      time: "6:00 PM - 10:00 PM",
      image: "/images/event5.jpg",
      details: ["Classical dance performances", "Music performances", "Drama presentation", "Community dinner"],
    },
    {
      day: 6,
      date: "September 24, 2023",
      title: "Sports Day",
      description: "A day of sports and games for all age groups to promote physical fitness and team spirit.",
      time: "8:00 AM - 6:00 PM",
      image: "/images/event6.jpg",
      details: ["Cricket tournament", "Volleyball matches", "Indoor games", "Prize distribution"],
    },
    {
      day: 7,
      date: "September 25, 2023",
      title: "Bhajan Sandhya",
      description: "An evening of devotional songs and music dedicated to Lord Ganesha.",
      time: "7:00 PM - 10:00 PM",
      image: "/images/event7.jpg",
      details: [
        "Professional singers performance",
        "Community bhajan singing",
        "Aarti ceremony",
        "Prasad distribution",
      ],
    },
    {
      day: 8,
      date: "September 26, 2023",
      title: "Talent Show",
      description: "A platform for residents to showcase their unique talents and skills.",
      time: "6:00 PM - 9:00 PM",
      image: "/images/event8.jpg",
      details: ["Singing performances", "Dance performances", "Stand-up comedy", "Magic show"],
    },
    {
      day: 9,
      date: "September 27, 2023",
      title: "Community Service Day",
      description: "A day dedicated to giving back to the community through various service activities.",
      time: "10:00 AM - 5:00 PM",
      image: "/images/event9.jpg",
      details: ["Blood donation camp", "Free health check-up", "Tree plantation drive", "Clothes and food donation"],
    },
    {
      day: 10,
      date: "September 28, 2023",
      title: "Ganpati Visarjan",
      description: "The grand farewell procession of Lord Ganesha with chanting, music and celebrations.",
      time: "4:00 PM onwards",
      image: "/images/event10.jpg",
      details: ["Final aarti ceremony", "Procession with dhol and music", "Visarjan ceremony", "Community dinner"],
    },
  ]

  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleDayClick = (day) => {
    setSelectedDay(day)
    setSelectedEvent(allEvents.find((event) => event.day === day))
  }

  return (
    <div className="events-page">
      <div className="events-hero">
        <div className="container">
          <h1>Festival Schedule</h1>
          <p>Join us for 10 days of celebration, devotion, and community activities</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="days-navigation">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                className={`day-button ${selectedDay === day ? "active" : ""}`}
                onClick={() => handleDayClick(day)}
              >
                Day {day}
              </button>
            ))}
          </div>

          <div className="events-container">
            {selectedEvent ? (
              <div className="selected-event">
                <div className="event-header">
                  <img src={selectedEvent.image || "/placeholder.svg"} alt={selectedEvent.title} />
                  <div className="event-header-overlay">
                    <div className="event-day-badge">Day {selectedEvent.day}</div>
                    <h2>{selectedEvent.title}</h2>
                    <p className="event-date">{selectedEvent.date}</p>
                    <p className="event-time">{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="event-body">
                  <p className="event-description">{selectedEvent.description}</p>

                  <div className="event-details">
                    <h3>Event Details</h3>
                    <ul>
                      {selectedEvent.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="events-list">
                {allEvents.map((event) => (
                  <div key={event.day} className="event-card-horizontal" onClick={() => handleDayClick(event.day)}>
                    <div className="event-card-image">
                      <img src={event.image || "/placeholder.svg"} alt={event.title} />
                      <div className="event-day-badge">Day {event.day}</div>
                    </div>
                    <div className="event-card-content">
                      <h3>{event.title}</h3>
                      <p className="event-date">{event.date}</p>
                      <p className="event-description-short">{event.description}</p>
                      <p className="event-time">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events


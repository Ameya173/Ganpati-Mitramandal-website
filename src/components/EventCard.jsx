import "./EventCard.css"

const EventCard = ({ day, date, title, description, time, image }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={image || "/placeholder.svg"} alt={title} />
        <div className="event-day">Day {day}</div>
      </div>
      <div className="event-details">
        <div className="event-date">{date}</div>
        <h3 className="event-title">{title}</h3>
        <p className="event-description">{description}</p>
        <div className="event-time">{time}</div>
      </div>
    </div>
  )
}

export default EventCard


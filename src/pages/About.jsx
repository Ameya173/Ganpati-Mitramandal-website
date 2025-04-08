import "./About.css"

const About = () => {
  // Committee members data
  const committeeMembers = [
    {
      name: "Rajesh Sharma",
      position: "President",
      image: "/images/member1.jpg",
    },
    {
      name: "Priya Patel",
      position: "Secretary",
      image: "/images/member2.jpg",
    },
    {
      name: "Amit Desai",
      position: "Treasurer",
      image: "/images/member3.jpg",
    },
    {
      name: "Neha Singh",
      position: "Cultural Head",
      image: "/images/member4.jpg",
    },
    {
      name: "Suresh Iyer",
      position: "Event Coordinator",
      image: "/images/member5.jpg",
    },
    {
      name: "Meera Joshi",
      position: "Decoration Head",
      image: "/images/member6.jpg",
    },
  ]

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Know more about Moraj Ganeshotsav Mandal</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="/images/about-image1.jpg" alt="Moraj Ganeshotsav Mandal" />
            </div>
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Moraj Ganeshotsav Mandal was established in 2000 by a group of enthusiastic residents of Moraj Society,
                a residential complex comprising 32 buildings. What started as a small celebration has now grown into
                one of the most vibrant community Ganeshotsav celebrations in the area.
              </p>
              <p>
                For over two decades, we have been celebrating the festival of Lord Ganesha with great devotion and
                enthusiasm. Our 10-day celebration brings together people from all walks of life, fostering community
                spirit and preserving our cultural heritage through various religious ceremonies, cultural programs, and
                social activities.
              </p>
              <p>
                Every year, we strive to make our celebration more inclusive, eco-friendly, and socially responsible. We
                take pride in organizing events that not only entertain but also educate and inspire our community
                members.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-mission">
        <div className="container">
          <div className="vision-mission-content">
            <div className="vision-box">
              <h2>Our Vision</h2>
              <p>
                To create a platform that brings together the community in celebration of our cultural heritage while
                promoting social harmony, environmental consciousness, and community welfare.
              </p>
            </div>
            <div className="mission-box">
              <h2>Our Mission</h2>
              <p>
                To organize a Ganeshotsav celebration that is inclusive, eco-friendly, and socially responsible, while
                preserving the traditional and religious aspects of the festival.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Committee</h2>
          <p className="section-subtitle">Meet the dedicated team behind Moraj Ganeshotsav Mandal</p>

          <div className="committee-grid">
            {committeeMembers.map((member, index) => (
              <div key={index} className="committee-member">
                <div className="member-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section achievements">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2022</h3>
                <p>Won the "Best Eco-friendly Mandal" award from the Municipal Corporation</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2020</h3>
                <p>Organized a virtual Ganeshotsav during the pandemic, connecting over 500 families online</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2018</h3>
                <p>Initiated the "Green Ganesh" campaign, promoting eco-friendly celebrations</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2015</h3>
                <p>Featured in local newspapers for our unique theme-based decorations</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2010</h3>
                <p>Celebrated our 10th anniversary with a grand cultural program featuring renowned artists</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Moraj Ganeshotsav Mandal</h3>
            <p>Celebrating the spirit of Lord Ganesha with devotion and community.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Moraj Society, 32 Buildings Complex</p>
            <p>Email: info@morajganeshotsav.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Moraj Ganeshotsav Mandal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


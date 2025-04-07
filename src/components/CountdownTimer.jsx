"use client"

import { useState, useEffect } from "react"
import "./CountdownTimer.css"

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="countdown-container">
      <h2>Countdown to Ganesh Chaturthi</h2>
      <div className="countdown-timer">
        <div className="countdown-item">
          <div className="countdown-value">{timeLeft.days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{timeLeft.hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{timeLeft.minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{timeLeft.seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer


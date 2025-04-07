"use client"

import { useState } from "react"
import "./GalleryItem.css"

const GalleryItem = ({ image, title, year }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div className="gallery-item" onClick={openModal}>
        <img src={image || "/placeholder.svg"} alt={title} />
        <div className="gallery-overlay">
          <h3>{title}</h3>
          <p>{year}</p>
        </div>
      </div>

      {isOpen && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <img src={image || "/placeholder.svg"} alt={title} />
            <div className="modal-caption">
              <h3>{title}</h3>
              <p>{year}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryItem


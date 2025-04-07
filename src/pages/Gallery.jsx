"use client"

import { useState } from "react"
import GalleryItem from "../components/GalleryItem"
import "./Gallery.css"

const Gallery = () => {
  // Gallery categories
  const categories = ["All", "Decoration", "Events", "Procession", "Cultural Programs"]

  // Gallery items data
  const galleryItems = [
    {
      id: 1,
      image: "/images/gallery1.jpg",
      title: "Ganpati Decoration 2022",
      year: "2022",
      category: "Decoration",
    },
    {
      id: 2,
      image: "/images/gallery2.jpg",
      title: "Cultural Night Performance",
      year: "2022",
      category: "Cultural Programs",
    },
    {
      id: 3,
      image: "/images/gallery3.jpg",
      title: "Visarjan Procession",
      year: "2022",
      category: "Procession",
    },
    {
      id: 4,
      image: "/images/gallery4.jpg",
      title: "Aarti Ceremony",
      year: "2022",
      category: "Events",
    },
    {
      id: 5,
      image: "/images/gallery5.jpg",
      title: "Ganpati Decoration 2021",
      year: "2021",
      category: "Decoration",
    },
    {
      id: 6,
      image: "/images/gallery6.jpg",
      title: "Dance Performance",
      year: "2021",
      category: "Cultural Programs",
    },
    {
      id: 7,
      image: "/images/gallery7.jpg",
      title: "Visarjan Celebration",
      year: "2021",
      category: "Procession",
    },
    {
      id: 8,
      image: "/images/gallery8.jpg",
      title: "Children's Day Event",
      year: "2021",
      category: "Events",
    },
    {
      id: 9,
      image: "/images/gallery9.jpg",
      title: "Ganpati Decoration 2020",
      year: "2020",
      category: "Decoration",
    },
    {
      id: 10,
      image: "/images/gallery10.jpg",
      title: "Music Performance",
      year: "2020",
      category: "Cultural Programs",
    },
    {
      id: 11,
      image: "/images/gallery11.jpg",
      title: "Visarjan Procession",
      year: "2020",
      category: "Procession",
    },
    {
      id: 12,
      image: "/images/gallery12.jpg",
      title: "Community Lunch",
      year: "2020",
      category: "Events",
    },
  ]

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>Memories from our past celebrations</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <GalleryItem key={item.id} image={item.image} title={item.title} year={item.year} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery


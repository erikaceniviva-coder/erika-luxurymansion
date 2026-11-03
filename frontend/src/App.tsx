
import { useState } from "react";
import "./App.css";

const properties = [
  {
    id: 1,
    name: "Villa Aurelia",
    location: "Amalfi Coast, Italy",
    price: "€ 8,500,000",
    beds: 6,
    baths: 7,
    area: "620 m²",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    name: "Casa del Mar",
    location: "Costa Brava, Spain",
    price: "€ 5,200,000",
    beds: 5,
    baths: 4,
    area: "410 m²",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    name: "The Horizon Estate",
    location: "Mykonos, Greece",
    price: "€ 12,900,000",
    beds: 8,
    baths: 9,
    area: "890 m²",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
];

const destinations = [
  {
    name: "Italian Riviera",
    count: "24 PROPERTIES",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "French Riviera",
    count: "18 PROPERTIES",
    image:
      "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Greek Islands",
    count: "16 PROPERTIES",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
  },
];

function App() {
  const [location, setLocation] = useState("All destinations");
  const [type, setType] = useState("All properties");
  const [budget, setBudget] = useState("Any budget");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<
    (typeof properties)[number] | null
  >(null);

  const filteredProperties = properties.filter((property) => {
    const matchesLocation =
      location === "All destinations" ||
      property.location.toLowerCase().includes(location.toLowerCase());

    const price = Number(
      property.price.replace(/[€\s.]/g, "")
    );

    const matchesBudget =
      budget === "Any budget" ||
      (budget === "Under €6M" && price < 6000000) ||
      (budget === "€6M – €10M" && price >= 6000000 && price <= 10000000) ||
      (budget === "Over €10M" && price > 10000000);

    return matchesLocation && matchesBudget;
  });

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="site-logo">
          <span className="logo-symbol">A.</span>
          <span className="logo-name">
            ERIKA LUXURYMANSION
            <small>ESTATES</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "site-nav open" : "site-nav"}>
          <a href="#properties" onClick={() => setMenuOpen(false)}>
            PROPERTIES
          </a>
          <a href="#destinations" onClick={() => setMenuOpen(false)}>
            DESTINATIONS
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            OUR STORY
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
        </nav>

        <a href="#contact" className="header-cta">
          PRIVATE CONSULTATION ↗
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow light">
            THE ART OF EXCEPTIONAL LIVING
          </p>

          <h1>
            Beyond
            <br />
            <em>extraordinary.</em>
          </h1>

          <p className="hero-description">
            A curated collection of the world's most
            exceptional private residences.
          </p>

          <a href="#properties" className="primary-button">
            DISCOVER OUR COLLECTION <span>↗</span>
          </a>
        </div>

        <div className="hero-bottom">
          <span>01 — 03 / EXCLUSIVE COLLECTION</span>
          <span>36° 23' 00.0" N — MEDITERRANEAN</span>
        </div>

        <div className="hero-scroll">SCROLL TO EXPLORE ↓</div>
      </section>

      <section className="intro-section">
        <div className="section-label">
          <span>01 / OUR PHILOSOPHY</span>
          <span>EST. 2026</span>
        </div>

        <div className="intro-grid">
          <h2>
            Not simply
            <br />
            a place to live.
            <br />
            <em>A way to exist.</em>
          </h2>

          <div className="intro-text">
            <p>
              We believe extraordinary properties are
              more than architecture. They are expressions
              of identity, vision and an exceptional way
              of life.
            </p>
            <a href="#about" className="text-link">
              DISCOVER OUR APPROACH ↗
            </a>
          </div>
        </div>
      </section>

      <section className="properties-section" id="properties">
        <div className="section-label">
          <span>02 / THE COLLECTION</span>
          <span>HANDPICKED RESIDENCES</span>
        </div>

        <div className="section-title-row">
          <h2>
            Exceptional
            <br />
            <em>properties.</em>
          </h2>
          <p>
            A selection of remarkable residences
            chosen for their architecture, location
            and distinctive character.
          </p>
        </div>

        <div className="property-search">
          <label>
            DESTINATION
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            >
              <option>All destinations</option>
              <option>Italy</option>
              <option>Spain</option>
              <option>Greece</option>
            </select>
          </label>

          <label>
            PROPERTY TYPE
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option>All properties</option>
              <option>Villa</option>
              <option>Estate</option>
            </select>
          </label>

          <label>
            PRICE RANGE
            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
            >
              <option>Any budget</option>
              <option>Under €6M</option>
              <option>€6M – €10M</option>
              <option>Over €10M</option>
            </select>
          </label>

          <a href="#property-results" className="search-button">
            EXPLORE ↗
          </a>
        </div>

        <div className="property-grid" id="property-results">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <article className="property-card" key={property.id}>
                <div className="property-image">
                  <img src={property.image} alt={property.name} />
                  <span className="property-tag">EXCLUSIVE</span>
                  <button
                    className="property-arrow"
                    onClick={() => setSelectedProperty(property)}
                    aria-label={`View ${property.name}`}
                  >
                    ↗
                  </button>
                </div>

                <div className="property-info">
                  <span className="property-location">
                    {property.location}
                  </span>
                  <h3>{property.name}</h3>

                  <div className="property-details">
                    <span>{property.beds} BEDROOMS</span>
                    <span>{property.baths} BATHS</span>
                    <span>{property.area}</span>
                  </div>

                  <div className="property-price">
                    {property.price}
                    <button
                      onClick={() => setSelectedProperty(property)}
                    >
                      VIEW PROPERTY ↗
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className="empty-results">
              No properties found for this destination.
              Please try another search.
            </p>
          )}
        </div>
      </section>

      <section className="destinations-section" id="destinations">
        <div className="section-label">
          <span>03 / DESTINATIONS</span>
          <span>THE WORLD, CURATED</span>
        </div>

        <div className="section-title-row">
          <h2>
            Extraordinary
            <br />
            <em>places.</em>
          </h2>
          <p>
            From the Mediterranean coastline to the
            world's most prestigious addresses.
          </p>
        </div>

        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <a
              href="#properties"
              className="destination-card"
              key={destination.name}
            >
              <img src={destination.image} alt={destination.name} />
              <span className="destination-number">
                0{index + 1}
              </span>
              <div>
                <span>{destination.count}</span>
                <h3>{destination.name}</h3>
              </div>
              <span className="destination-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="manifesto-image" />
        <div className="manifesto-content">
          <p className="eyebrow">THE ERIKA LUXURYMANSION EXPERIENCE</p>
          <h2>
            The privilege
            <br />
            of <em>exceptional.</em>
          </h2>
          <p>
            A personal approach to extraordinary
            real estate. From private viewings to
            bespoke property advisory, every detail
            is considered.
          </p>
          <a href="#contact" className="primary-button">
            DISCOVER OUR WORLD <span>↗</span>
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>
          Let us find
          <br />
          <em>your extraordinary.</em>
        </h2>
        <a
          href="mailto:concierge@atelierestates.example"
          className="primary-button"
        >
          CONTACT OUR PRIVATE DESK ↗
        </a>
      </section>

      <footer className="site-footer">
        <a href="#home" className="site-logo">
          <span className="logo-symbol">A.</span>
          <span className="logo-name">
            ERIKA LUXURYMANSION
            <small>ESTATES</small>
          </span>
        </a>

        <p>PRIVATE REAL ESTATE. EXTRAORDINARY LIVING.</p>
        <span>© 2026 ERIKA LUXURYMANSION</span>
      </footer>

      {selectedProperty && (
        <div
          className="property-modal"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="property-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProperty(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selectedProperty.image}
              alt={selectedProperty.name}
            />
            <p className="eyebrow">EXCLUSIVE RESIDENCE</p>
            <h2>{selectedProperty.name}</h2>
            <p>{selectedProperty.location}</p>
            <h3>{selectedProperty.price}</h3>
            <p>
              {selectedProperty.beds} bedrooms ·{" "}
              {selectedProperty.baths} bathrooms ·{" "}
              {selectedProperty.area}
            </p>
            <a
              href={`mailto:concierge@atelierestates.example?subject=${encodeURIComponent(
                `Private viewing - ${selectedProperty.name}`
              )}`}
              className="primary-button"
            >
              REQUEST A PRIVATE VIEWING ↗
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;

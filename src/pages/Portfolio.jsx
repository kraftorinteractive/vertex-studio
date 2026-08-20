import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import SEO from '../components/SEO';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import './Portfolio.css';

// Using the exact 63 filenames from the public/assets/portfolio directory
const portfolioImages = [
  "4@2x.webp",
  "Group 129@2x.webp",
  "Group 130@2x.webp",
  "Group 131@2x.webp",
  "Group 132@2x.webp",
  "Group 133@2x.webp",
  "Group 134@2x.webp",
  "Group 135@2x.webp",
  "Group 136@2x.webp",
  "Group 137@2x.webp",
  "Group 138@2x.webp",
  "Group 139@2x.webp",
  "Group 140@2x.webp",
  "Group 141@2x.webp",
  "Invite - front@2x.webp",
  "Rectangle 101@2x.webp",
  "Rectangle 102@2x.webp",
  "Rectangle 103@2x.webp",
  "Rectangle 104@2x.webp",
  "Rectangle 105@2x.webp",
  "Rectangle 107@2x.webp",
  "Rectangle 108@2x.webp",
  "Rectangle 109@2x.webp",
  "Rectangle 110@2x.webp",
  "Rectangle 112@2x.webp",
  "Rectangle 113@2x.webp",
  "Rectangle 114@2x.webp",
  "Rectangle 115@2x.webp",
  "Rectangle 116@2x.webp",
  "Rectangle 117@2x.webp",
  "Rectangle 118@2x.webp",
  "Rectangle 119@2x.webp",
  "Rectangle 120@2x.webp",
  "Rectangle 121@2x.webp",
  "Rectangle 122@2x.webp",
  "Rectangle 123@2x.webp",
  "Rectangle 126@2x.webp",
  "Rectangle 128@2x.webp",
  "Rectangle 129@2x.webp",
  "Rectangle 132@2x.webp",
  "Rectangle 133@2x.webp",
  "Rectangle 134@2x.webp",
  "Rectangle 135@2x.webp",
  "Rectangle 136@2x.webp",
  "Rectangle 137@2x.webp",
  "Rectangle 138@2x.webp",
  "Rectangle 139@2x.webp",
  "Rectangle 140@2x.webp",
  "Rectangle 141@2x.webp",
  "Rectangle 142@2x.webp",
  "Rectangle 143@2x.webp",
  "Rectangle 144@2x.webp",
  "Rectangle 145@2x.webp",
  "Rectangle 146@2x.webp",
  "Rectangle 147@2x.webp",
  "Rectangle 148@2x.webp",
  "Rectangle 149@2x.webp",
  "Rectangle 95@2x.webp",
  "Rectangle 96@2x.webp",
  "Rectangle 97@2x.webp",
  "Rectangle 98@2x.webp",
  "Rectangle 99@2x.webp",
  "mockup 2@2x.webp"
];

// Helper function to randomly shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    // Scroll to top when loading this page
    window.scrollTo(0, 0);
    
    // Shuffle the images so every visit is unique!
    setImages(shuffleArray(portfolioImages));
  }, []);

  return (
    <div className="portfolio-page">
      <SEO 
        title="Vertex Studio Portfolio | Award-Winning Design & UI/UX Case Studies"
        description="Explore the Vertex Studio portfolio. View our premium showcase of brand identity, web design, packaging, and digital product design for forward-thinking companies."
        type="CollectionPage"
      />
      <Navbar scoped={true} />
      
      <main className="portfolio-main">
        <header className="portfolio-header">
          <h1 className="portfolio-title">Our Work</h1>
          <p className="portfolio-subtitle">A curated showcase of design exploration & creative work.</p>
        </header>

        <section className="portfolio-grid-container">
          <div className="portfolio-masonry">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="portfolio-masonry-item" 
                onClick={() => setLightboxIndex(idx)}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={`/assets/portfolio/${img}`} 
                  alt={`Portfolio item ${idx + 1}`} 
                  loading="lazy" 
                  className="portfolio-image"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />

      <Lightbox
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={images.map(img => ({ src: `/assets/portfolio/${img}` }))}
        plugins={[Zoom]}
        toolbar={{
          buttons: [
            "close",
          ],
        }}
        zoom={{
          maxZoomPixelRatio: 3,
        }}
      />
    </div>
  );
}

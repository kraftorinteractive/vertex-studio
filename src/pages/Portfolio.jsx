import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import './Portfolio.css';

// Using the exact 63 filenames from the public/assets/portfolio directory
const portfolioImages = [
  "4@2x.png",
  "Group 129@2x.png",
  "Group 130@2x.png",
  "Group 131@2x.png",
  "Group 132@2x.png",
  "Group 133@2x.png",
  "Group 134@2x.png",
  "Group 135@2x.png",
  "Group 136@2x.png",
  "Group 137@2x.png",
  "Group 138@2x.png",
  "Group 139@2x.png",
  "Group 140@2x.png",
  "Group 141@2x.png",
  "Invite - front@2x.png",
  "Rectangle 101@2x.png",
  "Rectangle 102@2x.png",
  "Rectangle 103@2x.png",
  "Rectangle 104@2x.png",
  "Rectangle 105@2x.png",
  "Rectangle 107@2x.png",
  "Rectangle 108@2x.png",
  "Rectangle 109@2x.png",
  "Rectangle 110@2x.png",
  "Rectangle 112@2x.png",
  "Rectangle 113@2x.png",
  "Rectangle 114@2x.png",
  "Rectangle 115@2x.png",
  "Rectangle 116@2x.png",
  "Rectangle 117@2x.png",
  "Rectangle 118@2x.png",
  "Rectangle 119@2x.png",
  "Rectangle 120@2x.png",
  "Rectangle 121@2x.png",
  "Rectangle 122@2x.png",
  "Rectangle 123@2x.png",
  "Rectangle 126@2x.png",
  "Rectangle 128@2x.png",
  "Rectangle 129@2x.png",
  "Rectangle 132@2x.png",
  "Rectangle 133@2x.png",
  "Rectangle 134@2x.png",
  "Rectangle 135@2x.png",
  "Rectangle 136@2x.png",
  "Rectangle 137@2x.png",
  "Rectangle 138@2x.png",
  "Rectangle 139@2x.png",
  "Rectangle 140@2x.png",
  "Rectangle 141@2x.png",
  "Rectangle 142@2x.png",
  "Rectangle 143@2x.png",
  "Rectangle 144@2x.png",
  "Rectangle 145@2x.png",
  "Rectangle 146@2x.png",
  "Rectangle 147@2x.png",
  "Rectangle 148@2x.png",
  "Rectangle 149@2x.png",
  "Rectangle 95@2x.png",
  "Rectangle 96@2x.png",
  "Rectangle 97@2x.png",
  "Rectangle 98@2x.png",
  "Rectangle 99@2x.png",
  "mockup 2@2x.png"
];

export default function Portfolio() {
  useEffect(() => {
    // Scroll to top when loading this page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page">
      <Navbar scoped={true} />
      
      <main className="portfolio-main">
        <header className="portfolio-header">
          <h1 className="portfolio-title">Our Work</h1>
          <p className="portfolio-subtitle">A curated showcase of design exploration & creative work.</p>
        </header>

        <section className="portfolio-grid-container">
          <div className="portfolio-masonry">
            {portfolioImages.map((img, idx) => (
              <div key={idx} className="portfolio-masonry-item">
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
    </div>
  );
}

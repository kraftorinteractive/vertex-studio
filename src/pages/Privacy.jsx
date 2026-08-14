import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fullpageExports from '@fullpage/react-fullpage';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import SEO from '../components/SEO';
import './Privacy.css';

const ReactFullpage = fullpageExports.default || fullpageExports;

const sections = [
  { id: 'info-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'how-we-protect', title: 'How We Protect Your Information' },
  { id: 'sharing', title: 'Sharing Your Information' },
  { id: 'cookies', title: 'Cookies' },
  { id: 'how-long', title: 'How Long We Keep Your Information' },
  { id: 'privacy-rights', title: 'Your Privacy Rights' },
  { id: 'concerns', title: 'If You Have a Concern' },
  { id: 'marketing', title: 'Marketing' },
  { id: 'changes', title: 'Changes to This Policy' },
  { id: 'contact-us', title: 'Contact Us' },
];

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('info-we-collect');

  useEffect(() => {
    // Intersection Observer to update active sidebar link
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-150px 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Privacy Policy | Vertex Studio"
        description="The official Privacy Policy for Vertex Studio. Learn how we securely collect, use, and protect your digital information."
      />
      <ReactFullpage
      scrollingSpeed={850}
      navigation={true}
      navigationPosition="right"
      responsiveWidth={800}
      scrollOverflow={false}
      credits={{ enabled: false }}
      anchors={['privacy', 'footer']}
      render={() => (
        <ReactFullpage.Wrapper>
          <section className="section privacy-page-section">
            <Navbar scoped />

            <div className="privacy-page__container">
              {/* Sidebar */}
              <aside className="privacy-sidebar">
                <div className="watermark-wrapper">
                  <div className="privacy-watermark">
                    <div className="watermark-line1">Privacy</div>
                    <div className="watermark-line2">Policy</div>
                  </div>
                </div>
                <nav className="privacy-nav">
                  {sections.map(({ id, title }) => (
                    <button
                      key={id}
                      className={`privacy-nav-link ${activeSection === id ? 'active' : ''}`}
                      onClick={() => scrollToSection(id)}
                    >
                      {title}
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Main Content */}
              <main className="privacy-content">
                <header className="privacy-header">
                  <h1 className="privacy-title">Privacy Policy</h1>
                  <div className="privacy-header-divider"></div>
                  <Link to="#" className="privacy-subtitle-link">Terms of Services</Link>
                </header>

                <p style={{ marginBottom: '40px' }}>
                  Last updated: [Date]<br />
                  At Vertex Studio, we believe privacy is about trust. We only collect information we need to communicate with you, provide our services, and run our business responsibly.<br />
                  This Privacy Policy explains how we handle your personal information in accordance with the New Zealand Privacy Act 2020.
                </p>

                <section id="info-we-collect">
                  <h3>Information We Collect</h3>
                  <p>When you contact us, request a quote, or work with us, we may collect information such as your name, email address, phone number, company details, project information, and anything else you choose to share with us.</p>
                  <p>When you use our website, we may also collect basic technical information such as your browser, device, IP address, and how you interact with our website.</p>
                </section>

                <section id="how-we-use">
                  <h3>How We Use Your Information</h3>
                  <p>We use your information to respond to enquiries, understand your requirements, prepare proposals, deliver projects, communicate with you, process payments, provide support, and improve our services. We may also use information where we need to meet our legal or business responsibilities.</p>
                  <p>We will not use your personal information for unrelated purposes without a lawful reason to do so.</p>
                </section>

                <section id="how-we-protect">
                  <h3>How We Protect Your Information</h3>
                  <p>We take reasonable steps to keep your personal information secure and protected from unauthorised access, loss, misuse, or disclosure.</p>
                  <p>While we take security seriously, no online system can be guaranteed to be completely secure.</p>
                </section>

                <section id="sharing">
                  <h3>Sharing Your Information</h3>
                  <p>We do not sell your personal information.</p>
                  <p>We may share information with trusted service providers who help us operate Vertex Studio or deliver our services. This may include hosting, cloud storage, email, project management, payment, analytics, or technology providers.</p>
                  <p>Some of these providers may operate outside New Zealand. Where this happens, we take reasonable steps to ensure your information is handled in accordance with applicable New Zealand privacy requirements.</p>
                </section>

                <section id="cookies">
                  <h3>Cookies</h3>
                  <p>Our website may use cookies and similar technologies to help the website work properly and understand how visitors use it.</p>
                  <p>We may use analytics or other tools to improve our website and understand what content is useful to visitors.</p>
                  <p>You can control cookies through your browser settings.</p>
                </section>

                <section id="how-long">
                  <h3>How Long We Keep Your Information</h3>
                  <p>We keep personal information only for as long as we reasonably need it for the purpose it was collected, or where we are required to keep it by law.</p>
                  <p>When information is no longer needed, we take reasonable steps to securely delete or dispose of it.</p>
                </section>

                <section id="privacy-rights">
                  <h3>Your Privacy Rights</h3>
                  <p>You have the right to ask us what personal information we hold about you and, where appropriate, ask us to correct it.</p>
                  <p>If you would like to access or update your information, simply contact us at privacy@[yourdomain].nz.</p>
                </section>

                <section id="concerns">
                  <h3>If You Have a Concern</h3>
                  <p>If you have a concern about how we have handled your information, please contact us first. We will do our best to understand the issue and resolve it.</p>
                  <p>If you are not satisfied with our response, you can contact the Office of the Privacy Commissioner of New Zealand.</p>
                </section>

                <section id="marketing">
                  <h3>Marketing</h3>
                  <p>If we send you marketing or other commercial electronic communications, we will follow the applicable requirements under New Zealand law and provide a way for you to unsubscribe.</p>
                  <p>You can ask us to stop marketing communications at any time.</p>
                </section>

                <section id="changes">
                  <h3>Changes to This Policy</h3>
                  <p>We may update this Privacy Policy when our business, technology, or legal requirements change. Any updates will be published on this page with a new "Last updated" date.</p>
                </section>

                <section id="contact-us">
                  <h3>Contact Us</h3>
                  <p>If you have any questions about privacy or how we handle your information, please contact us.</p>
                  <p>
                    Vertex Studio<br />
                    New Zealand<br />
                    Privacy: privacy@[yourdomain].nz<br />
                    General: info@vertexstudio.nz<br />
                    Legal Entity: [Registered Company Name]<br />
                    NZBN: [NZBN]
                  </p>
                </section>
              </main>
            </div>
          </section>
          
          <FooterSection />
        </ReactFullpage.Wrapper>
      )}
    />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fullpageExports from '@fullpage/react-fullpage';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import SEO from '../components/SEO';
import './Privacy.css';

const ReactFullpage = fullpageExports.default || fullpageExports;

const privacySections = [
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

const termsSections = [
  { id: 'intro-acceptance', title: 'Introduction & Acceptance' },
  { id: 'our-services', title: 'Our Services' },
  { id: 'client-responsibilities', title: 'Client Responsibilities' },
  { id: 'payment-fees', title: 'Payment & Fees' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'confidentiality', title: 'Confidentiality' },
  { id: 'warranties-liability', title: 'Warranties & Liability' },
  { id: 'termination', title: 'Termination' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact-us-terms', title: 'Contact Us' },
];

export default function Privacy() {
  const [activeTab, setActiveTab] = useState('privacy');
  const [activeSection, setActiveSection] = useState('info-we-collect');

  const currentSections = activeTab === 'privacy' ? privacySections : termsSections;

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

    // Timeout ensures DOM has updated with the new sections before observing
    const timeoutId = setTimeout(() => {
      currentSections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [activeTab]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setActiveSection(tab === 'privacy' ? privacySections[0].id : termsSections[0].id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEO 
        title={activeTab === 'privacy' ? "Privacy Policy | Vertex Studio" : "Terms of Service | Vertex Studio"}
        description={activeTab === 'privacy' ? "The official Privacy Policy for Vertex Studio." : "The official Terms of Service for Vertex Studio."}
      />
      <div className="privacy-page-wrapper">
        <div className="privacy-page-section">
          <Navbar scoped />

            <div className="privacy-page__container">
              {/* Sidebar */}
              <aside className="privacy-sidebar">
                <div className="watermark-wrapper">
                  <div className="privacy-watermark">
                    <div className="watermark-line1">{activeTab === 'privacy' ? 'Privacy' : 'Terms of'}</div>
                    <div className="watermark-line2">{activeTab === 'privacy' ? 'Policy' : 'Service'}</div>
                  </div>
                </div>
                <nav className="privacy-nav">
                  {currentSections.map(({ id, title }) => (
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
                  {activeTab === 'privacy' ? (
                    <>
                      <h1 className="privacy-title">Privacy Policy</h1>
                      <div className="privacy-header-divider"></div>
                      <button onClick={() => handleTabSwitch('terms')} className="privacy-subtitle-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>Terms of Services</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleTabSwitch('privacy')} className="privacy-subtitle-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>Privacy Policy</button>
                      <div className="privacy-header-divider"></div>
                      <h1 className="privacy-title">Terms of Services</h1>
                    </>
                  )}
                </header>

                {activeTab === 'privacy' ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <p style={{ marginBottom: '40px' }}>
                      Last updated: [Date]<br />
                      Welcome to Vertex Studio. These Terms of Service govern your use of our website and the digital design, branding, and development services we provide.
                    </p>

                    <section id="intro-acceptance">
                      <h3>Introduction & Acceptance</h3>
                      <p>By engaging with Vertex Studio or using our website, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any of our services.</p>
                    </section>

                    <section id="our-services">
                      <h3>Our Services</h3>
                      <p>Vertex Studio provides digital creative solutions, including but not limited to UI/UX design, brand identity, web development, print design, and videography.</p>
                      <p>The specific details, timelines, and deliverables of your project will be outlined in a separate Statement of Work (SOW) or project proposal provided to you before work commences.</p>
                    </section>

                    <section id="client-responsibilities">
                      <h3>Client Responsibilities</h3>
                      <p>To ensure the successful delivery of your project, you agree to provide timely feedback, necessary assets (such as text, images, or logos), and clear communication.</p>
                      <p>Delays in providing necessary materials or feedback may result in adjustments to the project timeline.</p>
                    </section>

                    <section id="payment-fees">
                      <h3>Payment & Fees</h3>
                      <p>Payment terms, including upfront deposits and milestone payments, will be clearly outlined in your project proposal or invoice. Work will typically commence upon receipt of the initial deposit.</p>
                      <p>We reserve the right to pause or suspend work if invoice payments are severely delayed.</p>
                    </section>

                    <section id="intellectual-property">
                      <h3>Intellectual Property</h3>
                      <p>Upon full and final payment for a project, the final deliverables and associated intellectual property rights are transferred to you, the client.</p>
                      <p>Vertex Studio retains the right to display the completed work in our portfolio, website, and marketing materials, unless a strict Non-Disclosure Agreement (NDA) is signed prior to the project.</p>
                    </section>

                    <section id="confidentiality">
                      <h3>Confidentiality</h3>
                      <p>We respect your business. Vertex Studio agrees to keep all proprietary information, trade secrets, and unreleased business plans shared by you strictly confidential. We will only use this information for the purpose of completing your project.</p>
                    </section>

                    <section id="warranties-liability">
                      <h3>Warranties & Liability</h3>
                      <p>We pride ourselves on delivering high-quality, professional work. However, our services are provided "as is" without any implied warranties of ultimate market success or uninterrupted website performance.</p>
                      <p>To the maximum extent permitted by New Zealand law, Vertex Studio shall not be liable for any indirect, consequential, or incidental business losses arising from the use of our deliverables.</p>
                    </section>

                    <section id="termination">
                      <h3>Termination</h3>
                      <p>Either party may terminate a project with written notice if the other party breaches these Terms or the project agreement.</p>
                      <p>In the event of cancellation by the client, Vertex Studio will invoice for all work completed up to the date of cancellation, and any non-refundable deposits will be retained.</p>
                    </section>

                    <section id="governing-law">
                      <h3>Governing Law</h3>
                      <p>These Terms, and any dispute arising out of your engagement with Vertex Studio, shall be governed by and construed in accordance with the laws of New Zealand.</p>
                    </section>

                    <section id="contact-us-terms">
                      <h3>Contact Us</h3>
                      <p>If you have any questions or concerns regarding these Terms of Service, please contact us at:</p>
                      <p>
                        Vertex Studio<br />
                        New Zealand<br />
                        Email: info@vertexstudio.nz
                      </p>
                    </section>
                  </>
                )}
              </main>
            </div>
          </div>
          
          <FooterSection />
      </div>
    </>
  );
}

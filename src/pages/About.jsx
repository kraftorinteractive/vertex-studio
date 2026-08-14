import { useState } from 'react';
import SEO from '../components/SEO';
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';
import fullpageExports from '@fullpage/react-fullpage';

const ReactFullpage = fullpageExports.default || fullpageExports;

const steps = [['Discover', 'Understanding your business, audience, and objectives.'], ['Design', 'Creating intuitive, engaging, and visually refined experiences.'], ['Develop', 'Building reliable, scalable, and future-ready digital solutions.'], ['Deliver', 'Launching with confidence and providing continued support for long-term success.']];
const team = [
    { id: 'bharat-sharma', first: 'Bharat', last: 'Sharma', role: 'CEO & Business Development Manager', image: '/assets/Rectangle 71@2x.png', bio: 'Bharat drives Vertex Studio\'s business strategy, client partnerships, and growth initiatives. His focus is on building strong relationships, identifying new opportunities, and ensuring every collaboration delivers measurable business value.' },
    { id: 'abhishek-mahindrakar', first: 'Abhishek', last: 'Mahindrakar', role: 'Co-Founder & Chief Design Officer', image: '/assets/Rectangle 73@2x.png', bio: 'Leading the creative vision at Vertex Studio, Abhishek specialises in UX/UI design, product strategy, branding, and digital experiences. With over a decade of experience, he transforms complex business challenges into intuitive, user-focused solutions.' },
    { id: 'suvidhi-sharma', first: 'Suvidhi', last: 'Sharma', role: 'Director', bio: 'Suvidhi oversees project delivery and team coordination, ensuring seamless execution from concept to launch across all Vertex Studio engagements.' },
    { id: 'vaishali-thakre', first: 'Vaishali', last: 'Thakre', role: 'Senior Designer', bio: 'Vaishali crafts refined visual identities and digital interfaces that balance aesthetics with usability, bringing brands to life across every touchpoint.' },
    { id: 'sourav-kant', first: 'Sourav', last: 'Kant', role: 'Senior Designer', bio: 'Sourav specialises in UI/UX design and interactive experiences, translating complex requirements into intuitive, engaging digital products.' },
];

export default function About() {
    const [activeMember, setActiveMember] = useState(null);

    return <>
        <SEO 
            title="About Vertex Studio | Our Vision & Creative Team"
            description="Discover the creative minds behind Vertex Studio. We are a global team of designers and developers dedicated to building remarkable brands and digital experiences."
            type="profile"
        />
        <ReactFullpage
            scrollingSpeed={850}
            navigation={true}
            navigationPosition="right"
            responsiveWidth={800}
            scrollOverflow={false}
            credits={{ enabled: false }}
            anchors={['hero', 'mission', 'process', 'team', 'footer']}
            render={() => <ReactFullpage.Wrapper>
                <section className="section about-hero">
                  <Navbar scoped />
                  <img className="about-hero__bg-art" src="/assets/Mask Group 4.png" alt="" aria-hidden="true" />
                  <div className="about-hero__container">
                    <div className="about-hero__text">
                      <h1 className="display">Designing with Purpose.<br />Building with Precision.</h1>
                      <div className="muted">
                        <p>Vertex Studio is a creative design and development studio dedicated to helping businesses build meaningful brands, intuitive digital products, and impactful customer experiences.</p>
                        <p>With over 10 years of industry expertise, we combine strategic thinking, creativity, and technology to deliver solutions that are visually compelling, user-centred, and built for long-term business growth.</p>
                        <p>From ambitious startups to established enterprises, we partner with organisations that value thoughtful design, innovation, and lasting relationships.</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="section mission"><img className="mission__word" src="/assets/Group 95@2x.png" alt="Mission Vision" /><p>To create purposeful design solutions that inspire confidence, strengthen brands, and deliver measurable business impact through creativity, innovation, and collaboration.</p></section>
                <section className="section process">
                  <img className="process__bg-img" src="/assets/Group 43@2x.png" alt="" aria-hidden="true" />
                  <div className="process__intro">
                    <p className="eyebrow">Our Approach</p>
                    <h2 className="display">Thoughtful Process.<br />Exceptional Outcomes.</h2>
                    <p className="muted">We take the time to learn about your business, your users, and your goals before crafting solutions that are strategic, scalable, and purpose-driven.</p>
                  </div>
                  <div className="timeline">
                    <span className="timeline__pulse" aria-hidden="true" />
                    {steps.map(([title, text]) => (
                      <div className="step" key={title}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section className="section team grid-bg">
                    <div className="team__head">
                        <p className="eyebrow">Meet Our Experts</p>
                        <h2 className="display">The People Behind Vertex Studio</h2>
                    </div>
                    <div className="team-grid">
                        {team.map((member) => (
                            <article
                                className={`person${activeMember === member.id ? ' person--active' : ''}`}
                                key={member.id}
                                tabIndex={0}
                                onClick={() => {
                                    if (!window.matchMedia('(hover: hover)').matches) {
                                        setActiveMember(activeMember === member.id ? null : member.id);
                                    }
                                }}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        setActiveMember(activeMember === member.id ? null : member.id);
                                    }
                                }}
                            >
                                <div className="person__top">
                                    <h3>{member.first}<br />{member.last}</h3>
                                    <p className="person__role">{member.role}</p>
                                    <p className="person__bio">{member.bio}</p>
                                </div>
                                <div className="person__photo">
                                    <img
                                        src={member.image ?? '/assets/team-silhouette.svg'}
                                        alt={member.image ? `${member.first} ${member.last}` : ''}
                                        aria-hidden={!member.image}
                                        className={member.image ? 'person__portrait' : 'person__placeholder'}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
                <FooterSection />
            </ReactFullpage.Wrapper>}
        />
    </>;
}

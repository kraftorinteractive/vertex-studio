import FooterSection from '../components/FooterSection';
import fullpageExports from '@fullpage/react-fullpage';

const ReactFullpage = fullpageExports.default || fullpageExports;

const steps = [['Discover', 'Understanding your business, audience, and objectives.'], ['Design', 'Creating intuitive, engaging, and visually refined experiences.'], ['Develop', 'Building reliable, scalable, and future-ready digital solutions.'], ['Deliver', 'Launching with confidence and providing continued support for long-term success.']];
const people = [['Bharat', 'Sharma', 'CEO & Business Development Manager'], ['Abhishek', 'Mahindrakar', 'Co-Founder & Chief Design Officer'], ['Suvidhi', 'Sharma', 'Director'], ['Vaishali', 'Thakre', 'Senior Designer'], ['Sourav', 'Kant', 'Senior Designer']];

export default function About() {
 return <ReactFullpage
  scrollingSpeed={850}
  navigation={true}
  navigationPosition="right"
  responsiveWidth={800}
  credits={{ enabled: false }}
  render={() => <ReactFullpage.Wrapper>
  <section className="section about-hero"><div className="about-hero__layout"><img className="about-hero__image" src="/assets/Mask Group 3@2x.png" alt="Illuminated Vertex mark" /><div><h1 className="display">Designing with Purpose.<br />Building with Precision.</h1><div className="muted"><p>Vertex Studio is a creative design and development studio dedicated to helping businesses build meaningful brands, intuitive digital products, and impactful customer experiences.</p><p>With over 10 years of industry expertise, we combine strategic thinking, creativity, and technology to deliver solutions that are visually compelling, user-centred, and built for long-term business growth.</p><p>From ambitious startups to established enterprises, we partner with organisations that value thoughtful design, innovation, and lasting relationships.</p></div></div></div></section>
  <section className="section mission"><h2 className="display">Mission Vision</h2><p>To create purposeful design solutions that inspire confidence, strengthen brands, and deliver measurable business impact through creativity, innovation, and collaboration.</p></section>
  <section className="section process"><div className="process__intro"><p className="eyebrow">Our Approach</p><h2 className="display">Thoughtful Process.<br />Exceptional Outcomes.</h2><p className="muted">We take the time to learn about your business, your users, and your goals before crafting solutions that are strategic, scalable, and purpose-driven.</p></div><div className="timeline">{steps.map(([title, text]) => <div className="step" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>
  <section className="section team grid-bg"><div className="team__head"><p className="eyebrow">Meet Our Experts</p><h2 className="display">The People Behind Vertex Studio</h2></div><div className="team-grid">{people.map(([first,last,role], index) => <article className={`person ${index < 2 ? 'person--portrait' : ''}`} key={first}><h3>{first}<br />{last}</h3><p>{role}</p>{index === 0 && <img src="/assets/Group 43@2x.png" alt="" />}{index === 1 && <img src="/assets/Mask Group 3@2x.png" alt="" />}</article>)}</div></section>
  <FooterSection />
 </ReactFullpage.Wrapper>}
 />;
}

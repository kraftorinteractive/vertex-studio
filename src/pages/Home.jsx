import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';
import fullpageExports from '@fullpage/react-fullpage';
import { useEffect, useRef, useState } from 'react';

const ReactFullpage = fullpageExports.default || fullpageExports;

function HeroVideo() {
  const firstVideo = useRef(null);
  const secondVideo = useRef(null);
  const transitionInProgress = useRef(false);
  const [visibleVideo, setVisibleVideo] = useState(0);

  useEffect(() => { firstVideo.current?.play().catch(() => { }); }, []);

  const crossfadeBeforeRestart = (index) => {
    const currentVideo = index === 0 ? firstVideo.current : secondVideo.current;
    const nextVideo = index === 0 ? secondVideo.current : firstVideo.current;
    if (!currentVideo || !nextVideo || transitionInProgress.current || !Number.isFinite(currentVideo.duration) || currentVideo.duration - currentVideo.currentTime > 0.75) return;
    transitionInProgress.current = true;
    nextVideo.currentTime = 0;
    nextVideo.play().catch(() => { });
    setVisibleVideo(index === 0 ? 1 : 0);
    window.setTimeout(() => {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      transitionInProgress.current = false;
    }, 720);
  };

  return <div className="hero__video-wrap" aria-hidden="true">
    <video ref={firstVideo} className={`hero__video ${visibleVideo === 0 ? 'hero__video--visible' : ''}`} muted playsInline preload="auto" onTimeUpdate={() => crossfadeBeforeRestart(0)}><source src="/video.mp4" type="video/mp4" /></video>
    <video ref={secondVideo} className={`hero__video ${visibleVideo === 1 ? 'hero__video--visible' : ''}`} muted playsInline preload="auto" onTimeUpdate={() => crossfadeBeforeRestart(1)}><source src="/video.mp4" type="video/mp4" /></video>
  </div>;
}

const assets = '/assets/';
const clientLogos = [
  ['Rectangle 83@2x.png', 'Akiya'],
  ['Group 97@2x.png', 'Arick Imperial'],
  ['Rectangle 85@2x.png', "Chicco's Choice"],
  ['Group 98@2x.png', 'Fraichelle'],
  ['Group 99@2x.png', 'Honeydew Kingdom'],
  ['Rectangle 88@2x.png', 'HC'],
  ['Rectangle 89@2x.png', 'Kaashie'],
  ['White@2x.png', 'MindNMuscl'],
];
const services = [
  ['Group 25.svg', 'Brand Identity', 'Distinctive branding that builds recognition and trust.'],
  ['Group 27.svg', 'UI/UX Design', 'User-focused digital experiences designed for clarity and conversion.'],
  ['Group 29.svg', 'Print Design', 'Professional collateral and packaging that strengthens your brand.'],
  ['Group 31.svg', 'Social Media Design', 'Creative visual content designed to increase engagement and consistency.'],
  ['Group 34.svg', 'Website Design & Development', 'Modern, responsive websites built for performance and growth.'],
  ['Group 36.svg', 'Design Consultation', 'Helping businesses make better design decisions with strategic guidance.'],
  ['Group 38.svg', 'Video Editing', 'Short-form videos to grab attention and boost engagement.'],
];
const workLeft = [
  ['Free_Doypack_Mockup_2@2x.png', 'Akiya packaging design'],
  ['Mockups (3)@2x.png', 'Brand stationery design'],
  ['REPLACE THIS SCREEN111121117111111111@2x.png', 'Brand collateral'],
  ['WhatsApp Image 2024-09-24 at 23.55.49_01c0c17b@2x.png', 'Brand collateral'],
  ['O-morning star tea 2@2x.png', 'Morning Star Tea packaging'],
];
const workRight = [
  ['Marigold Mystique Front@2x.png', 'Marigold Mystique packaging'],
  ['WhatsApp Image 2024-08-28 at 21.22.50_a593d46b@2x.png', 'Brand collateral'],
  ['Mockups 4@2x.png', 'Brand mockup'],
  ['Cold brew@2x.png', 'Cold brew packaging'],
  ['OG Mockup@2x.png', 'Brand mockup'],
];

function AnimatedStat({ targetValue, label }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [suffix, setSuffix] = useState('');
  const statRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const match = targetValue.match(/^(\d+)(.*)$/);
    if (!match) return;
    const targetNum = parseInt(match[1], 10);
    const suf = match[2] || '';
    setSuffix(suf);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            const duration = 1800;
            const startTime = performance.now();

            const animate = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(easeOut * targetNum);
              setDisplayValue(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(targetNum);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div className="stat" ref={statRef}>
      <strong>{hasAnimatedRef.current || displayValue > 0 ? `${displayValue}${suffix}` : `0${suffix}`}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  return <ReactFullpage
    scrollingSpeed={850}
    navigation={true}
    navigationPosition="right"
    responsiveWidth={800}
    credits={{ enabled: false }}
    anchors={['hero', 'services', 'stats', 'work', 'contact']}
    render={() => <ReactFullpage.Wrapper>
      <section className="section hero">
        <Navbar scoped />
        <HeroVideo />
        <div className="hero__monogram" aria-hidden="true" />
        <div className="hero__content">
          <h1 className="display">Design That Moves<br />Businesses Forward</h1>
          <p className="muted">We create thoughtful digital experiences, powerful brands, and scalable websites that help businesses stand out, grow, and succeed.</p>
          <a href="#work" className="button button--outline">View Our Work <span className="arrow">↗</span></a>
        </div>
        <div className="hero__clients" aria-label="Selected clients">
          {clientLogos.map(([file, name], index) => <div className="hero__client" key={name} style={{ '--client-delay': `${-((clientLogos.length - 1 - index) * 3.5)}s` }}><img src={`${assets}${file}`} alt={name} /></div>)}
        </div>
      </section>

      <section className="section services grid-bg">
        <div className="services__intro">
          <h1 className="display">What<br />We Do</h1>
          <div className="services__copy">
            <h2>End-to-End Creative Solutions</h2>
            <p className="muted">From brand identity to digital experiences, we design solutions that connect businesses with their audience and create lasting impact.</p>
            <a href="#work" className="button button--violet">View Our Work <span className="arrow">↗</span></a>
          </div>
        </div>
        <div className="service-grid">
          {services.map(([icon, title, text]) => <article className="service-card" key={title}><img src={`${assets}${icon}`} alt="" /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section stats">
        <div className="stats__bg-shape" aria-hidden="true" />
        <div className="stats__top">
          <div><p className="eyebrow">Why Vertex Studio</p><h2 className="display">Experience.<br />Strategy. Precision.</h2><p className="muted">Every project is approached with research, strategy, and attention to detail, ensuring every solution serves both users and business goals.</p></div>
          <div className="stats__logo"><img className="stats__logo-word" src={`${assets}Group 55.svg`} alt="Vertex Studio" /></div>
        </div>
        <div className="stats__grid">{[['10+', 'Years of Experience'], ['100+', 'Projects Delivered'], ['20+', 'Industries Served'], ['98%', 'Client Satisfaction']].map(([value, label]) => <AnimatedStat key={label} targetValue={value} label={label} />)}</div>
      </section>

      <section className="section work">
        <div className="work__layout">
          <div className="work__copy"><p className="eyebrow">Selected Work</p><h2 className="display">Crafted with Purpose.</h2><p className="muted">Every project reflects our commitment to thoughtful design, usability, and measurable business value.</p><a className="button button--violet" href="#contact">View Our Work <span className="arrow">↗</span></a></div>
          <div className="work__masonry" aria-label="Selected work">
            <div className="work__column"><div className="work__track">{[...workLeft, ...workLeft].map(([file, alt], i) => <div className="work-card" key={i}><img src={`${assets}${file}`} alt={alt} /></div>)}</div></div>
            <div className="work__column"><div className="work__track work__track--b">{[...workRight, ...workRight].map(([file, alt], i) => <div className="work-card" key={i}><img src={`${assets}${file}`} alt={alt} /></div>)}</div></div>
          </div>
        </div>
      </section>
      <FooterSection />
    </ReactFullpage.Wrapper>}
  />;
}

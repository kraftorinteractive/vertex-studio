import React from 'react';
import FooterSection from '../components/FooterSection';

export default function About() {
  return (
    <div className="snap-container">
      {/* Section 1: Hero */}
      <div className="section bg-[#050017] relative h-screen">
        <div className="px-24 h-full flex items-center justify-between">
          <div className="w-1/2">
              <img src="/assets/Mask Group 3@2x.png" className="w-full max-w-[600px]" alt="3D VM Logo" />
          </div>
          <div className="w-1/2 max-w-2xl pl-12">
              <h1 className="text-white text-6xl md:text-[4.5rem] font-clash font-semibold leading-[1.1] mb-8">
                Designing with Purpose.<br/>Building with Precision.
              </h1>
              <div className="text-brand-700 text-lg space-y-6 leading-relaxed">
                <p>
                  Vertex Studio is a creative design and development studio dedicated to helping businesses build meaningful brands, intuitive digital products, and impactful customer experiences.
                </p>
                <p>
                  With over 10 years of industry expertise, we combine strategic thinking, creativity, and technology to deliver solutions that are visually compelling, user-centred, and built for long-term business growth.
                </p>
                <p>
                  From ambitious startups to established enterprises, we partner with organisations that value thoughtful design, innovation, and lasting relationships.
                </p>
              </div>
          </div>
        </div>
      </div>

      {/* Section 2: Mission Vision */}
      <div className="section bg-black h-screen relative flex items-center justify-center">
        <div className="text-center max-w-5xl px-12 z-10 relative">
            <h2 className="text-[5rem] font-clash font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#8c52ff] mb-12">
              Mission Vision
            </h2>
            <p className="text-brand-light text-3xl leading-relaxed font-light">
              To create purposeful design solutions that inspire confidence, strengthen brands, and deliver measurable business impact through creativity, innovation, and collaboration.
            </p>
        </div>
      </div>

      {/* Section 3: Our Approach */}
      <div className="section bg-[#0a0520] relative h-screen overflow-hidden">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-[#150a3f] transform origin-bottom-right -skew-x-[30deg] z-0 rounded-l-[150px]"></div>
          <div className="px-24 pt-40 h-full flex flex-col relative z-10">
            <div className="mb-24">
                <p className="text-brand-accent text-lg mb-4 tracking-wide">Our Approach</p>
                <h2 className="text-white text-6xl md:text-[5rem] font-clash font-semibold leading-tight">
                  Thoughtful Process.<br/>Exceptional Outcomes.
                </h2>
                <p className="text-brand-700 text-xl max-w-2xl mt-6 leading-relaxed">
                  We take the time to learn about your business, your users, and your goals before crafting solutions that are strategic, scalable, and purpose-driven.
                </p>
            </div>
            
            {/* Timeline */}
            <div className="relative mt-12 w-full max-w-6xl">
                <div className="absolute top-3 left-0 w-full h-[1px] bg-brand-400/50"></div>
                <div className="grid grid-cols-4 gap-12">
                  {/* Step 1 */}
                  <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-brand-400 shadow-[0_0_15px_rgba(66,39,180,0.8)] mb-8 mx-auto translate-y-[-10px]"></div>
                      <h3 className="text-white text-3xl font-clash font-semibold mb-4">Discover</h3>
                      <p className="text-brand-700 text-base leading-relaxed">Understanding your business, audience, and objectives.</p>
                  </div>
                  {/* Step 2 */}
                  <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-[#9d72ff] shadow-[0_0_15px_rgba(157,114,255,0.8)] mb-8 mx-auto translate-y-[-10px]"></div>
                      <h3 className="text-white text-3xl font-clash font-semibold mb-4">Design</h3>
                      <p className="text-brand-700 text-base leading-relaxed">Creating intuitive, engaging, and visually refined experiences.</p>
                  </div>
                  {/* Step 3 */}
                  <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-brand-400 shadow-[0_0_15px_rgba(66,39,180,0.8)] mb-8 mx-auto translate-y-[-10px]"></div>
                      <h3 className="text-white text-3xl font-clash font-semibold mb-4">Develop</h3>
                      <p className="text-brand-700 text-base leading-relaxed">Building reliable, scalable, and future-ready digital solutions.</p>
                  </div>
                  {/* Step 4 */}
                  <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-brand-400 shadow-[0_0_15px_rgba(66,39,180,0.8)] mb-8 mx-auto translate-y-[-10px]"></div>
                      <h3 className="text-white text-3xl font-clash font-semibold mb-4">Deliver</h3>
                      <p className="text-brand-700 text-base leading-relaxed">Launching with confidence and providing continued support for long-term success.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>

      {/* Section 4: Experts */}
      <div className="section bg-[#060012] h-screen">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="px-12 pt-32 h-full flex flex-col relative z-10 items-center justify-center">
            <div className="text-center mb-16">
                <p className="text-brand-accent text-lg mb-4 tracking-wide">Meet Our Experts</p>
                <h2 className="text-white text-6xl font-clash font-semibold">The People Behind Vertex Studio</h2>
            </div>
            
            <div className="grid grid-cols-5 gap-6 w-full max-w-7xl">
                {/* Card 1 */}
                <div className="bg-brand-400 rounded-3xl p-6 h-[450px] flex flex-col justify-between relative overflow-hidden group">
                  <div className="z-10 relative">
                      <h3 className="text-white text-2xl font-clash font-semibold mb-2">Bharat<br/>Sharma</h3>
                      <p className="text-brand-100/70 text-xs">CEO & Business Development Manager</p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-brand-400 rounded-3xl p-6 h-[450px] flex flex-col justify-between relative overflow-hidden group">
                  <div className="z-10 relative">
                      <h3 className="text-white text-2xl font-clash font-semibold mb-2">Abhishek<br/>Mahindrakar</h3>
                      <p className="text-brand-100/70 text-xs">Co-Founder &<br/>Chief Design Officer</p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="bg-brand-400 rounded-3xl p-6 h-[450px] flex flex-col justify-between relative overflow-hidden group">
                  <div className="z-10 relative">
                      <h3 className="text-white text-2xl font-clash font-semibold mb-2">Suvidhi<br/>Sharma</h3>
                      <p className="text-brand-100/70 text-xs">Director</p>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="bg-brand-400 rounded-3xl p-6 h-[450px] flex flex-col justify-between relative overflow-hidden group">
                  <div className="z-10 relative">
                      <h3 className="text-white text-2xl font-clash font-semibold mb-2">Vaishali<br/>Thakre</h3>
                      <p className="text-brand-100/70 text-xs">Senior Designer</p>
                  </div>
                </div>
                {/* Card 5 */}
                <div className="bg-brand-400 rounded-3xl p-6 h-[450px] flex flex-col justify-between relative overflow-hidden group">
                  <div className="z-10 relative">
                      <h3 className="text-white text-2xl font-clash font-semibold mb-2">Sourav<br/>Kant</h3>
                      <p className="text-brand-100/70 text-xs">Senior Designer</p>
                  </div>
                </div>
            </div>
          </div>
      </div>

      {/* Section 5: Footer */}
      <FooterSection />
    </div>
  );
}

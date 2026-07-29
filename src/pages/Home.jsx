import React from 'react';
import fullpageExports from '@fullpage/react-fullpage';
const ReactFullpage = fullpageExports.default || fullpageExports;
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      navigation={true}
      navigationPosition="right"
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            
            {/* Section 1: Hero */}
            <div className="section relative h-screen">
              <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
                <source src="/video.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-0 left-0 w-full h-full bg-[#0C032D]/70 mix-blend-multiply z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-center items-center text-center px-4">
                <h1 className="text-white text-6xl md:text-7xl lg:text-[5.5rem] font-clash font-semibold mb-8 tracking-tight max-w-5xl leading-tight">
                  Design That Moves<br/>Businesses Forward
                </h1>
                <p className="text-brand-700 text-xl max-w-3xl mb-12 leading-relaxed">
                  We create thoughtful digital experiences, powerful brands, and scalable websites that help businesses stand out, grow, and succeed.
                </p>
                <button className="flex items-center gap-3 border border-brand-400 rounded-full px-8 py-4 text-lg hover:bg-brand-400 transition-colors">
                  View Our Work <span className="text-xl">↗</span>
                </button>
              </div>

              {/* Bottom Logos */}
              <div className="absolute bottom-16 w-full flex justify-between items-center px-24 z-10 opacity-60">
                <img src="/assets/White-1@2x.png" className="h-10 object-contain" alt="Logo 1" />
                <img src="/assets/HC Logo Negative@2x.png" className="h-10 object-contain" alt="Logo 2" />
                <img src="/assets/Group 51@2x.png" className="h-10 object-contain" alt="Logo 3" />
                <img src="/assets/Group 55@2x.png" className="h-10 object-contain" alt="Logo 4" />
                <img src="/assets/White transparent@2x.png" className="h-10 object-contain" alt="Logo 5" />
              </div>
            </div>

            {/* Section 2: What We Do */}
            <div className="section bg-[#050017] h-screen">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              <div className="px-24 pt-32 h-full flex flex-col justify-center relative z-10">
                <div className="flex justify-between items-start mb-24">
                  <h1 className="text-brand-400 text-[8rem] font-clash font-semibold leading-[0.85] tracking-tight">
                    What<br/>We Do
                  </h1>
                  <div className="max-w-xl text-left pt-6 border-l border-brand-300 pl-12">
                    <h3 className="text-white text-3xl font-clash mb-6">End-to-End Creative Solutions</h3>
                    <p className="text-brand-700 text-lg mb-8 leading-relaxed">
                      From brand identity to digital experiences, we design solutions that connect businesses with their audience and create lasting impact.
                    </p>
                    <button className="bg-brand-400 text-white rounded-full px-8 py-3 hover:bg-brand-300 transition-colors inline-flex items-center gap-3 font-semibold">
                      View Our Work <span>↗</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-12 w-full content-start border-t border-brand-300/30 pt-12">
                   {/* Card 1 */}
                   <div className="group cursor-pointer">
                      <div className="mb-6"><img src="/assets/Group 19.svg" className="h-12 opacity-80 group-hover:opacity-100 transition-opacity" alt="Icon"/></div>
                      <h4 className="text-white text-2xl font-clash mb-3 group-hover:text-brand-accent transition-colors">Brand Identity</h4>
                      <p className="text-brand-500 text-sm leading-relaxed">Distinctive branding that builds recognition and trust.</p>
                   </div>
                   {/* Card 2 */}
                   <div className="group cursor-pointer">
                      <div className="mb-6"><img src="/assets/Group 21.svg" className="h-12 opacity-80 group-hover:opacity-100 transition-opacity" alt="Icon"/></div>
                      <h4 className="text-white text-2xl font-clash mb-3 group-hover:text-brand-accent transition-colors">UI/UX Design</h4>
                      <p className="text-brand-500 text-sm leading-relaxed">User-focused digital experiences designed for clarity and conversion.</p>
                   </div>
                   {/* Card 3 */}
                   <div className="group cursor-pointer">
                      <div className="mb-6"><img src="/assets/Group 23.svg" className="h-12 opacity-80 group-hover:opacity-100 transition-opacity" alt="Icon"/></div>
                      <h4 className="text-white text-2xl font-clash mb-3 group-hover:text-brand-accent transition-colors">Print Design</h4>
                      <p className="text-brand-500 text-sm leading-relaxed">Professional collateral and packaging that strengthens your brand.</p>
                   </div>
                   {/* Card 4 */}
                   <div className="group cursor-pointer">
                      <div className="mb-6"><img src="/assets/Group 25.svg" className="h-12 opacity-80 group-hover:opacity-100 transition-opacity" alt="Icon"/></div>
                      <h4 className="text-white text-2xl font-clash mb-3 group-hover:text-brand-accent transition-colors">Social Media Design</h4>
                      <p className="text-brand-500 text-sm leading-relaxed">Creative visual content designed to increase engagement and consistency.</p>
                   </div>
                   {/* Card 5 */}
                   <div className="group cursor-pointer">
                      <div className="mb-6"><img src="/assets/Group 27.svg" className="h-12 opacity-80 group-hover:opacity-100 transition-opacity" alt="Icon"/></div>
                      <h4 className="text-white text-2xl font-clash mb-3 group-hover:text-brand-accent transition-colors">Website Design</h4>
                      <p className="text-brand-500 text-sm leading-relaxed">Modern, responsive websites built for performance and growth.</p>
                   </div>
                   {/* Card 6 */}
                   <div className="group cursor-pointer">
                      <div className="mb-6"><img src="/assets/Group 29.svg" className="h-12 opacity-80 group-hover:opacity-100 transition-opacity" alt="Icon"/></div>
                      <h4 className="text-white text-2xl font-clash mb-3 group-hover:text-brand-accent transition-colors">Design Consultation</h4>
                      <p className="text-brand-500 text-sm leading-relaxed">Helping businesses make better design decisions with strategic guidance.</p>
                   </div>
                   {/* Card 7 */}
                   <div className="group cursor-pointer">
                      <div className="mb-6"><img src="/assets/Group 31.svg" className="h-12 opacity-80 group-hover:opacity-100 transition-opacity" alt="Icon"/></div>
                      <h4 className="text-white text-2xl font-clash mb-3 group-hover:text-brand-accent transition-colors">Video Editing</h4>
                      <p className="text-brand-500 text-sm leading-relaxed">Short-form videos to grab attention and boost engagement.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Section 3: Stats */}
            <div className="section bg-brand-300 relative h-screen overflow-hidden">
               <div className="absolute top-0 right-0 w-3/4 h-full bg-[#1b0f5c] transform origin-bottom-right -skew-x-[30deg] z-0 rounded-l-[100px]"></div>
               <div className="px-24 pt-40 z-10 relative h-full flex flex-col justify-center">
                  <div className="flex justify-between items-start w-full">
                     <div className="max-w-2xl">
                        <p className="text-brand-accent text-lg mb-6 tracking-wide">Why Vertex Studio</p>
                        <h2 className="text-white text-7xl font-clash font-semibold mb-8 leading-tight">
                           Experience.<br/>Strategy. Precision.
                        </h2>
                        <p className="text-brand-700 text-xl max-w-xl leading-relaxed">
                           Every project is approached with research, strategy, and attention to detail, ensuring every solution serves both users and business goals.
                        </p>
                     </div>
                     <div className="mr-32 pt-12">
                        <img src="/assets/Group 43@2x.png" className="w-[350px]" alt="Vertex Studio Logo" />
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-12 mt-28">
                     <div>
                        <h3 className="text-brand-accent text-7xl font-clash font-bold mb-4">10+</h3>
                        <p className="text-brand-700 text-lg">Years of Experience</p>
                     </div>
                     <div>
                        <h3 className="text-brand-accent text-7xl font-clash font-bold mb-4">100+</h3>
                        <p className="text-brand-700 text-lg">Projects Delivered</p>
                     </div>
                     <div>
                        <h3 className="text-brand-accent text-7xl font-clash font-bold mb-4">20+</h3>
                        <p className="text-brand-700 text-lg">Industries Served</p>
                     </div>
                     <div>
                        <h3 className="text-brand-accent text-7xl font-clash font-bold mb-4">98%</h3>
                        <p className="text-brand-700 text-lg">Client Satisfaction</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Section 4: Selected Work */}
            <div className="section bg-white h-screen">
               <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <div className="flex h-full relative z-10">
                  <div className="w-1/2 px-24 py-32 flex flex-col justify-center border-r border-gray-100">
                     <p className="text-brand-accent text-lg mb-6 tracking-wide">Selected Work</p>
                     <h2 className="text-brand-200 text-[5.5rem] font-clash font-semibold mb-8 leading-none tracking-tight">Crafted with Purpose.</h2>
                     <p className="text-brand-500 text-xl mb-12 max-w-md leading-relaxed">
                        Every project reflects our commitment to thoughtful design, usability, and measurable business value.
                     </p>
                     <button className="bg-brand-400 text-white rounded-full px-10 py-4 text-lg font-semibold hover:bg-brand-300 transition-colors w-fit flex items-center gap-3">
                        View Our Work <span>↗</span>
                     </button>
                  </div>
                  <div className="w-1/2 px-16 py-12 bg-gray-50/50 flex gap-8 h-full overflow-hidden">
                     {/* Column 1 */}
                     <div className="w-1/2 flex flex-col gap-8 animate-[slideUp_20s_linear_infinite]">
                        <img src="/assets/Free_Doypack_Mockup_2@2x.png" className="w-full rounded-[2rem] shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer object-cover aspect-[4/5]" alt="Work 1"/>
                        <img src="/assets/Mockups (3)@2x.png" className="w-full rounded-[2rem] shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer object-cover aspect-square" alt="Work 3"/>
                        <img src="/assets/WhatsApp Image 2024-08-28 at 21.22.50_a593d46b@2x.png" className="w-full rounded-[2rem] shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer object-cover aspect-[4/5]" alt="Work 5"/>
                     </div>
                     {/* Column 2 */}
                     <div className="w-1/2 flex flex-col gap-8 mt-24 animate-[slideUp_25s_linear_infinite]">
                        <img src="/assets/Marigold Mystique Front@2x.png" className="w-full rounded-[2rem] shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer object-cover aspect-[4/5]" alt="Work 2"/>
                        <div className="w-full rounded-[2rem] shadow-lg p-12 bg-brand-100 hover:scale-105 transition-transform duration-500 cursor-pointer flex items-center justify-center aspect-square">
                           <img src="/assets/Group 43@2x.png" alt="Work 4" className="w-full"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Section 5: Footer */}
            <FooterSection />

          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

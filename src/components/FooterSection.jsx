import React from 'react';

export default function FooterSection() {
  return (
    <div className="section bg-[#050017] relative h-screen flex flex-col pt-32 px-16 overflow-hidden">
      <div className="flex justify-between items-start z-10 relative">
        <div className="max-w-xl pt-12">
          <h2 className="text-white text-6xl font-clash mb-2 leading-tight">Let's Build Something</h2>
          <h2 className="text-brand-accent text-6xl font-clash mb-6">Remarkable.</h2>
          <p className="text-brand-700 mb-10 text-xl leading-relaxed max-w-md">
            Whether you're launching a startup, refreshing your brand, or scaling your digital presence, we're ready to help.
          </p>
          <button className="flex items-center gap-3 border border-brand-500 rounded-full px-8 py-4 text-lg hover:bg-white hover:text-black transition-all">
            Start Your Project <span>↗</span>
          </button>
        </div>
        <div className="mr-12">
           <img src="/assets/Mask Group 3@2x.png" alt="3D Logo" className="w-[500px] object-contain" />
        </div>
      </div>
      
      {/* Background Vertex text */}
      <div className="absolute top-[40%] left-0 w-full flex overflow-hidden opacity-30 pointer-events-none z-0">
        <h1 className="text-[18vw] font-clash tracking-widest text-brand-400 mx-auto leading-none scale-y-125 origin-bottom">VERTEX</h1>
      </div>
      
      {/* Footer Nav */}
      <div className="flex justify-between items-end pb-8 z-10 border-t border-brand-300 pt-12 mt-auto">
        <div className="flex items-center gap-8">
          <img src="/assets/Group 43@2x.png" alt="Vertex Studio" className="h-20" />
          <div className="text-brand-700 text-xl border-l-2 border-brand-accent pl-8 py-2 space-y-1">
            <p>Designing brands.</p>
            <p>Creating experiences.</p>
            <p>Building digital success.</p>
          </div>
        </div>
        <div className="flex gap-12 text-brand-700 text-lg mb-4 mr-16">
          <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
          <a href="#portfolio" className="hover:text-brand-accent transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
        </div>
      </div>
      <div className="text-center text-brand-500 text-xs pb-4 opacity-50">
        © 2026 Vertex Studio. All Rights Reserved.
      </div>
    </div>
  );
}

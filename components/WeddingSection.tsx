import Image from "next/image";
import { Button } from "./ui/button";

export default function WeddingSection() {
  return (
    <section className="bg-background-dark w-full pt-16 md:pt-20 flex flex-col items-center">
      {/* Top Banner Area */}
      <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Text */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-12">
          <h2 className="text-white text-4xl md:text-5xl lg:text-[5rem] font-serif leading-[1.1] tracking-tight mb-6 md:mb-8">
            Where Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600">
              Visionary Events
            </span>
            <br />
            Come to Life
          </h2>
          <p className="text-white/70 text-sm md:text-base lg:text-lg font-sans max-w-[400px] mb-8 leading-relaxed">
            We curate unforgettable experiences with seamless execution,
            stunning designs, and unparalleled attention to detail.
          </p>
          <Button className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-black hover:opacity-90 rounded-full px-8 py-6 w-fit text-sm font-sans tracking-wide font-medium border-0 transition-opacity">
            Book Now
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center py-12 px-4 lg:border-l border-white/10">
          <div className="relative w-[280px] sm:w-[350px] md:w-[400px] aspect-[4/5] transform -rotate-6 shadow-[0_0_40px_rgba(245,158,11,0.1)] rounded-sm overflow-hidden bg-black/40 border border-white/10 z-10">
            <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-background-dark rounded-bl-3xl z-10 border-b border-l border-white/10"></div>
            <Image
              src="/images/weeding-left.png" // We might want to change this image later as well if it's too bridal!
              alt="Elegant Event Design"
              fill
              className="object-cover p-2 opacity-90"
            />
            {/* Small yellow flowers decoration */}
            <div className="absolute top-0 left-0 -mt-6 -ml-6 md:-mt-8 md:-ml-8 w-24 h-24 md:w-32 md:h-32 z-20">
                 <div className="absolute top-4 left-4 w-4 h-4 md:w-6 md:h-6 bg-amber-400 rounded-full opacity-80 backdrop-blur shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                 <div className="absolute top-10 left-8 md:top-12 md:left-10 w-6 h-6 md:w-8 md:h-8 bg-yellow-300 rounded-full opacity-90 backdrop-blur shadow-[0_0_20px_rgba(253,224,71,0.4)]"></div>
                 <div className="absolute top-6 left-16 md:top-8 md:left-20 w-4 h-4 md:w-5 md:h-5 bg-amber-500 rounded-full border border-yellow-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-white/10 mt-8 md:mt-12 mb-12 md:mb-16"></div>

      {/* Features & Stats Area */}
      <div className="max-w-[1280px] w-full px-4 flex flex-col items-center relative pb-12 md:pb-20">
        <h3 className="text-white text-3xl md:text-4xl lg:text-[3.5rem] font-serif text-center leading-tight mb-20 md:mb-32 z-10 px-4">
          Crafting Extraordinary Events With
          <br className="hidden sm:block" />
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600">
            Passion & Precision
          </span>
        </h3>

        <div className="relative w-full max-w-[1000px] mt-16 md:mt-24 pb-8 md:pb-16 flex flex-col items-center group">
          
          {/* Central Flower Circle (Absolute positioned above cards) 
              Scales down and adjusts position on mobile */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[45%] md:-translate-y-[55%] w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] rounded-full border-[6px] md:border-[8px] border-background-dark bg-black/40 overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.15)] z-30 flex items-center justify-center group-hover:shadow-[0_0_60px_rgba(245,158,11,0.25)] transition-shadow duration-500">
             <Image
                src="/images/wedding-section.png" 
                alt="Floral Arrangement"
                fill
                className="object-cover scale-105 opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] z-10 pointer-events-none"></div>
          </div>

          {/* Cards Grid wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10 mx-auto w-full max-w-[900px] bg-transparent">
             
             {/* Left Column Container */}
             <div className="flex flex-col border-r-0 md:border-r border-white/10">
                {/* Feature Card Left */}
                <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 h-auto md:h-[280px] pt-32 md:pt-10 relative border-b border-white/10 rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl flex flex-col justify-center hover:bg-white/10 transition-colors duration-300">
                    {/* The cutout effect for the circle - Hidden on mobile, visible on MD+ */}
                    <div className="hidden md:block absolute right-0 bottom-0 w-12 h-12 bg-background-dark rounded-tl-2xl border-t border-l border-white/10 flex items-end justify-end">
                         {/* Subtle corner glow */}
                         <div className="w-1/2 h-1/2 bg-amber-500/10 rounded-tl-full blur-xl"></div>
                    </div>
                    
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 md:mb-6 rounded-full bg-amber-500/10 border border-amber-500/30">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <h4 className="text-white text-lg md:text-xl font-medium mb-3 font-sans tracking-tight">Award-Winning Planners</h4>
                    <p className="text-white/60 text-sm leading-relaxed md:pr-8">
                        Our expert team has earned recognized awards for creativity and design quality. We focus on delivering professional coordination and a premium experience for every client.
                    </p>
                </div>
                {/* Stat Card Left */}
                <div className="bg-black/20 backdrop-blur-sm p-8 md:p-10 h-auto md:h-[180px] md:rounded-bl-2xl flex flex-col justify-center border-b md:border-b-0 border-white/10 hover:bg-black/40 transition-colors duration-300">
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 text-3xl md:text-4xl font-sans mb-1 font-bold tracking-tight">10+</div>
                    <div className="text-amber-500/80 text-xs md:text-sm uppercase tracking-wider font-medium mt-2">Years of Experience</div>
                </div>
             </div>

             {/* Right Column Container */}
             <div className="flex flex-col">
                 {/* Feature Card Right */}
                <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 h-auto md:h-[280px] relative border-b border-white/10 md:rounded-tr-2xl flex flex-col justify-center hover:bg-white/10 transition-colors duration-300">
                    {/* The cutout effect for the circle - Hidden on mobile, visible on MD+ */}
                    <div className="hidden md:block absolute left-0 bottom-0 w-12 h-12 bg-background-dark rounded-tr-2xl border-t border-r border-white/10 flex items-end justify-start">
                         {/* Subtle corner glow */}
                         <div className="w-1/2 h-1/2 bg-amber-500/10 rounded-tr-full blur-xl"></div>
                    </div>
                    
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 md:mb-6 md:pl-8">
                       <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                       </div>
                    </div>
                    <h4 className="text-white text-lg md:text-xl font-medium mb-3 font-sans tracking-tight md:pl-8">Bespoke Experiences</h4>
                    <p className="text-white/60 text-sm leading-relaxed md:pl-8">
                        Every event is unique, so we create themes that reflect your specific vision. From corporate galas to exclusive private parties, each design is carefully crafted to impress.
                    </p>
                </div>
                {/* Stat Card Right */}
                <div className="bg-black/20 backdrop-blur-sm p-8 md:p-10 h-auto md:h-[180px] rounded-b-2xl md:rounded-b-none md:rounded-br-2xl flex flex-col justify-center md:pl-16 hover:bg-black/40 transition-colors duration-300">
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 text-3xl md:text-4xl font-sans mb-1 font-bold tracking-tight">300+</div>
                    <div className="text-amber-500/80 text-xs md:text-sm uppercase tracking-wider font-medium mt-2">Successful Events</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

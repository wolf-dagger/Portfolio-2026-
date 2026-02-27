import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg Image */}
        <div className="absolute inset-0">
          <img
            src="/public/Heor Images/hero-bg.jpg"
            alt="Hero Image"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/50 to-background"></div>
        </div>

        {/* Green dots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#20b2a6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text Content */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  Software Developer | Frontend Dev
                </span>
              </div>
            </div>
            {/* Right column - Image Content */}
          </div>

          {/* Head Line */}
          <div className="space-y-4 mt-5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold md:leading-tight animate-fade-in animation-delay-100">
              From concept to{" "}
              <span className="text-primary glow-text">CODE...</span>
              <br />I build what&nbsp;
              <span className="font-serif italic font-normal text-white">
                users love.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi, I'm{" "}
              <span className="text-primary glow-text font-bold">
                Prashant Sharma
              </span>{" "}
              - a Software Developer with experience in React, Next.js, and
              TypeScript. Having a passion to develop user-friendly and visually
              appealing web applications.
            </p>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-lg text-primary mt-2 animate-fade-in animation-delay-300">
              Well Scroll Up for more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

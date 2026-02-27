/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import React from "react";
import Button from "../components/Button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Leetcode } from "@boxicons/react";

const Hero = () => {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        id="about"
      >
        {/* Bg Image */}
        <div className="absolute inset-0">
          <img
            src="/Heor Images/hero-bg.jpg"
            alt="Hero Image"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/50 to-background" />
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

              {/* Head Line */}
              <div className="space-y-4">
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
                  TypeScript. Having a passion to develop user-friendly and
                  visually appealing web applications.
                </p>
              </div>
              {/* CTA */}
              <div className="flex flex-wrap gap-5 animate-fade-in animation-delay-300 mt-5 items-center justify-around ">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedBorderButton size="lg">
                  <Download className="w-5 h-5" />
                  Download Resume
                </AnimatedBorderButton>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">
                  Follow me:{" "}
                </span>
                {[
                  { icon: Github, href: "https://github.com/wolf-dagger" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/prashant-sharma199805/",
                  },
                  {
                    icon: Leetcode,
                    href: "https://leetcode.com/u/Prashant_Sharma69/",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-100 ease-in"
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
            {/* Right column - Image */}
            <div className="relative animate-fade-in animation-delay-300">
              {/* Profile Image */}
              <div className="relative max-w-auto mx-auto md:max-w-2xl">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/60 via-transparent to-primary/10 blur-2xl animate-pulse"></div>
                <div className="relative glass rounded-3xl p-2 glow-border">
                  <img
                    src="/Heor Images/profile.png"
                    alt="Prashant Sharma"
                    className="w-full aspect-4/5 object-cover rounded-2xl "
                  />
                  {/* Floating Badge*/}
                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">
                        Available for work
                      </span>
                    </div>
                  </div>
                  {/* Stats Badge*/}
                  <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                    <div className="text-xl md:text-2xl font-bold text-primary">
                      Frontend Dev
                    </div>
                    <div className="text-xs text-muted-foreground">
                      React Js
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

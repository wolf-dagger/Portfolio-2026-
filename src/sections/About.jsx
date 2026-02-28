import { LightBulb } from "@boxicons/react";
import { Code2, Rocket, User } from "lucide-react";
import React from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing manintainable, scalable code is my forte.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Learning new things is my jam.",
  },
  {
    icon: User,
    title: "Team Player",
    description: "I thrive in collaborative environments.",
  },
  {
    icon: LightBulb,
    title: "Innovative",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-32 relative overflow-hidden scroll-mt-24"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                  About Me
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Building the future,
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  one component at a time
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I’m a passionate Software Developer with a strong focus on
                  building modern, responsive, and user-centric web
                  applications. With hands-on experience in React, Next.js, and
                  TypeScript, I enjoy transforming ideas into clean, scalable
                  solutions that not only work efficiently but also deliver a
                  seamless and engaging user experience.
                </p>
                <p>
                  My journey into tech is driven by curiosity and
                  problem-solving. I constantly challenge myself through data
                  structures, algorithm practice, and real-world projects to
                  sharpen my skills. I believe writing maintainable code and
                  understanding core fundamentals is what truly separates good
                  developers from great ones.
                </p>
                <p>
                  After taking a career break, I returned with renewed focus and
                  determination to grow in the frontend ecosystem. I thrive in
                  collaborative environments, adapt quickly to new technologies,
                  and aim to contribute meaningfully to impactful products that
                  make users’ lives easier and more intuitive.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-sm md:text-lg font-medium italic  text-foreground">
                  Transforming ideas into elegant digital solutions through
                  modern frontend technologies and strong problem-solving
                  foundations.
                </p>
              </div>
            </div>
            {/* Right column- highlits */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${idx + 1} * 100` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

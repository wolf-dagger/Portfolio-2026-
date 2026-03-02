import React from "react";

const experience = [
  {
    period: "2025 – 2026",
    role: "Student",
    company: "Bosscoder Academy",
    description:
      "Completed intensive training in Data Structures & Algorithms and System Design. Solved complex problems and strengthened core computer science fundamentals.",
    technologies: ["DSA", "System Design", "Java", "Javascript", "React Js"],
    current: true,
  },
  {
    period: "2023 – 2025",
    role: "Career Break",
    company: "Career Break",
    description:
      "Took a planned career break for personal reasons while continuing self-learning and skill enhancement in modern web development technologies.",
    technologies: ["React Js", "Next Js", "Tailwind CSS", "Git", "Figma"],
    current: false,
  },
  {
    period: "2022 – 2023",
    role: "Software Engineer Intern",
    company: "Omninos Software Solutions",
    description:
      "Worked on frontend development using React.js, Next.js, Tailwind CSS, and Framer Motion. Built responsive UI components and improved application performance.",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Git",
    ],
    current: false,
  },
  {
    period: "2021 – 2022",
    role: "Associate Software Engineer",
    company: "Mphasis Pvt. Ltd.",
    description:
      "Worked as a PeopleSoft Developer on a CRM tool, handling HRM modules and supporting enterprise-level business operations.",
    technologies: ["PeopleSoft", "Java", "SQL", "Git"],
    current: false,
  },
];

const Experience = () => {
  return (
    <>
      <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          {/* section header */}
          <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Career Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Experience that{" "}
              <span className="font-serif italic font-normal text-white">
                enhances my skills.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A timeline of my professional journey, highlighting my work
            </p>
          </div>
          {/* timeline */}
          <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_0_25px_rgba(32,178,166,0.8)]" />
            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                  style={{ animationDelay: `${(i + 1) * 150}ms` }}
                >
                  {/* timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background z-10">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>

                  {/* content */}
                  <div
                    className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                  >
                    <div
                      className={`glass p-6 rounded-2xl border border-primary/50 transition-all duration-500`}
                    >
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4">
                        {exp.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}
                      >
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

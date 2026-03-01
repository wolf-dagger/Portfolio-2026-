import { Github } from "@boxicons/react";
import { ArrowUpRight, Link } from "lucide-react";
import React from "react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const project = [
  {
    title: "Weather App",
    description:
      "A weather app built with React which fetches weather data for the input city.",
    image: "/public/projects thumbanails/project2.png",
    tags: ["React", "OpenWeather API"],
    link: "https://wolf-dagger.github.io/weatherApp/",
    github: "https://github.com/wolf-dagger/weatherApp",
  },
  {
    title: "Amazon Clone",
    description:
      "A clone of the Amazon website built with React and Redux Toolkit",
    image: "/public/projects thumbanails/project1.png",
    tags: ["React", "Redux Toolkit"],
    link: "https://amazoon-cart-system-prashant.netlify.app/",
    github: "https://github.com/wolf-dagger/weatherApp",
  },
  {
    title: "Todo App",
    description: "A todo app built with React and Redux Toolkit",
    image: "/public/projects thumbanails/project3.png",
    tags: ["React", "OpenWeather API"],
    link: "#",
    github: "#",
  },
  {
    title: "Crud App",
    description: "A Crud app built with React",
    image: "/public/projects thumbanails/project4.png",
    tags: ["React", "OpenWeather API"],
    link: "#",
    github: "#",
  },
];

const projects = () => {
  return (
    <>
      <>
        <section
          id="projects"
          className="py-15 md:py-30 relative overflow-hidden"
        >
          {/* background glows */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                Featured Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Projects that
                <span className="fint-serif italic font-normal text-white">
                  {" "}
                  make an impact.
                </span>
              </h2>
              <p className="text-muted-foreground animate-fade-in animation-delay-200">
                A selection of my recent work, form complex web applications to
                innovate tools that solve real-world problems.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {project.map((project, index) => (
                <div
                  key={index}
                  className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {/* image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                    {/* overlay links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        className="hidden md:block p-3 rounded-full glass hover:bg-primary hover: text-primary-foreground transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className="hidden md:block p-3 rounded-full glass hover:bg-primary hover: text-primary-foreground transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  {/* content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-all">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* mobile links */}
                    <div className="block md:hidden">
                      <div className=" flex items-center justify-center gap-4  hover:opacity-100 duration-300">
                        <a
                          href={project.link}
                          target="_blank"
                          className="p-3 rounded-full glass hover:bg-primary hover: text-primary-foreground transition-all"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          className="p-3 rounded-full glass hover:bg-primary hover: text-primary-foreground transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* view all CTA */}
            <div className="flex justify-center mt-10">
              <AnimatedBorderButton className="text-center mt-12 animate-fade-in animation-delay-500">
                View All Projects
                <ArrowUpRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </div>
          </div>
        </section>
      </>
      ,
    </>
  );
};

export default projects;

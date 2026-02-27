import React from "react";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "GitHub",
  "NPM",
  "Javascript",
  "Java",
  "Postman",
  "TypeScript",
  "Figma",
  "Visual Studio Code",
  "DevTools",
];

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p>Technologies I work with</p>
          <div>
            <div>
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
